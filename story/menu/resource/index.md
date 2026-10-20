---
layout: global
og_title: 各項成果與資源下載
og_description: "研究報告、推廣手冊都在這裡"
og_image: 

---

<style>
/* 頁面專屬 CSS，讓版面瞬間升級 */
.resource-container {
    max-width: 1080px;
    margin: 0 auto;
    padding: 0 18px 48px;
}

.section-title {
    border-left: 5px solid #2c3e50; /* 左側裝飾線 */
    padding-left: 15px;
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 1.8em;
    color: #333;
}

.card-grid {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
    margin: 30px 0 40px;
}

.resource-card {
    width: 300px;
    max-width: 100%;
    text-align: center;
    color: inherit;
    transition: transform 0.3s ease;
    display: flex;
    flex-direction: column;
}

.resource-card:hover {
    transform: translateY(-10px);
}

.resource-card__visual {
    position: relative;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    background: linear-gradient(135deg, #5a4b9b, #8171c2);
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    margin-bottom: 15px;
}

.resource-card__visual img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.resource-card__visual img.resource-card__image--podcast {
    object-position: 42% center;
}

.resource-card__visual img.resource-card__image--festival {
    object-position: 6% center;
}

.resource-card__visual--title {
    display: grid;
    place-items: center;
    padding: 48px 32px 28px;
    text-align: center;
}

.resource-card__visual-title {
    max-width: 90%;
    color: #fff;
    font-size: clamp(1.35rem, 2.4vw, 2rem);
    font-weight: 800;
    line-height: 1.35;
    text-shadow: 0 2px 10px rgba(44, 34, 86, 0.28);
}

.resource-card__body {
    display: flex;
    flex: 1;
    flex-direction: column;
}

.resource-card h3 {
    margin-top: 0;
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
}

.resource-card p {
    font-size: 0.95rem;
    color: #555;
    margin: 0 0 12px;
    line-height: 1.5;
}

.resource-card__actions {
    margin-top: auto;
}

.resource-card__button {
    display: inline-block;
    padding: 6px 16px;
    margin: 2px;
    border-radius: 20px;
    background-color: #27ae60;
    color: #fff !important;
    font-size: 0.9rem;
    text-decoration: none !important;
}

.resource-card__button:hover,
.resource-card__button:focus-visible {
    color: #fff !important;
    opacity: 0.9;
}

@media (max-width: 700px) {
    .resource-container { padding-inline: 14px; }
    .card-grid { gap: 2rem; }
    .resource-card {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        box-sizing: border-box;
    }
    .section-title { font-size: 1.5em; }
}

/* 針對年度報告的特殊按鈕樣式 */
.report-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.report-btn {
    display: inline-flex;
    align-items: center;
    padding: 12px 20px;
    background-color: #f8f9fa;
    color: #333;
    border-radius: 50px;
    text-decoration: none;
    border: 1px solid #ddd;
    transition: all 0.2s;
}

.report-btn:hover {
    background-color: #D7DCF0;
    color: #fff;
}

.report-btn i {
    margin-right: 8px;
}
</style>


<div class="resource-container">

<h1>各項成果、資源下載</h1>


<h2 class="section-title">開放科技與倡議</h2>
<div class="card-grid">
    <a href="https://ai.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/ocf-ai-research.png" alt="OCF AI 研究報告索引" fetchpriority="high"></div>
        <div class="resource-card__body"><h3>OCF AI 研究報告索引</h3><p>開放文化基金會 AI 研究計畫的技術報告總覽</p><span class="resource-card__actions"><span class="resource-card__button">查看報告</span></span></div>
    </a>
    <a href="/p/opentech/ai-ready-data/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/ai-ready.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>從開放資料到 AI-READY 國際實踐研究</h3><p>從 5 個國際案例，整理 AI 時代開放資料治理的實務路徑</p><span class="resource-card__actions"><span class="resource-card__button">查看研究</span></span></div>
    </a>
    <a href="https://ocf.tw/p/opentech/otguide/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">關於開放科技</strong></div>
        <div class="resource-card__body"><h3>關於開放科技</h3><p>從原始碼、資料到政府：開放，如何塑造新時代數位社會</p><span class="resource-card__actions"><span class="resource-card__button">前往網站</span></span></div>
    </a>
    <a href="https://openstartervillage.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/openstarter.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開源星手村</h3><p>桌遊及教案資源，輕鬆了解開源文化</p><span class="resource-card__actions"><span class="resource-card__button">前往網站</span></span></div>
    </a>
    <a href="https://docs.google.com/presentation/d/1WAh6lcLDfof_iZzuGmvw-ztIWZfP7QZSdHJu7HScTlA/edit" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">開放國會研究報告</strong></div>
        <div class="resource-card__body"><h3>開放國會研究報告</h3><p>如何改善工作追蹤與開放國會委員會內部協力（CC BY 4.0）</p><span class="resource-card__actions"><span class="resource-card__button">查看報告</span></span></div>
    </a>
    <a href="https://opengovreport.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/open-government-report.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開放政府觀察報告</h3><p>2014-2016，中英文版（CC BY-SA 4.0）</p><span class="resource-card__actions"><span class="resource-card__button">前往網站</span></span></div>
    </a>
    <a href="https://github.com/moda-gov-tw" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">數位部中文化成果</strong></div>
        <div class="resource-card__body"><h3>數位部中文化成果</h3><p>GitHub 上的開源軟體在地化專案</p><span class="resource-card__actions"><span class="resource-card__button">查看專案</span></span></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/opentech/">開放科技與倡議專案</a></small></p>


<h2 class="section-title">公民社會數位防禦</h2>
<div class="card-grid">
    <a href="https://ssd.ocf.tw/" class="resource-card">
        <div class="resource-card__visual"><img src="/p/defendhrd/ssd-cover.png" alt="SSD 資安防護基礎教材" loading="lazy"></div>
        <div class="resource-card__body"><h3>資安防護基礎教材 (SSD)</h3><p>給公民團體與人權工作者的資安防護基礎教材，涵蓋威脅建模、裝置安全、身份驗證、加密通訊等八大主題，採 CC BY 4.0 授權。</p><span class="resource-card__actions"><span class="resource-card__button">前往網站</span></span></div>
    </a>
    <a href="https://ssd.ocf.tw/play/" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/ssd-game.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>資安新手村遊戲版</h3><p>透過互動遊戲理解數位安全風險與防護做法。</p><span class="resource-card__actions"><span class="resource-card__button">開始遊戲</span></span></div>
    </a>
    <div class="resource-card">
        <div class="resource-card__visual"><img src="/p/defendhrd/Digital%20Security%20Mapping%20for%20HRDs%20in%20Taiwan.png" alt="台灣人權與民主倡議團體數位威脅概況" loading="lazy"></div>
        <div class="resource-card__body"><h3>台灣人權與民主倡議團體數位威脅概況</h3><p>透過 35 份問卷與 3 場深度訪談，瞭解在臺人權與民主倡議團體面臨的數位威脅樣態與資安需求。</p><div class="resource-card__actions"><a href="https://drive.google.com/file/d/1sxAFmSiJL6DzdO3ezq_hJSBROuGXNLAA/view" class="resource-card__button">中文版</a><a href="https://drive.google.com/file/d/1VV12Rp7IKkWexNTKQRuWIA4Zfd8ztN9X/view?usp=sharing" class="resource-card__button">英文版</a></div></div>
    </div>
    <div class="resource-card">
        <div class="resource-card__visual"><img src="/p/defendhrd/safeguarding-advocacy-cover.png" alt="守護倡議之聲封面" loading="lazy"></div>
        <div class="resource-card__body"><h3>守護倡議之聲</h3><p>本專案結案報告，整理「資安陪伴計畫」(SMP) 對公民團體與人權工作者的服務模式、實作經驗與建議。</p><div class="resource-card__actions"><a href="https://drive.google.com/file/d/1wgYdObezFzlI6OJLozzqQF5Vt11B7gCd/view?usp=drive_link" class="resource-card__button">中文版</a><a href="https://drive.google.com/file/d/1ln6__KiGZgf9QSkYhwKo8gm4L9d9tExo/view?usp=drive_link" class="resource-card__button">英文版</a></div></div>
    </div>
    <div class="resource-card">
        <div class="resource-card__visual"><img src="/p/defendhrd/cost-of-trust-cover.png" alt="信任的代價封面" loading="lazy"></div>
        <div class="resource-card__body"><h3>信任的代價</h3><p>一份針對臺灣人權工作者實際遭遇資安攻擊事件的個案研究實錄，記錄攻擊樣態、防守過程與經驗教訓。</p><div class="resource-card__actions"><a href="https://drive.google.com/file/d/1VwZwVXpOjTBZibVCTbIF1wUdPhQU_wJz/view?usp=drive_link" class="resource-card__button">中文版</a><a href="https://drive.google.com/file/d/1Q3Z2nLJ4dkQpmSqXQcctl4IW3cUhdDkF/view?usp=drive_link" class="resource-card__button">英文版</a></div></div>
    </div>
    <div class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/cso-defense.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>CSOs 數位防禦手冊</h3><p>注重隱私與安全的開放原始碼工具指南，2024.07 更新。</p><div class="resource-card__actions"><a href="https://digitalsecurityhandbook.ocf.tw/" class="resource-card__button">網頁版</a><a href="https://ocf.tw/story/menu/resource/(public)CSOs數位防禦手冊_注重隱私與安全的開放原始碼工具V2.pdf" class="resource-card__button">PDF</a></div></div>
    </div>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/csodefense/">公民社會數位防禦計畫</a></small></p>


<h2 class="section-title">數位人權</h2>
<div class="card-grid">
    <a href="https://ocf.tw/p/pdr/pdr-report-2026.pdf" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/platform-data-report.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>配合政府執法，數位平臺該交出民眾資料嗎？</h3><p>政府、平臺與公民權利的拉鋸。</p><span class="resource-card__actions"><span class="resource-card__button">查看報告</span></span></div>
    </a>
    <a href="https://ocf.tw/p/rdr" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/digital-rights.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>企業數位人權報告</h3><p>檢視企業在數位時代的人權責任。</p><span class="resource-card__actions"><span class="resource-card__button">查看報告</span></span></div>
    </a>
    <div class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">強化隱私報告</strong></div>
        <div class="resource-card__body"><h3>強化隱私報告</h3><p>東亞數位人權及所處環境之下，公民社會的行動策略。</p><div class="resource-card__actions"><a href="https://ocf.tw/p/dra/ep/" class="resource-card__button">中文版</a><a href="https://drive.google.com/file/d/17DgeI_xVRdvt4_sAGetSRAv7tSVAGg-3/view?usp=sharing" class="resource-card__button">英文版</a></div></div>
    </div>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/dra/">數位人權與倡議</a></small></p>


<h2 class="section-title">網路自由</h2>
<div class="card-grid">
    <a href="https://resilience.ocf.tw/web/report/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">網路韌性檢測報告</strong></div>
        <div class="resource-card__body"><h3>網路韌性檢測報告</h3><p>海纜斷光會怎樣？認識台灣的國際網路中斷風險。</p><span class="resource-card__actions"><span class="resource-card__button">查看報告</span></span></div>
    </a>
    <a href="https://resilience.ocf.tw/web/" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">網路韌性檢測工具</strong></div>
        <div class="resource-card__body"><h3>網路韌性檢測工具</h3><p>海纜斷掉時，台灣人常用的網站會動嗎？</p><span class="resource-card__actions"><span class="resource-card__button">開始檢測</span></span></div>
    </a>
    <a href="https://hackmd.io/efBMZl4ITImkxUOjlmByHg?view" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">網路自由小聚共筆</strong></div>
        <div class="resource-card__body"><h3>網路自由小聚共筆</h3><p>社群討論記錄與知識分享。</p><span class="resource-card__actions"><span class="resource-card__button">閱讀共筆</span></span></div>
    </a>
    <a href="https://youtu.be/04fsSK3q7Oo?si=iNItWnSuPDtELc-J" class="resource-card">
        <div class="resource-card__visual"><img class="resource-card__image--podcast" src="/story/menu/resource/images/internet-freedom-podcast.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>小劇場 Podcast</h3><p>用聽的了解網路自由議題。</p><span class="resource-card__actions"><span class="resource-card__button">收聽節目</span></span></div>
    </a>
    <a href="https://www.youtube.com/watch?v=ek2XjW7Q3wI&list=PLFuYOsppHDrlYquISvSfOjrT5g_mjMGot" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">網路自由小聚短影音</strong></div>
        <div class="resource-card__body"><h3>網路自由小聚短影音</h3><p>2024 重要的幾場活動。</p><span class="resource-card__actions"><span class="resource-card__button">觀看影片</span></span></div>
    </a>
</div>
<p style="text-align: right;"><small>關於 <a href="https://ocf.tw/p/infr/">網路自由</a></small></p>


<h2 class="section-title">國際夥伴串聯</h2>
<div class="card-grid">
    <a href="https://ocf.tw/story/menu/overseas" class="resource-card">
        <div class="resource-card__visual resource-card__visual--title" aria-hidden="true"><strong class="resource-card__visual-title">國際會議出訪記錄</strong></div>
        <div class="resource-card__body"><h3>國際會議出訪記錄</h3><p>OCF 接軌國際開源社群的足跡。</p><span class="resource-card__actions"><span class="resource-card__button">查看記錄</span></span></div>
    </a>
</div>


<h2 class="section-title">十週年開源祭</h2>
<div class="card-grid">
    <a href="https://10years.ocf.tw" class="resource-card">
        <div class="resource-card__visual"><img class="resource-card__image--festival" src="/story/menu/resource/images/10years.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開源祭官方網站</h3><p>OCF 十週年特別活動首頁。</p><span class="resource-card__actions"><span class="resource-card__button">前往網站</span></span></div>
    </a>
    <a href="https://ocf.tw/story/change-the-world" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/open-festival-special-1.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開源祭特刊 #1</h3><p>他們用程式碼改變世界：臺灣開源運動的前世今生。</p><span class="resource-card__actions"><span class="resource-card__button">閱讀特刊</span></span></div>
    </a>
    <a href="https://ocf.tw/story/find-your-place" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/open-festival-special-2.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開源祭特刊 #2</h3><p>沒寫過程式，也能當開源大神！走進開源祭，找到自己的位子。</p><span class="resource-card__actions"><span class="resource-card__button">閱讀特刊</span></span></div>
    </a>
    <a href="https://ocf.tw/story/ten-years-of-ocf" class="resource-card">
        <div class="resource-card__visual"><img src="/story/menu/resource/images/open-festival-special-3.webp" alt="" loading="lazy"></div>
        <div class="resource-card__body"><h3>開源祭特刊 #3</h3><p>從協助社群帳務到登上國際舞台，OCF 推動開源文化的十年之路。</p><span class="resource-card__actions"><span class="resource-card__button">閱讀特刊</span></span></div>
    </a>
</div>


<h2 class="section-title">歷年成果報告</h2>
<div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
<p>
OCF 的經費來源主要是透過對社群收取服務費用、專案承攬、定期定額的捐款，以及單次性的捐贈等。這些經費除了使用在每月固定的行政開銷費用（行政、辦公室營運等）之外，多使用於專案支持、活動辦理等業務進行。OCF 主要業務之一為協助開源社群行政及財務管理，其各社群在 OCF 的捐款收入皆為各自社群專款專用，OCF 僅盡代管之責。<br>
每年業務成果、收支情形及社群協助狀況等，詳細請見 OCF 年度報告：
</p>

    <div class="report-grid">
        {% assign i = site.data.settings.current %}
        {% for item in site.data.reports %}
        {% unless item[0] contains "_" %}
        {% assign i = i | minus:1 %}
            <a href="/p/{{ i }}" target="_blank" class="report-btn">
                <i class="globe icon"></i>
                {{ i }} 年成果報告
            </a>
        {% endunless %}
        {% endfor %}
    </div>
</div>

</div>
