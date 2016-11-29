# OCF.TW 開放文化基金會官方網站

## 線上預覽

[beta.ocf.tw](http://beta.ocf.tw/)

## 編輯網站內容

### 新增專案

1. 建立專案資料

  - 決定專案 id （英數，英文全小寫）

  - 建立專案的的 `.yml` 檔案

    - 檔案名稱： `(your_project_id).yml`
    - 檔案位置： /_data/projects/(current_year)/ ，例如 [/_data/projects/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects/2016)

  - 複製 [sample yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/_sample_project.yml) 的內容，貼到新建立的 `(your_project_id).yml` 檔案中編輯

2. 把專案加到在 [專案與成果](http://beta.ocf.tw/projects/) 頁的列表中

  - 把 `(your_project_id)` 加到 [/_data/projects/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/settings.yml) 的清單中

3. 建立專案頁

  - 建立專案資料夾

    - 資料夾名稱： `(your_project_id)`
    - 資料夾位置： /p/(current_year)/ ，例如 [/p/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016)

  - 在專案資料夾中新增 `index.html` 檔案

  - 複製 [sample html](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_sample_project/index.html) 的內容，貼到新建立的 `index.html` 檔案中編輯

### 新增工作夥伴

(TBD)

### 新增活動

(TBD)

## 開發者專區

```
$ gem install jekyll
$ jekyll serve
```

