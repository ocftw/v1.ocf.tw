---
layout: story
og_title: 【開源治理系列】OSPO 正在集結中！來自世界各地的政府開源專案辦公室  
og_description: "開源治理系列 #2"
og_image: images/image1.png
publish_date: 2025-11-04
modified_time: 2025-11-04 18:00
author: Ian Liu (Yanyiyi)
section: 開源治理系列
---

# OSPO 正在集結中！來自世界各地的政府開源計畫辦公室  

撰文編輯／Ian Liu (Yanyiyi)

近年來「公共資金，公共程式」（Public Money, Public Code）的理念正在全球迅速普及。其核心主張即是 **「由納稅人資助開發的軟體，理應成為公共財，開放供社會大眾檢視、修改與再利用。」** 同時也是許多國家發展數位主權的一環。

為了有效實踐開源精神，不少政府機關也開始導入「開源專案辦公室」（Open Source Program Office，簡稱 OSPO）。以一個跨組織的單位，負責制定組織的開源策略、管理法規遵循，並作為與外部開源社群互動的橋樑。

## FLOSS PSO 網絡：各國 OSPOs 串連中

為了讓這些已起跑得政府 OSPO 不再單打獨鬥，「FLOSS PSO 網絡」因應而生：
- FLOSS 指的是「自由/開源軟體」（Free/ Libre and Open Source Software）。
- PSO 則是「公部門組織」（Public Sector Organisation）。

![如何參與成為 FLOSS-PSO 行動的一份子，翻譯資料來源：FLOSS-PSO Network 首頁][image2]

***如何參與成為 FLOSS-PSO 行動的一份子，翻譯資料來源：FLOSS-PSO Network 首頁***

