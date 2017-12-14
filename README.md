# OCF.TW 開放文化基金會官方網站

## 線上預覽

[ocf.tw](http://ocf.tw/)

## 編輯網站內容

### 新增專案

1. 建立專案資料

  - 決定專案 id （英數，英文全小寫）

  - 建立專案的的 `.yml` 檔案

    - 檔案名稱： `(your_project_id).yml` ，例如 `intl.yml`
    - 檔案位置： `/_data/projects/(current_year)/` ，例如 [/_data/projects/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects/2016)

  - 複製 [專案 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/_project_id.yml) 的內容，貼到新建立的 `(your_project_id).yml` 檔案中編輯

2. 把專案加到 [專案與成果](http://ocf.tw/projects/) 頁的列表

  - 把 `(your_project_id)` 加到 [/_data/projects/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/settings.yml) 的清單中

3. 建立專案頁（optional，視業務需要）

  - 建立專案資料夾

    - 資料夾名稱： `(your_project_id)` ，例如 `intl`
    - 資料夾位置： `/p/(current_year)/` ，例如 [/p/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016)

  - 在專案資料夾中新增 `index.html` 檔案

  - 複製 [專案頁 html 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_yyyy/_project_id/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

### 設定長期專案

1. 建立長期專案資料夾

  - 資料夾名稱： `(your_project_id)/` ，例如 `admin/`
  - 資料夾位置： [/p/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p)

2. 建立長期專案頁

  - 在長期專案資料夾中新增 `index.html` 檔案
  - 複製 [專案頁 html 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_yyyy/_project_id/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯
  - 將檔案開頭的 `year:` 欄位內容設定為 `current`

3. 建立跳板頁

  - 檔案名稱： `index.html`
  - 檔案位置： `/p/(year)/(your_project_id)/` ，例如 [/p/2016/admin/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016/admin/)
  - 檔案內容：複製 [跳板頁 html 範本](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_samples/redirect.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

4. 修改專案資料檔

  - 目標檔案： `/_data/_projects/(current_year)/(your_project_id).yml` ，例如 [/_data/projects/2016/admin.yml](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects/2016/admin.yml)
  - 將檔案內 `link:` 中第一筆資料的 `url:` ，從完整網址改為跳板頁網址，例如從 `/p/2016/admin/` 改為 `/p/admin/`

### 新增工作人員

1. 建立工作人員資料

  - 確認工作人員的 slack id

  - 建立工作人員的的 `.yml` 檔案

    - 檔案名稱： `(staff_id).yml` ，例如 `singing.yml`
    - 檔案位置： [/_data/people/individuals/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/people/individuals)

  - 複製 [工作人員 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/individuals/_person_id.yml) 的內容，貼到新建立的 `(staff_id).yml` 檔案中編輯

2. 把工作人員加到 [工作夥伴](http://ocf.tw/people/) 頁的列表

  - 把 `(staff_id)` 加到 `/_data/people/relations/(list_id).yml` 的清單中，如 [/_data/people/relations/staff.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/relations/staff.yml) 

### 新增合作單位

1. 建立合作單位資料

  - 確認合作單位的 id，通常採用網域名稱

  - 建立合作單位的的 `.yml` 檔案

    - 檔案名稱： `(org_id).yml` ，例如 `coscup.yml`
    - 檔案位置： [/_data/people/orgs/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/people/orgs)

  - 複製 [合作單位 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/orgs/_org_id.yml) 的內容，貼到新建立的 `(org_id).yml` 檔案中編輯

2. 把合作單位加到 [工作夥伴](http://ocf.tw/people/) 頁的列表（optional，視業務需要）

  - 把 `(org_id)` 加到 `/_data/people/relations/(list_id).yml` 的清單中，如 [/_data/people/relations/partners.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/relations/partners.yml) 

### 新增活動

1. 建立跨專案共用的活動資料，同時加到所屬專案的活動列表中

  - 決定活動 id （英數，英文全小寫）

  - 複製 [年度活動資料 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/_yyyy.yml) 的內容
  - 貼到活動所屬的年度的 `(year).yml` 檔案中編輯，例如 [_data/events/2016.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/2016.yml) ，最新的活動放檔案最上方

2. 建立個別專案專用的活動資料，同時加到所屬專案的活動列表中

  - 複製 [專案活動資料 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/_project_id.yml) 的內容
  - 貼到活動所屬的專案的 `(your_project_id).yml` 檔案中編輯，例如 [_data/events/intl.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/intl.yml) ，較新的活動資料放在較上方

3. 建立活動頁（optional，視業務需要）

  - 建立活動資料夾

    - 資料夾名稱： `(your_event_id)` ，例如 `dalc`
    - 資料夾位置： `/p/(current_year)/(project_id)/(evnet_id)` ，例如 [/p/2015/intl/dalc/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2015/intl/dalc)

  - 在活動資料夾中新增 `index.html` 檔案

  - 複製 [活動頁 html 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_yyyy/_project_id/_event_id/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

### 新增年度

1. 編輯全站設定檔 [/_data/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/settings.yml) ，將 `current` 欄位內容改為新的年度，如把 `current: 2015` 改成 `current: 2016`

2. 設定新年度的專案

  - 建立新年度專案的共用資料夾
    - 資料夾名稱： `(year)` ，例如 `2016`
    - 資料夾位置一： [/p/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p)
    - 資料夾位置二： [/_data/projects/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects)

  - 若有跨年度專案，設定該專案的 `.yml` 檔案和網頁資料夾
    - 把 `(your_project_id)/` 從舊年度的資料夾，複製到新年度的資料夾，例如把 `/p/2015/admin/` 複製為 `/p/2016/admin/`
    - 把 `(your_project_id).yml` 從舊年度的資料夾，複製到新年度的資料夾，例如把 `/_data/projects/2015/admin.yml` 複製為 `/_data/projects/2016/admin.yml`

3. 設定新年度的活動

  - 建立新年度活動的共用資料檔
    - 檔案名稱： `(year).yml` ，例如 `2016.yml`
    - 檔案位置： [/_data/events/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/events)
  - 將新年度加入活動列表頁
    - 檔頭新增文字： `- (year)` （獨自一行）
    - 檔案位置： [/journal/index.html](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/journal/index.html)

4. 設定新年度的電子報

  - 建立新年度電子報的 `.yml` 檔案
    - 檔案名稱： `(new_year).yml` ，例如 `2016.yml`
    - 檔案位置： [/_data/news/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/news)
    - 複製 [電子報資料 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/news/_yyyy.yml) 的內容，貼到新建立的 `(new_year).yml` 檔案中編輯

  - 將新年度的電子報加到 [電子報](http://ocf.tw/news/) 頁的列表

    - 把 `(new_year)` 加到 [電子報頁設定檔](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/news/settings.yml) 的清單中

5. 設定新年度的成果報告

  - 建立新年度成果報告的 `.yml` 檔案

    - 檔案名稱： `(new_year).yml` ，例如 `2016.yml`
    - 檔案位置： [/_data/reports/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/reports)
    - 複製 [成果報告資料 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/reports/_yyyy.yml) 的內容，貼到新建立的 `(new_year).yml` 檔案中編輯

  - 建立新年度的成果報告頁

    - 檔案名稱： `index.html`
    - 檔案位置： `/p/(new_year)/` ，例如 [/p/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016/)
    - 複製 [活動頁 html 範本](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/_yyyy/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

  - 可在 `/p/(new_year)/` 預覽成果報告頁，如 [/p/2016/](http://ocf.tw/p/2016/)

### 編輯電子報清單內容

- 編輯當年度的電子報 `.yml` 檔案，如 2016 年度的檔案為 [/_data/news/2016.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/news/2016.yml)

### 編輯成果報告頁面內容

- 編輯當年度的成果報告 `.yml` 檔案，如 2016 年度的檔案為 [/_data/reports/2016.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/reports/2016.yml)

### 編輯主選單

- 編輯全站設定檔 [/_data/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/settings.yml) ，修改 `menu` 欄位內容

### 編輯 people 頁分類選單

- 編輯 people 頁設定檔 [/_data/people/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/settings.yml) ，修改 `card` 、 `logo` 、 `label` 欄位內容

### 編輯 project 頁分類選單

- 編輯 project 頁設定檔 [/_data/project/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/project/settings.yml) ，修改 `filter` 欄位內容

### 編輯 about 頁大綱

- 編輯 about 網頁檔 [/about/index.html](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/about/index.html) ，修改檔頭的 `toc` 欄位內容

### 編輯 mediakit 頁大綱

- 編輯 mediakit 網頁檔 [/mediakit/index.html](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/mediakit/index.html) ，修改檔頭的 `toc` 欄位內容

## 幕後作業區

### 資料

[活動列表後台](http://ocf.tw/backend/)

### 設計

[網站設計團隊後台](http://ocf.tw/design/)

### 程式

```
$ gem install jekyll
$ gem install jekyll-redirect-from
$ jekyll serve
```

