# OCF.TW 開放文化基金會官方網站

## 線上預覽

[beta.ocf.tw](http://beta.ocf.tw/)

## 編輯網站內容

### 新增專案

1. 建立專案資料

  - 決定專案 id （英數，英文全小寫）

  - 建立專案的的 `.yml` 檔案

    - 檔案名稱： `(your_project_id).yml` ，例如 `intl.yml`
    - 檔案位置： `/_data/projects/(current_year)/` ，例如 [/_data/projects/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects/2016)

  - 複製 [專案 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/_sample_project.yml) 的內容，貼到新建立的 `(your_project_id).yml` 檔案中編輯

2. 把專案加到 [專案與成果](http://beta.ocf.tw/projects/) 頁的列表

  - 把 `(your_project_id)` 加到 [/_data/projects/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/settings.yml) 的清單中

3. 建立專案頁（optional，視業務需要）

  - 建立專案資料夾

    - 資料夾名稱： `(your_project_id)` ，例如 `intl`
    - 資料夾位置： `/p/(current_year)/` ，例如 [/p/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016)

  - 在專案資料夾中新增 `index.html` 檔案

  - 複製 [專案頁 html 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_sample_project/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

### 新增工作夥伴

1. 建立工作夥伴資料

  - 確認工作夥伴的 slack id

  - 建立工作夥伴的的 `.yml` 檔案

    - 檔案名稱： `(staff_id).yml` ，例如 `singing.yml`
    - 檔案位置： [/_data/people/individuals/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/people/individuals)

  - 複製 [工作夥伴 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/individuals/_sample_person.yml) 的內容，貼到新建立的 `(staff_id).yml` 檔案中編輯

2. 把工作夥伴加到 [工作夥伴](http://beta.ocf.tw/people/) 頁的列表

  - 把 `(staff_id)` 加到 `/_data/people/relations/(list_id).yml` 的清單中，如 [/_data/people/relations/staff.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/relations/staff.yml) 

### 新增活動

1. 建立活動資料，同時加到所屬專案的活動列表中

  - 決定活動 id （英數，英文全小寫）

  - 複製 [活動 yml 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/_sample_events.yml) 的內容，貼到活動所屬的專案的 `(your_project_id).yml` 檔案中編輯，例如 [_data/events/intl.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/events/intl.yml) ，最新的活動放檔案最上方

2. 建立活動頁（optional，視業務需要）

  - 建立活動資料夾

    - 資料夾名稱： `(your_event_id)` ，例如 `dalc`
    - 資料夾位置： `/p/(current_year)/(project_id)/(evnet_id)` ，例如 [/p/2015/intl/dalc/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2015/intl/dalc)

  - 在活動資料夾中新增 `index.html` 檔案

  - 複製 [活動頁 html 範本](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_sample_project/_sample_event/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

### 新增年度

1. 編輯全站設定檔 [/_data/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/settings.yml) ，將 `current` 欄位內容改為新的年度，如把 `current: 2015` 改成 `current: 2016`

2. 建立新年度的電子報資料

    - 檔案名稱： `(new_year).yml` ，例如 `2016.yml`
    - 檔案位置： [/_data/news/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/news)

3. 建立新年度的成果報告資料

    - 檔案名稱： `(new_year).yml` ，例如 `2016.yml`
    - 檔案位置： [/_data/reports/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/reports)

4. 建立新年度的成果報告頁

### 新增電子報

- 編輯當年度的電子報 yml 檔案，如 2016 年度的檔案為 [/_data/news/2016.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/news/2016.yml)

### 新增成果報告

- 編輯當年度的成果報告 yml 檔案，如 2016 年度的檔案為 [/_data/reports/2016.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/reports/2016.yml)

### 編輯主選單

- 編輯全站設定檔 [/_data/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/settings.yml) ，修改 `menu` 欄位內容

### 編輯 people 頁分類選單

- 編輯 people 頁設定檔 [/_data/people/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/people/settings.yml) ，修改 `card` 、 `logo` 、 `label` 欄位內容

### 編輯 project 頁分類選單

- 編輯 project 頁設定檔 [/_data/project/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/project/settings.yml) ，修改 `filter` 欄位內容

### 編輯 about 頁大綱


### 編輯 mediakit 頁大綱


## 開發者專區

```
$ gem install jekyll
$ jekyll serve
```

