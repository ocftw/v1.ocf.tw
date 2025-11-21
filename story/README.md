# 最新消息頁面上架步驟

完成以下三步驟，即可上架文章到[最新消息](https://ocf.tw/story/menu/articles/#最新文章)。

- 在 story 資料夾下建立子目錄
- 置入 markdown 格式文件及圖片
- 在 [_data/about/story.yml](https://github.com/ocftw/v1.ocf.tw/blob/gh-pages/_data/about/story.yml) 加入對應網址等 metadata

## Google Doc 上架步驟

1. 將 google doc 文章下載成 html（檔案 ⭢ 下載），只取其中的 images 圖片資料夾

2. （建議）用 mac 的 ImageOptim 程式將圖片最佳化，以減少檔案大小

3. 將 google doc 文章下載成 markdown

4. 開設新的資料夾，資料夾名稱即為網址 ocf.tw/story/____xxxx____

5. 將第一步下載的 images 資料夾置入進去上述資料夾

6. 從其他文章資料夾下方複製 index.md 過來以便照著修改

7. 將 google 轉存出來的 markdown 內容複製進 index.md 中，並作以下修改：

    1. 修改最後面的圖片標籤，把 `[image1]: <data:image....`  等段落整個砍掉。重新寫入正確的圖片位置：

        ```md
        [image1]: images/image1.jpg
        [image2]: images/image2.jpg
        [image3]: images/image3.jpg
        ...
        ```

        此處請注意，google doc 下載下來的圖片順序可能與實際文中不同，需要重新修正圖片檔名的數字順序。

    2. 將文章的大標題從 `# **xxx**` 改成 `# xxx`
    3. 將文中的子標題從 `# **xxx**` 改成 `## xxx`
    4. 把圖片跟圖說中間的空白行拿掉

        ```md
        ![四十多年來的國內外開放原始碼歷史和臺灣社群的興起，透過開源祭的各項展覽呈現在民眾眼前。照片：淬戀影像工作室攝影，開放文化基金會提供。CC BY 4.0 釋出。][image2]
        *四十多年來的國內外開放原始碼歷史和臺灣社群的興起，透過開源祭的各項展覽呈現在民眾眼前。照片：淬戀影像工作室攝影，開放文化基金會提供。CC BY 4.0 釋出。*
        ```

8. 在 `_data/about/story.yml` 中加入 /about 的文章連結，格式如下：

    ```yml
    - title: 從協助社群帳務到登上國際舞台，OCF 推動開源文化的十年之路
    slug: ten-years-of-ocf
    date: 2025-07-31
    ```

    其中 slug 即為文章資料夾（網址），date 為文章發布日期。
