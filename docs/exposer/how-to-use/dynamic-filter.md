---
sidebar_label: 'Dynamic Filter'
sidebar_position: 2
toc_max_heading_level: 2
---

# How to use Dynamic Filter

<p class="lead">
Exposer has been extended with a Dynamic Filter in version 1.5. With this feature you can filter based on a 
Customfield value defined in the article/contact or its ID in the Exposer. This "How to" explains the basic handling 
of this function.
</p>

## Background

Basically, the filter works based on a value that can be set dynamically as an article custom field or by ID.
If Exposer is then used on the corresponding page, this filter takes effect.

## Introduction (Scenario)

On our site we present the albums of various artists Each of these artists is presented on our site with its own
Joomla! article (alternatively, it can also be a Joomla! contact page). Now we want the last 5 albums (or all)
of the corresponding artist to be displayed in a grid on the page. For each of these albums Joomla! articles were
already created. But for each artist only his own works should be displayed - and this is where the Dynamic Mode
comes into play.

### Site Structure

The following site structure is used for this example:

#### Artist Items (linked to Artists Category)

Each of the following articles represents an artist. The artist's name is entered in the title field.

- Bob New
- Andrew Spencer
- Josh Bilbo
- ...

#### Album Items (linked to Albums Category)

Each of the following articles represents an album. The album's name is entered in the title field.
In "()" the artist's name is entered here but is not used inside the category titles.

- Never Forget (Bob New)
- Kind regards (Bob New)
- Best Of (Andrew Spencer)
- Sounds of Freedom (Josh Bilbo)
- ...

## Step 1: Create the Custom Fields

The dynamic mode in Exposer works via the custom fields and although you can also filter via the ID, this is the way I
would like to show you here. It does not matter how the structure is built and in which categories the articles are
located - For a better overview I recommend that the articles of the artists are created in the category artists and
the articles to the albums in a corresponding category with the title albums...

First we navigate to the articles in the Joomla backend and click "Fields" on the left side. Here we create now a
new field of type ``Text`` called **Key**. Second, we create another field of type ``Text`` and name it **Value**.

<img src="/img/exposer/fields_key_value.png" alt="Custom Fields Key & Value in Joomla" className="bordered" />

> **Note:** Neither type nor naming play a role and can be freely chosen, the naming here simply serves to clarify
> WHAT, WHERE, HOW is used - in our scenario, however, it would of course be of no use if we were to use a field of
> the type ``Image`` for Key or Value...

Let's first open Bob New's article in the editor, we will see that we have a new tab at the top "Fields" -
here we find the two fields **Key** and **Value** again:

<img src="/img/exposer/bob_fields.png" alt="Custom Fields in Article View" className="bordered" />

For Bob we set the value in the field **Key** to ``bob``, the field Value we leave empty here. We proceed in the same
way
with the articles of the other artists, we simply enter the respective first name in small letters as key.
Thus, in our example, we have defined the following:

| Artist         | Key    |
|----------------|--------|
| Bob New        | bob    |
| Andrew Spencer | andrew |
| Josh Bilbo     | josh   |

Now we open the respective articles for the albums and set the **Value** value for the corresponding artist. 
According to our list (above) the artist of the album __Never forget__ is __Bob New__. So, in the article for the album 
__Never forget__ we set the value in the Fields section to ``bob``:

<img src="/img/exposer/album_value.png" alt="Custom Fields in Article View" className="bordered" />

Makes sense so far or? In the article for Bob New we have defined the key value (bob) for which Exposer will 
later search in the articles in the Value field. Now we do the assignment for the other albums first. 
We edit the album and set the respective value (first name in lower case according to the corresponding 
key we defined before).

## Step 2: Setup the Exposer Module
Let's make this quick - We create a new Exposer instance in the module overview and define the following values for 
the dynamic filter (we leave the other filters untouched):


<img src="/img/exposer/exposer151_dynfilter_example.png" alt="Dynamic Filter Setup" className="bordered" />

### Explanation of the settings
#### Conditions
This field defines the type of check, various useful operators are available.
#### Container Key Field
This is the field of our "container" items. Here we select from the list the field in which we have defined our 
key value (bob, andrew, josh). Other options here are ID (if the article or the ID itself is the key) or Fix if 
we want to use a fixed value to serve as the key.
#### Customfield (Article / Contact)
Here we select in which field of our "target items" i.e. those we want to display the corresponding value is to be 
found. Exposer will then search the items for this value, if it is found the item will be displayed.
#### Customfield Target
A Customfield can have a "Value" or a "Raw Value" in Joomla! Even if we don't support third party fields -> 
with this option it could still work if you change the setting.
#### Cleanup ID
Only needed if you work with the article / contact ID. Exposer then tries to clean up the ID. Depending on the 
configuration, the ID read via Joomla! may still contain the article / contact alias. This would be removed. By 
default, this option should remain active.

Now we have to make sure that Exposer is displayed where we want it. Here we make the basic variant to avoid 
possible problems over a large area:
- Set the access to "public 
- Set the module to "published 
- Display the title (might help with possible troubleshooting)
- Set the value "On all pages" in the Menu Assignement tab

## Step 3: Place Module Instance in Article
Many ways lead to Rome... In our example we want to show the albums with reference to the artists, so we place our 
Exposer module in the corresponding Joomla articles of the artists. Depending on the editor you have a separate 
Button to insert modules, Note: in the JCE this button is located below the editor area.

<img src="/img/exposer/editor_add_module.png" alt="Insert Module in Article" className="bordered" />

These buttons make it easier for us to include modules in a post, but they are not mandatory. Here you can 
find information on how to do this directly yourself using shortcodes: [How do you put a module inside an article](https://docs.joomla.org/How_do_you_put_a_module_inside_an_article)
  
So now add the Exposer module as just described to every article of the artists, when you then open the artist's page you will see the magic:

### Bob New
<img src="/img/exposer/result_bob.png" alt="Insert Module in Article" className="bordered" />

### Andrew Spencer

<img src="/img/exposer/result_andrew.png" alt="Insert Module in Article" className="bordered" />

### Josh Bilbo

<img src="/img/exposer/result_josh.png" alt="Insert Module in Article" className="bordered" />

## Bonus
As you can see, the custom fields for "Key" and "Value" are currently displayed on the article pages. If you use a 
pagebuilder they will probably be hidden automatically otherwise you can do this as follows: Open the article overview 
again in the Joomla! backend and change to the fields section (from step 1) - For the field ``Key`` and for the field 
``Value`` you go in the edit mask to the tab Options in the section "Render Options" you will find an option with 
the sounding name "Automatic Display" set here the value to "Do not automatically display" and then save the field. 
As you can see only Key and Value custom fields are no longer displayed in the article.

The steps shown in this tutorial are only one way to use the dynamic mode, and to avoid unnecessary complexity 
I have refrained from explaining to you how important it is to use appropriate names for custom fields or that 
articles should best be neatly categorized. I assume that you already have some experience with articles and the 
possibilities of Joomla! and this function may make your everyday life a little easier.







