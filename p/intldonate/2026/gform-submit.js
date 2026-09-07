// 通用：把原生 <form> 的欄位直接 POST 到 Google Form 的 formResponse 端點。
// Google Form 沒有回傳 CORS header，用 mode: 'no-cors' 送出，
// 前端無法讀取回應內容/狀態碼，只要 fetch 沒有丟出網路例外，就視為送出成功。
function initGformSubmit(formEl, successBoxEl) {
  formEl.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var submitBtn = formEl.querySelector('button[type="submit"]');
    var statusEl = formEl.querySelector('.submit-status');

    if (!formEl.checkValidity()) {
      formEl.reportValidity();
      return;
    }

    submitBtn.disabled = true;
    if (statusEl) statusEl.textContent = '送出中…';

    var formData = new FormData(formEl);
    var params = new URLSearchParams();
    formData.forEach(function (value, key) {
      params.append(key, value);
    });

    fetch(formEl.action, {
      method: 'POST',
      mode: 'no-cors',
      body: params
    })
      .then(function () {
        formEl.classList.add('hide-after-submit');
        if (successBoxEl) successBoxEl.classList.add('show');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      })
      .catch(function (err) {
        submitBtn.disabled = false;
        if (statusEl) statusEl.textContent = '送出失敗，請檢查網路連線後重試。若持續失敗，請改用下方備用連結填寫。';
        console.error(err);
      });
  });
}
