(function () {
  var hero = document.getElementById("infr-webm-hero");
  var video = document.getElementById("infr-webm-motion");
  var control = document.getElementById("infr-webm-control");
  var status = document.getElementById("infr-webm-status");
  var statusText = status && status.querySelector(".infr-motion-status__text");

  if (!hero || !video || !control) return;

  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var svg = hero.querySelector(".infr-network-flow");

  function setStatus(mode, text) {
    if (!status || !statusText) return;
    status.dataset.mode = mode;
    statusText.textContent = text;
  }

  function setEngaged(engaged) {
    hero.toggleAttribute("data-engaged", engaged);
    control.setAttribute("aria-pressed", String(engaged));

    if (reducedMotion.matches || !engaged) {
      video.pause();
      if (video.readyState >= 1) video.currentTime = 0;
      if (svg && typeof svg.pauseAnimations === "function") svg.pauseAnimations();
      setStatus(
        reducedMotion.matches ? "fallback" : "",
        reducedMotion.matches ? "依照你的設定顯示靜態主視覺" : "移到按鈕上，讓訊號開始流動"
      );
      return;
    }

    if (svg && typeof svg.unpauseAnimations === "function") svg.unpauseAnimations();
    var playAttempt = video.play();
    if (playAttempt && typeof playAttempt.then === "function") {
      playAttempt.then(function () {
        var format = video.currentSrc.indexOf(".webm") !== -1 ? "WebM" : "MP4";
        setStatus("motion", format + " 訊號流動中");
      }).catch(function () {
        setStatus("fallback", "瀏覽器已阻擋自動播放，目前顯示靜態主視覺");
      });
    }
  }

  video.addEventListener("error", function () {
    setStatus("fallback", "影片無法載入，目前顯示靜態主視覺");
  });

  control.addEventListener("pointerenter", function () { setEngaged(true); });
  control.addEventListener("pointerleave", function () { setEngaged(false); });
  control.addEventListener("focus", function () { setEngaged(true); });
  control.addEventListener("blur", function () { setEngaged(false); });
  control.addEventListener("click", function () { setEngaged(true); });

  if (typeof reducedMotion.addEventListener === "function") {
    reducedMotion.addEventListener("change", function () { setEngaged(false); });
  } else if (typeof reducedMotion.addListener === "function") {
    reducedMotion.addListener(function () { setEngaged(false); });
  }
  hero.setAttribute("data-motion-ready", "true");
  video.load();
  setEngaged(false);

  var journey = document.getElementById("journey");
  var steps = Array.prototype.slice.call(document.querySelectorAll(".infr-step"));
  var progressPath = document.querySelector(".infr-packet-map__progress");
  var mapNodes = Array.prototype.slice.call(document.querySelectorAll(".infr-map-node"));
  var mapStatus = document.querySelector(".infr-packet-map__status");

  function showJourneyStage(stage, text) {
    var lastStage = Math.max(steps.length - 1, 1);
    var progress = Math.min(Math.max(stage / lastStage, 0), 1);

    steps.forEach(function (step) {
      step.classList.toggle("is-active", Number(step.dataset.stage) === stage);
    });
    mapNodes.forEach(function (node) {
      node.classList.toggle("is-active", Number(node.dataset.node) <= stage);
    });
    if (progressPath) progressPath.style.strokeDashoffset = String(1 - progress);
    if (mapStatus && text) mapStatus.textContent = text;
  }

  if (journey && steps.length && "IntersectionObserver" in window) {
    var stepObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        showJourneyStage(Number(entry.target.dataset.stage), entry.target.dataset.status);
      });
    }, { rootMargin: "-38% 0px -42% 0px", threshold: 0 });

    steps.forEach(function (step) { stepObserver.observe(step); });
  }

  showJourneyStage(0, steps[0] && steps[0].dataset.status);
}());
