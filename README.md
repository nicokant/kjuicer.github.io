# KJuicer.com

## Directory Structure

* ``_includes`` - contains all the basic parts of the website, such as footer and header

* ``_layouts`` - contains all the templates to compose pages
* ``_posts`` - contains all the posts in **english**
* ``_site`` - contains the compiled version of the website
* ``it`` - is the root of the translated website, so each page in italian should be inserted here. **All posts in italian** are kept in a subdirectory called ``_posts``
* ``assets`` - contains the images used inside pages
* ``post_assets`` - all images inserted in posts should be put here

an example:
```
_assets
_layouts
_posts
  english-post.md
_site
it
  _posts
    italian-post.md
  index.md
  italian-page.md
index.md
english-page.md
```

## Translating Website and Menus
Translations and menus are kept inside ``_config.yml``.  
Translations are easy to modify, just replace the text associated to each key.  
Menus are intuitive too, here an example:
```
menu:
  en:
    -label: element 1
    href: /element1
    -label: element 2
    href: /element2
```

## Translating Home
Home pages can be modified by pointing to ``index.html`` for english, and ``it/index.html`` for italian.
Translation of this page is done via metadata in the header, edit them.

## Create Multilanguage Page
Actually you will have to create two different pages, keep the english one in the root directory, put the one in italian in the ``it`` directory.
You must include some metadata in the header in order to link the two pages:
* ``lang`` - declare which language is used here (en/it)
* ``ref`` - a reference to link the pages, should be the same word/phrase in both the pages

That's all!

## Create Multilanguage Post
It's the same as before, just remember to place italian posts inside ``it/_posts/``.
You must include ``lang`` and ``ref`` as well.


## Example of Page/Post
```
---
title: A new AWESOME feature of KJuicer
lang: en
ref: new-awesome-feature
data: 2017-02-30
---
```