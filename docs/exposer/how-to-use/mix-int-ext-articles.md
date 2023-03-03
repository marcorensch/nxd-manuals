---
sidebar_label: 'Internal & External Links'
sidebar_position: 6
toc_max_heading_level: 2
---

# Mix Internal & External Articles

Exposer not only allows you to display internal articles in a view, you can also include external articles. Clearly, for
display within a grid, a list or the slideshow an article must be created. However, Exposer allows you to mix external
and internal content by configuring the article's own URL A / B / C fields.

## Brief Overview

<ol>
<li>Create your articles and let Exposer display them as a grid, slideshow or list.</li>
<li>Create a new article and navigate in the article editing in the tab <b>Images and Links</b></li>
<li>Now <b>define an external URL</b> (https://........) as <b>URL A / B or C</b> and assign a link text</li>
<li>Save the article and navigate to the Exposer module and navigate to the <i>URL</i> tab</li>
<li>Set the option for the corresponding URL field to *use as link*</li>
<li>Display we choose <code>display Badge</code> and as Text Source we choose <i>Article URL Title</i></li>
<li>Save the module and check the frontend</li>
</ol>

And that's all, the positioning of the badge is available in the tab of the respective layout. If no badge is displayed,
check if the badge display is active for the respective layout. If the link does not work correctly make sure that you
have entered the URL in the article edit screen including http.
If the corresponding URL field is filled with information for an article, Exposer will create an external link. If the
field is empty, no badge is displayed for this article and the link refers to the article (or the modal if configured
accordingly).

<img src="/img/exposer/ext-article-example.png" alt="Mix Internal & External Articles" className="bordered" />

> **Note:** The Screenshot above shows how an external article is displayed in the grid layout. The other grid items
> will link to
> the related article on click while this item will link to an external page from "GRHeute"

## How to use

Setup one of the URL fields in the article edit screen to link to an external URL. In our Example we use URL A. You can
find the URL fields in the tab "Images and Links".
<img src="/img/exposer/ext-article-url.png" alt="External Article URL" className="bordered" />

Now you can configure the module to use the URL (if given) as a badge and or link. Navigate to the Exposer module and
navigate to the tab "URL". Here you can configure the URL fields to use the URL as a link or badge.
<img src="/img/exposer/urla-setup-module.png" alt="External Article Module" className="bordered" />

Please be aware that you can only use one URL field as a link. If you have configured URL A and C as a link, only the
link of C will be used. If you want to use the link of URL A, you have to configure URL C as "Badge Info Only".

### Target Window

The target window defines how the link should be opened. You have to set this option on article level. Use the **URL
Target Window** option to define the target window for the URL field, Exposer's option **Hyperlink Target** has no effect on the URL field.

