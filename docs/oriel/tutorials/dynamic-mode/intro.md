---
sidebar_label: 'Introduction'
sidebar_position: 1
toc_max_heading_level: 2
---

# OrielPro Dynamic Mode

<p class="lead">
Oriel Pro allows you to create a Dynamic Gallery for your content using a custom field. The aim is to avoid having to 
create 10 module instances for 10 different articles. You can use this feature to create your own image 
galleries for all 10 articles, and do it all with just one module instance.
</p>

This is achieved by not storing the source information (specification of the folder that holds the images) in the module
but
in the custom field of the article where the module got placed. The module then reads this field and creates your
gallery.

So now that we have the knowledge, we can get started.

## Overview

We have to develop a website that lists different hotels, say 50 of them. Each of these hotels made an effort and sent
us the most beautiful pictures of their suites, rooms, the reception area and the pool bar. **For each of these hotels
we
have created folders and categorized the pictures into named subfolders.**

You may noticed that we already have a section in the Oriel Documentation that covers this topic. In this Tutorial I
will
show you all the necessary steps to create a Dynamic Gallery with Joomla! 4.x. If you want to know more about the
Dynamic Mode, please
read the [Source Modes](/oriel/source-methods) Article.

- Step 1: [Create the Custom Field](/oriel/tutorials/dynamic-mode/create-cf)
- Step 2: [Create the Module](/oriel/tutorials/dynamic-mode/create-module)
- Step 3: [Create the Articles & Assign the Custom Field](/oriel/tutorials/dynamic-mode/create-articles)