這個專案由 [OSPO 聯盟（OSPO Alliance）](https://ospo.zone/) [^1] 支持，希望串連起各國的公部門 OSPO，讓大家有個交流、分享經驗的地方。  
這個網絡的加入方式本身就體現了「開源精神」。想加入的單位必須在一個公開的 [GitLab 程式碼庫（Repo）](https://gitlab.eclipse.org/eclipse/plato/public-ospos) 提交一個 [YAML 格式](https://floss-pso.network/ospometa-builder/)的登記表，說明自己的開源政策。這種透明的「開源治理」方式，讓所有人都能看見誰加入了、以及他們承諾了什麼。

![資料來源：FLOSS-PSO Network OSPOmeta YAML 生產器][image3]

***資料來源：FLOSS-PSO Network OSPOmeta YAML 生產器***

## 各國如何推動？三種發展模式！

而由各國提報的列表也成為一份寶貴的學習資源，讓後進者能「相互借鏡」，看看各國的開源政策是怎麼設計的。

截至本文發佈，已有來自多國的國家中央與地方政府 OSPO 加入了這個網絡。目前已經有 6 個國際或國家政府層級、 8 個地方政府層級的 OSPO 加入。我們發現了幾種獨特的發展模式，也和社群的大家分享。

![資料來源：FLOSS-PSO Network][image1]

***OCF 整理製圖。資料來源：FLOSS-PSO Network***

### 模式一：法國中央帶頭、地方響應的「核心與節點整合模式」

法國的成功關鍵，在於建立了一個聯邦式的「核心與節點整合模式」（Hub-and-Spoke）。
* **軸心 (Hub)**：由法國政府的「跨部門數位發展署」（**DINUM**）扮演。他們是國家級的開源核心架構師，負責制定全國一致的指導方針與通用工具，目標是提升公務體系的開源認知、支持政府原始碼的共享。  
* **節點 (Spokes)**：由各專業領域的政府機構扮演，例如「國家地理與森林資訊研究所」（**IGN**）。IGN 利用中央的指引，深入推動「開放地理資料」與「開源地理軟體」，並將其應用於公共政策。例如，他們推出了國家級的地理資訊基礎設施 [Géoplateforme](https://www.google.com/search?q=https://www.geoplateforme.fr/)，並積極支持 [Panoramax](https://panoramax.fr/)（一個共享街景影像的數位公眾領域）等協作專案。
這種「中央給釣竿、各專業自己釣魚」的模式，確保了政策的連貫性，也激發了個不會各種專業領域的創新。

### 模式二：丹麥團結力量大的「地方政府聯盟模式」

丹麥的 OS2 網路（[OS2 \- Offentligt Digitaliseringsfællesskab](https://os2.eu/)）則提供了一個由下而上由地方政府、民間社群一同向上協作的案例。 

它並非由中央政府主導，而是一個由有需要的地方政府們的各市鎮，一同自發組成的聯盟，目前丹麥有 98 個市鎮，其中高達 84% 是 OS2 的成員！  
這個模式的核心精神很類似於「團購」。許多市鎮都有共同的軟體需求（例如：申辦表單系統、公共場所的資訊螢幕、共用的電腦系統採購），但單一地方政府的採購量太小，很難要求軟體廠商客製化或有更漂亮的議價。  

於是，他們決定「集資」，一同找到共同開發或採購「開源」的解決方案。這樣不僅能共享開發成果、分攤成本，更扭轉了與軟體供應商的權力關係。  
OS2 的代表專案包括：

* [**OS2forms**](https://github.com/OS2Forms/)：是一套開放原始碼的表單系統，專為市政機關與公共部門設計，能處理如公民申請、內部審核、資料蒐集等複雜業務流程。系統支援自訂欄位、流程管理與資料整合，有助於提升行政效率與透明度。
* [**OS2display**](https://github.com/os2display)：是一套開源的資訊螢幕管理系統，適用於市政府、圖書館、學校等公共場所，可集中管理公告、活動與即時資訊的排程與顯示，強化資訊傳遞與公共服務。
* [**OS2BorgerPC**](https://github.com/os2borgerpc)：是一款基於 Ubuntu 的開源業系統，專為公共場所（如圖書館、民眾服務中心等）設計。它具備中央管理、自動清除使用者資料，以及防止鍵盤側錄等安全功能，能有效保護使用者隱私，並簡化系統維運。

### 模式三：美國聯邦技術先行的「政策程式碼化模式」

在美國龐大且法規繁複的聯邦政府中，聯邦醫療保險與補助服務中心（CMS）成立了全美第一個聯邦 OSPO。  他們的運作模式非常特別。CMS OSPO 的首要任務並非「開發軟體」，而是扮演一個「官僚體系領航角色」（Bureaucratic Navigator）。  

在一個充滿繁複法規、講求風險規避的公務體系中，他們的核心工作是為公務員「掃除障礙」，讓同仁們有能力、有信心地在開放環境中工作。他們將政府採購與軟體開發的標準流程「程式碼化」，推出了幾個關鍵專案，為其他機構提供了可以直接使用的以程式碼為核心的範本：

* [**ospo-guide**](https://dsacms.github.io/ospo-guide/)：這是一份為 CMS 員工寫的綜合性開源指南。它提供了軟體開發生命週期各個環節的 Roadmap，從需求與設計階段的授權選擇，到上線與驗收階段的安全審查，皆有明確指引。  
* [**repo-scaffolder**](https://github.com/DSACMS/repo-scaffolder)：這是一個自動化工具，能「一鍵生成」符合聯邦政府要求的標準專案結構。它能自動包含必要的授權文件、安全政策、行為準則等合規檔案。這極大地降低了啟動新專案的行政門檻，是將開發成果作為公共程式的第一步。  
* [**metrics**](https://github.com/DSACMS/metrics)：一個用於追蹤與展示 CMS 開源專案各項指標的網站。透過資料視覺化，它不僅向公眾展示了 OSPO 的工作成果，也為內部決策提供了依據。

這個將「政策」以「程式碼」實踐的模式，為其他美國無論聯邦、各州或地方行政單位，提供了在複雜體制內推動開源可以直接給工程師用與參考的 SOP 與文件。

## 如何成立與開始運作 OSPO ？

看了這麼多案例，想在您的機關裡推動開源，或成立 OSPO，可以從哪裡開始？  

[OSPO 聯盟](https://ospo.zone/)旗下有一套非常完整的開源治理方法論——[良善治理手冊（GGI Handbook）](https://ospo.zone/ggi-handbook/introduction/)，OCF 也已協助將其[翻譯為中文版](https://ospo-alliance.org/docs/ggi_handbook_v1.2_zh_Hant.pdf)，適合作為開啟計劃的起點。  此外，針對 OSPO 成立過程中所需的一切流程管理，他們也開發了 [GGI-Board](https://ospo.zone/ggi-board/) 工具，協助您管理整體進度。  

從法國的中央為核心串連各節點、丹麥的聯盟團購，到美國的政策領航，我們看到各國政府正用不同的方式，擁抱「開源程式碼」中！

## 開源治理系列專文

* [#1 OCF 正式加入 OSPO 聯盟！開源治理手冊是什麼？](https://ocf.tw/story/ospos-1-join-OSPO-alliance/)
* [#2 OSPO 正在集結中！來自世界各地的政府開源專案辦公室](https://ocf.tw/story/ospos-2-floss-pso-intl-network/)

[^1]:  OSPO 聯盟，Open Source Program Offices Alliance 於 2021 年 6 月 由歐洲多個開放原始碼組織共同發起，包括 OW2、Eclipse Foundation、OpenForum Europe 與 Foundation for Public Code 等。這是一個以「開源」為核心的社群型態聯盟，由各支持組織與志工共同組成，致力於推動公共與私部門建立及強化開放原始碼治理能力，主要為國際級的經驗共用平台與治理工具庫。


[image1]: images/image1.png
[image2]: images/image2.png
[image3]: images/image3.png