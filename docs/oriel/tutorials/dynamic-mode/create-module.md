---
sidebar_label: 'Module Instance'
sidebar_position: 3
toc_max_heading_level: 2
---

# Module Instance

<p class="alert alert--primary">This is a multipart tutorial that shows you how to use a single instance of the Oriel Pro module for Joomla! in multiple 
articles and create dynamic galleries. This way you can generate different galleries on different pages with only one 
module instance.</p>

If Oriel Pro has just been installed, you will find an instance of the module in the Module Overview under
`Extensions > Modules` in Joomla 3. If you are using Joomla 4 you will find the Module Manager
in `Content > Site Modules`.
To add a new instance, click on the **New** button in the top left-hand corner of the Modules menu and select Oriel Pro
from the list.

<img src="/img/general/new_module_btn.png" alt="Joomla 4 Module Manager" className="bordered" />

Now you can see that a new instance of Oriel Pro is created.

<img src="/img/oriel/j4_modules_overview.png" alt="Joomla 4 Module Manager" className="bordered" />

Click on the module instance to open the module settings. You can now configure the module as you wish.
Let's set the default parameters so we can use the Dynamic Source Mode. For this we select
the `Dynamic - Joomla! Article` as **Source Method** and choose our custom field **Location** we created before:

<img src="/img/oriel/source_mode_dynamic.png" alt="Oriel Source Mode Dynamic" className="bordered" />
<p class="text-center meta">Source Mode Dynamic & Our Customfield <i>Location</i> selected</p>

As Oriel Mode we currently use the option Filter, so all Subfolders of our Hotel folder are used as filters. This is how
our Folder Structure looks on the FTP Server:

<img src="/img/tutorials/oriel_hotels/folders_hotel_example.png" alt="Folders Hotel Example" className="bordered" />
<p class="text-center meta">Folder Structure of our Hotel <br/>You can ignore the description.* and the folder.json files in this folder.</p>

Another thing we have to do here is to set the **Module Assignement** to **On all pages**. This is necessary so that the
module can simply be placed in our articles and always got rendered.

<img src="/img/oriel/oriel_module_assignement_all_pages.png" alt="Set the Menu Assignement on all Pages" className="bordered" />

<p class="alert alert--primary">
Since we will use our module instance directly within the articles we do not need to set a module position.
</p>

In the next step we will prepare our articles.

