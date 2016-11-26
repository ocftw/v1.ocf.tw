# OCF.TW 開放文化基金會官方網站

## Preview

[beta.ocf.tw](http://beta.ocf.tw/)

## Development

```
$ gem install jekyll
$ jekyll serve
```

## Add Project

1. Create project data

- Decide your project id (with all letters in lower case)

- Create a new `.yml` file

  - file name: `(your_project_id).yml`
  - file location: /_data/projects/(current_year)/, for example: [/_data/projects/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/_data/projects/2016)

- Copy [sample project](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/_sample_project.yml) content to your new `(your_project_id).yml` file and start editing

2. Add project to `/projects/`

- Add `(your_project_id)` to the list in [/_data/projects/settings.yml](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/_data/projects/settings.yml)

3. Create a project page

- Create a new project folder

  - folder name: `(your_project_id)`
  - folder location: /p/(current_year)/, for example: [/p/2016/](https://github.com/ocftw/beta.ocf.tw/tree/gh-pages/p/2016)

- Create a `index.html` file in your new `(your_project_id)` folder

- Copy [sample file](https://github.com/ocftw/beta.ocf.tw/blob/gh-pages/p/_sample_project/index.html) content to your new `index.html` file and start editing

## Add Staff

(TBD)
