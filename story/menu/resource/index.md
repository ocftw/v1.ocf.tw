---
layout: story
og_title: 各項成果與資源下載
og_description: "研究報告、推廣手冊都在這裡"
og_image: 
---

# 各項成果、資源下載

## 開放科技與倡議

* [關於開放科技—從原始碼、資料到政府：開放，如何塑造新時代數位社會](https://ocf.tw/p/opentech/otguide/)
* [開源星手村桌遊及教案資源](https://openstartervillage.ocf.tw/)
* [開放國會研究報告 - 如何改善工作追蹤與開放國會委員會內部協力 (CC BY 4.0)](https://docs.google.com/presentation/d/1WAh6lcLDfof_iZzuGmvw-ztIWZfP7QZSdHJu7HScTlA/edit?slide=id.g1c2fc0ba76c_0_998#slide=id.g1c2fc0ba76c_0_998)
* [開放政府觀察報告 2014-2016，中英文版 (CC BY-SA 4.0)](https://opengovreport.ocf.tw/)

關於[開放科技與倡議專案](https://ocf.tw/p/opentech/)

## 公民社會數位防禦 
* [CSOs 數位防禦手冊 2024.07 更版](https://ocf.tw/story/menu/resource/(public)CSOs數位防禦手冊_注重隱私與安全的開放原始碼工具V2.pdf)
* [CSOs 數位防禦手冊網頁版](https://digitalsecurityhandbook.ocf.tw/)

關於[公民社會數位防禦計畫](https://ocf.tw/p/csodefense/)

## 數位人權

* [企業數位人權報告](https://ocf.tw/p/rdr)
* [台灣人權與民主倡議團體數位威脅概況 (English)](https://drive.google.com/file/d/1VV12Rp7IKkWexNTKQRuWIA4Zfd8ztN9X/view?usp=sharing)
* [台灣人權與民主倡議團體數位威脅概況 (中文摘要)](https://drive.google.com/file/d/1sxAFmSiJL6DzdO3ezq_hJSBROuGXNLAA/view?usp=sharing)
* [強化隱私：東亞數位人權及所處環境之下，公民社會的行動策略（中英文版）](https://ocf.tw/p/dra/ep/)

關於[在台人權工作者的數位安全樣態與培力](https://ocf.tw/p/defendhrd/)<br>
關於[數位人權與倡議](https://ocf.tw/p/dra/)

## 網路自由
* [網路自由小聚共筆](https://hackmd.io/efBMZl4ITImkxUOjlmByHg?view)
* [小劇場 Podcast](https://youtu.be/04fsSK3q7Oo?si=iNItWnSuPDtELc-J)
* [2024 回顧影片](https://www.youtube.com/watch?v=ek2XjW7Q3wI&list=PLFuYOsppHDrlYquISvSfOjrT5g_mjMGot)

關於[網路自由計畫](https://ocf.tw/p/infr/)

## 國際夥伴合作

* [國際會議出訪記錄](https://ocf.tw/story/menu/overseas)

關於[國際夥伴合作](https://ocf.tw/p/global/)

## 自由與開源軟體中文化

* [數位部中文化成果](https://github.com/moda-gov-tw)

關於[自由與開源軟體中文化計畫](https://ocf.tw/p/oss_localization/)

## 十週年開源祭
* [開源祭網站](https://10years.ocf.tw)
- 開源祭特刊
  - [他們用程式碼改變世界——臺灣開源運動的前世今生](https://ocf.tw/story/change-the-world)
  - [沒寫過程式，也能當開源大神！走進開源祭，找到自己的位子](https://ocf.tw/story/find-your-place)
  - [從協助社群帳務到登上國際舞台，OCF 推動開源文化的十年之路](https://ocf.tw/story/ten-years-of-ocf)

## 歷年成果報告
<p>
OCF 的經費來源主要是透過對社群收取服務費用、專案承攬、定期定額的捐款，以及單次性的捐贈等。這些經費除了使用在每月固定的行政開銷費用（行政、辦公室營運等）之外，多使用於專案支持、活動辦理等業務進行。OCF 主要業務之一為協助開源社群行政及財務管理，其各社群在 OCF 的捐款收入皆為各自社群專款專用，OCF 僅盡代管之責。<br>
每年業務成果、收支情形及社群協助狀況等，詳細請見 OCF 年度報告：
</p>
{% assign i = site.data.settings.current %}
{% for item in site.data.reports %}
{% unless item[0] contains "_" %}
  {% assign i = i | minus:1 %}
<div class="item">
  <a href="/p/{{ i }}" target="_blank">
      <i class="globe icon"></i>
      {{ i }} 年成果報告
  </a>
</div>
{% endunless %}
{% endfor %}