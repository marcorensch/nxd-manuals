---
sidebar_label: 'Articles'
sidebar_position: 4
toc_max_heading_level: 2
---

# Articles

<p class="alert alert--primary">This is a multipart tutorial that shows you how to use a single instance of the Oriel Pro module for Joomla! in multiple 
articles and create dynamic galleries. This way you can generate different galleries on different pages with only one 
module instance.</p>

In the previous articles we generated our custom field, created a new module instance and defined the corresponding
field as source. In the last step we will now add the required information to our articles.

## Set the Location Field

To do this, we create a [new article](https://docs.joomla.org/Special:MyLanguage/J4.x:Adding_a_New_Article) or open one
of our articles that is to be dynamically enhanced by Oriel and navigate
to the **Fields** tab. As value for the Location field we either select the folder name of the hotel, if you are using
nx-folderlist plugin, or
type in the relative path to the folder where your images for this hotel are stored if you are using a text field type.

<img src="/img/tutorials/oriel_hotels/j4_article_cf.png" alt="Joomla 4 Article Fields showing the Location Field as Text Field Type" className="bordered" />
<p class="text-center meta">Joomla 4 Article Fields showing the Location Field as Text Field Type</p>

## Add Module to Article

Last but not least, we now have to include Oriel in our article. To do this, we switch back to the editor area and
insesrt Oriel via moduleid.

<img src="/img/tutorials/oriel_hotels/add_module_to_article.png" alt="Add Module to Article" className="bordered" />

First switch into the Content Tab, **place the cursor where you want to insert the module** and click
on `CMS Content > Module`.
Select the module you created in the previous step.

<img src="/img/general/module_select_place_in_article.png" alt="Add Module to Article" className="bordered" />

<p class="alert alert--warning" role="alert">
    <strong>Important:</strong><br />Make sure the Module Instance is <b>Published</b> - You can identify the Publishing state in the Status column of the screenshot above, The Module Instance has to have a green Checkmark.
</p>

Depending on the editor you use, there are different ways to include modules in your article. Of course PageBuilder are
also supported. Please check the documentation of the corresponding editor / builder for a corresponding manual.

If we save the article now we will get the following view when we open the article in the frontend:

<img src="/img/tutorials/oriel_hotels/all_in_frontend.png" alt="Add Module to Article" className="bordered" />

Isn't it great? Maybe you'll notice some more nasty things, I'd like to replace the underscores in the filter labels and
a gap between the pictures would be better... Checkout the related article [Custom Rules Introduction](/oriel/custom-rules) to learn how to do this.

<p class="alert alert--primary" role="alert">
Repeat the steps on this page for all your articles (Hotels) - just select the related folder that holds your hotels images in every article and place the Module Instance inside the Article.
</p>

> [J4 Docs: How to create a new Article](https://docs.joomla.org/Special:MyLanguage/J4.x:Adding_a_New_Article)