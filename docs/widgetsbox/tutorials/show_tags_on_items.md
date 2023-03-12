---
sidebar_label: 'Show Badges for Tags'
sidebar_position: 2
toc_max_heading_level: 2
---

# Badges for Tags

WidgetsBox allows you to show badges of your item tags. You can configure the module to show badges for tags that
are assigned to the items. The badges can for example be shown in the top right corner of the item.

<img src="/img/tutorials/widgetsbox/item_with_badges.png" alt="Badges" className="bordered" />
<p class="text-center meta">Badges for Tags</p>

## Configuration

To show badges for tags you have first to add Tags to the article in the article Editor. This option is available on the
right side of the editor. You can add as many tags as you like.

<img src="/img/tutorials/widgetsbox/tags_article_edit.png" alt="Badges" className="bordered" />

After you have added the tags to the article you can configure the module to show badges for tags. To do this you have
to open the module settings ``Content > Site Modules > WidgetsBox Module Instance``. In the module settings you firstly
need to enable the Tags Field. This can be done in the **Items Layout** Tab. Click in the **Select Fields to Display**
Option on the Plus Icon and select the Tags Field.

<img src="/img/tutorials/widgetsbox/tags_field_module_settings.png" alt="Badges" className="bordered" />
<p class="text-center meta">Tags Field has been added in Module Settings</p>

After you have added the Tags Field you can configure the display of this tags below in the **Items Layout** Tab. You
got a section to edit the **Tags Container Class**, the **Tags Class** and the **Tags Position**.

<img src="/img/tutorials/widgetsbox/tags_module_settings.png" alt="Badges" className="bordered" />
<p class="text-center meta">Tags Field Configuration for Badge Layout in Module Settings</p>

The **Tags Container Class** is the class of the container that holds the tags. The **Tags Class** is the class of the
tags itself. The **Tags Position** is the position of the tags.

Add ``uk-padding-small`` as classname for the Tags Container Class. This will add a padding to the container. Add
``uk-label`` as classname for the Tags Class. This will add the default badge style of UIkit. Additionally you can add
``uk-label-warning`` to the Tags Class to add a warning color to the badge or ``uk-text-small`` to make the text
smaller. You can add as many classes as you like.