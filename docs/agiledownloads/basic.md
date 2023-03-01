---
sidebar_label: 'Basics'
sidebar_position: 1
toc_max_heading_level: 2
---

# Basics

## Setup Single Document Source

In the module settings the first option is to define the source of the first documents. Here you can select where agile
Downloads should search for files. You can either select a folder on your server or type in the folder path manually.
<img src="/img/agiledownloads/ad_watched_dirs.png" alt="Agile Downloads Source Module Settings" className="bordered" />

<div class="alert alert--info">
<b>Pro Version Only:</b><br/>In the professional version of this module, you can select multipe folders to watch.
</div>

<div class="alert alert--info">
<b>Pro Version Only:</b><br/>In the professional version of this module, you can add an Access Restriction See the related article to know more.
</div>

## Grouped Option

Should the files be displayed grouped by watched-folder? Set the optional section titles per watched folder.

## Ordering

Should the files be ordered in a coordinated way? If this option is disabled, files order is left untouched. If a sort
order is defined, the files are sorted accordingly across all levels.

## Use Search

Should a search box be displayed in the frontend so that visitors can filter by files? See related article for more
information.

## Ignore File List

Comma-separated list of file names / extensions to be ignored. Attention the files are still available on the server and
can be viewed, but are not listed in the view. Example: 'index.html, document.pdf, private.jpg'.
<div class="alert alert--warning">
This field has no Wildcard support! - For Pattern filter see Exclude Patterns below
</div>

## Exclude Patterns

Comma separated list of patterns that should be ignored: 'osm' let the module ignore all files containing the letters
osm... - can be used to filter by extensions:'.html,.png,...'

## General Exclude Patterns

Comma separated list of patterns to be excluded. These patterns apply to the complete folder path as well as the file
name. For example: if you exclude the pattern **top** all files that are stored in the directory tree inside the
folder `top_secret` (and folders within this folder) will be hidden. Additionally, the image `topgun.jpg` will be hidden
because
it includes the pattern `top` too. 