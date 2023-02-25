---
sidebar_label: 'Dynamic & Static Source Mode'
sidebar_position: 3
toc_max_heading_level: 3
---

# Source Methods

<p class="lead">Oriel Pro supports two different source methods for displaying albums and images: Dynamic and Static Mode.</p>

## Static Mode

In static mode everything is as we know it from the various modules & components we've all already tried and used.
Select the folder that contains your pictures / albums. Your module instance is permanently connected to this folder. If
you want to show the images of another gallery in article x you have to create another module instance, adjust your
settings.... etc. Or we use the Dynamic Mode.

## Dynamic Mode

In dynamic mode we do not define the source folder within the module settings. We define the Customfield item that
contains the source folder information. If the module is used in recurring layouts, several galleries can be created
with one module.

### Example

[Live Demo Hotels Example](https://demo.nx-designs.com/index.php/orielpro/layouts/dynamic-source-hotels)

We have to develop a website that lists different hotels, say 50 of them. Each of these hotels made an effort and sent
us the most beautiful pictures of their suites, rooms, the reception area and the pool bar. **For each of these hotels
we have created folders and categorized the pictures into named subfolders**.

#### Folder Structure

```
/images
├───Multi_Star
│   ├───reception
│   │   ├───image1.jpg
│   │   ├───image2.jpg
│   │   ├───cover.jpg
│   │   ├───...
│   ├───suites
│   │   ├───image1.jpg
│   │   ├───image2.jpg
│   │   ├───image3.jpg
│   │   ├───cover.jpg
│   │   ├───...
│   ├───poolbar
│   │   ├───image1.jpg
│   │   ├───image2.jpg
│   │   ├───image3.jpg
│   │   ├───cover.jpg
│   │   ├───...
├───All_In_One_Hotel
│   ├───reception
│   │   ├───image1.jpg
│   │   ├───image2.jpg
│   │   ├───cover.jpg
│   │   ├───...
│   ├───suites
│   │   ├───image1.jpg
│   │   ├───...
│   ...
...

```

#### Step 1: Create a Customfield

We create a new custom field of type **Text** (or nx-folderlist --> you get it for free when you buy Oriel Pro) and name
it **hotel pictures** (Yes I know I am mega creative today). To create a new Custom Field go to ``Content > Fields``.
Here you can create new Custom Fields based on the installed Plugins of your Site. After you have created a Custom Field you will have a new Section on your Article Edit Screen. 
There you can select the folder for the images of this hotel.

<img src="/img/oriel/folderlist_select_folder.png" alt="Select a Folder with the FolderList Customfield" className="bordered" />
<p class="meta text-center">Select a Folder with the FolderList Customfield</p>

#### Step 2: Create a new Module Instance

Now we create our module instance in Joomla - For this we navigate in the backend to ``Extensions > Modules`` (J3)
or ``Content > Site Modules`` (J4) and create a new module of the type **Oriel - the UIkit3 Gallery** via the **New**
button,
in the upper right corner:

<img src="/img/general/new_module_btn.png" alt="Add new Module Instance Button J4" className="bordered" />

In the Module Settings we now choose as Source Method **Dynamic** and as Customfield our field named **hotel pictures**
from the dropdown.
> **Note:** Please make sure that the module is published on all pages (second tab in the module settings).

#### Step 3: Create your Articles for the Hotels

For each of these hotels we now create a Joomla! Article insert our texts and use Joomla's integrated Shortcode plugin
for modules to place the Oriel Dynamic Gallery in the desired location (For some Editors like JCE there exists a button
below the Article Edit Section called "Module" to add those).

In the field settings of our hotel articles, we now select as value for the custom field **hotel pictures** the
corresponding folder
with the images for this hotel from our images folder.

#### Step 4: Profit

If we now look at our article in the frontend we will see that Oriel Pro has built the gallery for us. If we have
selected the Oriel Mode Filter, the Subfolders of the gallery (suites, rooms, pool) are shown as filter options above
the gallery.

<img src="/img/oriel/dynamic_hotel_album.png" alt="Album View Dynamic Gallery" className="bordered" />
