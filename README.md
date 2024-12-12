# OCF.TW 開放文化基金會官方網站交接文件

這份文件是寫給維護 OCF 網站的人，希望讓大家不用特別花時間學習網站開發技術，就能順利完成新增專案、修改頁面內容等日常工作。

## 背景知識

大家知道網站分成前端、後端，前端就是看得到的網頁，後端則是看不到的伺服器、資料庫。我們 OCF 官網因為寄生在 github 上面，使用內建工具的關係，只需要做前端就可以了。

只要按照規定的方式，製作網頁版面跟網頁資料，github 的內建工具 jekyll 就會幫我們自動合成前端的網頁。網頁版面的檔案格式是 .html，網頁資料的檔案格式是 .yml，這就是維護 OCF 官網時需要編輯的兩種檔案。

編輯完成後，可以先到 [編輯紀錄](https://github.com/ocftw/v1.ocf.tw/commits/gh-pages) 檢查剛才改的內容是不是有成功合成到網頁，確認有綠色勾勾以後，就可以直接到上線網址 [ocf.tw](http://ocf.tw/) 看結果。

## 如何編輯網站內容

### 新增專案

#### 一、建立專案資料

1. 決定專案 id （英數，英文全小寫）
2. 建立專案資料的資料夾
   - 位置：`_data/p/（專案 id）/`
3. 建立專案的 yml 檔案
   - 名稱：`project.yml`
   - 位置：`_data/p/（專案 id）/`
4. 編輯專案的 yml 檔案
   - 範例：[`_data/p/project_id/project.yml`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/p/project_id/project.yml)

#### 二、建立專案網頁

1. 建立專案網頁的資料夾
   - 名稱：專案 id
   - 位置：`p/`
2. 建立專案網頁的 html 檔案
   - 名稱：`index.html`
   - 位置：`p/（專案 id）/`
3. 編輯專案網頁的 html 檔案
   - 範例：[`p/project_id/index.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/p/project_id/index.html)
   - [專案網頁範例預覽](https://ocf.tw/p/project_id/)

#### 三、建立專案英文網頁

1. 建立專案英文網頁的資料夾
   - 名稱：專案 id
   - 位置：`en/p/`
2. 建立專案英文網頁的 html 檔案
   - 名稱：`index.html`
   - 位置：`en/p/（專案 id）/`
3. 編輯專案英文網頁的 html 檔案
   - 範例：[`en/p/project_id/index.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/en/p/project_id/index.html)
   - [專案英文網頁範例預覽](https://ocf.tw/en/p/project_id/)

#### 四、把專案加到 [專案與成果](http://ocf.tw/projects/) 頁的列表

::: warning
TODO：未來專案列表會自動抓取資料，不需再額外設定
:::

### 新增子專案

子專案的 yml 資料格式和 html 頁面版型，都和專案沒有分別，只是檔案位置不在 `p/` 而是在 `p/（專案 id）/` ，也就是專案資料夾的下一層。

#### 一、建立子專案資料

1. 確認所屬專案 id
2. 決定子專案 id （英數，英文全小寫）
3. 建立子專案資料的資料夾
   - 位置：`_data/p/（專案 id）/（子專案 id）/`
4. 建立子專案的 yml 檔案
   - 名稱：`project.yml`
   - 位置：`_data/p/（專案 id）/（子專案 id）/`
5. 編輯子專案的 yml 檔案
   - 範例：[`_data/p/project_id/sub_project_id/project.yml`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/p/project_id/sub_project_id/project.yml)

#### 二、建立子專案網頁

1. 建立子專案網頁的資料夾
   - 名稱：子專案 id
   - 位置：`p/（專案 id）/`
2. 建立子專案網頁的 html 檔案
   - 名稱：`index.html`
   - 位置：`p/（專案 id）/（子專案 id）/`
3. 編輯子專案網頁的 html 檔案
   - 範例：[`p/project_id/sub_project_id/index.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/p/project_id/sub_project_id/index.html)
   - [子專案網頁範例預覽](https://ocf.tw/p/project_id/sub_project_id/)

#### 三、建立子專案英文網頁

1. 建立子專案英文網頁的資料夾
   - 名稱：子專案 id
   - 位置：`en/p/`
2. 建立子專案英文網頁的 html 檔案
   - 名稱：`index.html`
   - 位置：`en/p/（專案 id）/（子專案 id）/`
3. 編輯子專案英文網頁的 html 檔案
   - 範例：[`en/p/project_id/sub_project_id/index.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/en/p/project_id/sub_project_id/index.html)
   - [子專案英文網頁範例預覽](https://ocf.tw/en/p/project_id/sub_project_id/)

### 新增活動

#### 一、建立活動資料

1. 確認所屬專案 id、子專案 id（如果有子專案的話）
2. 決定活動 id （英數，英文全小寫）
3. 建立活動的 yml 檔案
   - 名稱：`events.yml`
     p.s. 因為一個 yml 檔案內有多筆活動資料，所以檔名是複數，有 s 喔
   - 位置：`_data/p/（專案 id）/` 或 `_data/p/（專案 id）/（子專案 id）/`
4. 編輯活動的 yml 檔案
   - 範例：[`_data/p/project_id/events.yml`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/p/project_id/events.yml)

#### 二、建立活動網頁

1. 建立活動網頁的 html 檔案
   - 名稱：`（活動 id）.html`
   - 位置：`p/（專案 id）/` 或 `p/（專案 id）/（子專案 id）/`
2. 編輯活動網頁的 html 檔案
   - 範例：[`p/project_id/event_id.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/p/project_id/event_id.html)
   - [活動網頁範例預覽](https://ocf.tw/p/project_id/event_id)

#### 三、建立活動英文網頁

1. 建立活動英文網頁的 html 檔案
   - 名稱：`（活動 id）.html`
   - 位置：`en/p/（專案 id）/` 或 `en/p/（專案 id）/（子專案 id）/`
2. 編輯活動英文網頁的 html 檔案
   - 範例：[`en/p/project_id/event_id.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/en/p/project_id/event_id.html)
   - [活動英文網頁範例預覽](https://ocf.tw/en/p/project_id/event_id)

### 新增專案成果網頁

#### 一、建立專案成果資料

3. 建立專案成果的 yml 檔案
   - 名稱：`（年份）.yml`
   - 位置：`_data/p/（專案 id）/`
4. 編輯專案成果的 yml 檔案
   - 範例：[`_data/p/project_id/2021.yml`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/p/project_id/2021.yml)

#### 二、建立專案成果網頁

1. 建立專案網頁的 html 檔案
   - 名稱：`（年份）.html`
   - 位置：`p/（專案 id）/`
2. 編輯專案網頁的 html 檔案
   - 範例：[`p/project_id/2021.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/p/project_id/2021.html)
   - [專案網頁範例預覽](https://ocf.tw/p/project_id/2021)

### 新增自由頁面

需要在專案底下架一個網頁、但又沒有要套用任何特定版型的時候，可以使用自由頁面，自由頁面僅提供 header 跟 footer，中間的內容和排版不受任何限制。

#### 一、建立自由頁面

1. 決定自由頁面 id
2. 建立自由頁面的 html 檔案
   - 名稱：`（自由頁面 id）.html`
   - 位置：`p/（專案 id）/` 或 `p/（專案 id）/（子專案 id）/`
3. 編輯自由頁面的 html 檔案
   - 範例：[`p/project_id/freestyle.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/p/project_id/freestyle.html)
   - [自由頁面範例預覽](https://ocf.tw/p/project_id/freestyle)

#### 二、建立英文版自由頁面

1. 建立英文版自由頁面的 html 檔案
   - 名稱：`（自由頁面 id）.html`
   - 位置：`en/p/（專案 id）/` 或 `en/p/（專案 id）/（子專案 id）/`
2. 編輯英文版自由頁面的 html 檔案
   - 範例：[`en/p/project_id/freestyle.html`](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/en/p/project_id/freestyle.html)
   - [英文版自由頁面範例預覽](https://ocf.tw/en/p/project_id/freestyle)

---

分隔線：以下同 [2016 版 README](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_docs/v2016/README.md)

---

### 新增工作人員

一、建立工作人員資料

1. 確認人員 id （建議沿用公務上的 slack id / telegram id / twitter id 等）
2. 建立工作人員的 yml 檔案
   - 名稱： `（人員 id）.yml`
   - 位置： `_data/people/individuals/`
3. 編輯工作人員的 yml 檔案
   - 範例： [`_data/people/individuals/_person_id.yml`](https://github.com/ocftw/v1.ocf.tw/tree/gh-pages/_data/people/individuals/_person_id.yml)

二、把工作人員加到 [工作夥伴](http://ocf.tw/people/) 頁的列表

- 把 `（人員 id）` 加到 `/_data/people/relations/(list_id).yml` 的清單中，如 [/_data/people/relations/staff.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/people/relations/staff.yml)

::: warning
TODO: 將來會改成直接在 yml 裡面開一個欄位，設定該 staff 是否顯示在列表
:::

### 新增合作單位

一、建立合作單位資料

1. 確認組織 id（建議沿用該單位官網的網域名稱）
2. 建立合作單位的 yml 檔案
   - 名稱： `（組織 id）.yml`
   - 位置： `_data/people/orgs/`
3. 編輯合作單位的 yml 檔案
   - 範例： [`_data/people/orgs/_org_id.yml`](https://github.com/ocftw/v1.ocf.tw/tree/gh-pages/_data/people/org/_org_id.ymls)

二、把合作單位加到 [工作夥伴](http://ocf.tw/people/) 頁的列表（optional，視業務需要）

- 把 `（組織 id）` 加到 `/_data/people/relations/(list_id).yml` 的清單中，如 [/_data/people/relations/partners.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/people/relations/partners.yml)

::: warning
TODO: 將來會改成直接在 yml 裡面開一個欄位，設定該 org 是否顯示在列表
:::

### 編輯電子報清單內容

- 編輯當年度的電子報 `.yml` 檔案，如 2016 年度的檔案為 [/_data/news/2016.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/news/2016.yml)

### 編輯成果報告頁面內容

- 編輯當年度的成果報告 `.yml` 檔案，如 2016 年度的檔案為 [/_data/reports/2016.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/reports/2016.yml)

::: warning
TODO: 目前只支援舊版（2016）專案資料，將來會支援新版（2020）專案資料
:::

### 編輯主選單

- 編輯全站設定檔 [/_data/settings.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/settings.yml) ，修改 `menu` 欄位內容

### 編輯 people 頁分類選單

- 編輯 people 頁設定檔 [/_data/people/settings.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/people/settings.yml) ，修改 `card` 、 `logo` 、 `label` 欄位內容

### 編輯 project 頁分類選單

- 編輯 project 頁設定檔 [/_data/project/settings.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/project/settings.yml) ，修改 `filter` 欄位內容

### 編輯 about 頁大綱

- 編輯 about 網頁檔 [/about/index.html](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/about/index.html) ，修改檔頭的 `toc` 欄位內容

### 編輯 mediakit 頁大綱

- 編輯 mediakit 網頁檔 [/mediakit/index.html](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/mediakit/index.html) ，修改檔頭的 `toc` 欄位內容

## 給開發人員看的東西

### 設計

[網站設計團隊後台](http://ocf.tw/design/)

::: warning
TODO: 目前為舊版（2016）網站架構，將來視情況看要不要替新版網站架構做文件
:::

### 程式

```
$ gem install jekyll -v 3.9.5
$ gem install jekyll-redirect-from
$ gem install jekyll-sitemap
$ jekyll _3.9.5_ serve --watch
```
