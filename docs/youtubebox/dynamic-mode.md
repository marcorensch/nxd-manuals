---
sidebar_label: 'Use Dynamic Mode'
sidebar_position: 6
toc_max_heading_level: 3
---

# How to Use the Dynamic Mode

NXD YouTubeBox Pro integrates a Dynamic Mode the aim is to avoid having to create 10 module instances for 10 different
articles, for example. You can use this feature to create a general setup for videos / playlists in your articles, and
do it all with just one module instance.

This is achieved by not storing the source information (Video ID / URL) in the module but in the custom field of the
article. The module then reads this field and creates your player.

So now that we have the knowledge, we can get started.

## 1. Create a Custom Field for Articles

First we (may?) need a new Custom Field of Type `Textfield` which later contains the information we use in our module
instance.

1. Click on `Content → Article` in the Admin Control Panel
2. Select `Fields` in the menu on the left side
3. Click the button `New` in Toolbar on the top of the page
4. Select now `Text` as Type and give it a good name
5. Safe the field

<img src="/img/youtubebox/create-cf.jpg" alt="Field Settings" class="bordered" />

### Tweak the Field Settings

There are numerous tweaks and possibilities to display the field only for articles in individual categories etc... -
However, this is not part of this tutorial and at this point I like to refer to the
official [Joomla! 3.x Docs](https://docs.joomla.org/J3.x:Adding_custom_fields)
or [Joomla! 5.x Docs](https://docs.joomla.org/J5.x:Adding_custom_fields).

**An important option** has to be set before we leave the field configuration, switch to the tab Options and scroll down
till you see the Select Box for Automatic Display in Render Option - set this option to Do not automatically display.
This prevents the content of our field (i.e. the URL / ID) from being output in the header or footer of the article.

<img src="/img/youtubebox/not-auto-diesplay-field.jpg" alt="Not Display Custom Field is important" class="bordered" />

## 2. Configure the Module Instance

Actually this step is quite simple, navigate to the module overview `Content -> Modules` (in Joomla 4.x / 5.x)
or `Extensions ->
Modules` (in Joomla! 3.x) and either create a new module instance via the button new in the upper left corner or
configure an existing instance you want to use now in dynamic mode.

Now select nx-YouTubeBox as type and configure the module as you wish. In the module settings select Dynamic as Source
Mode - Then you can select the previously created field as CustomField from the list.

<img src="/img/youtubebox/dyn-mode-module-options.jpg" alt="Module Options for Dynamic Mode" class="bordered" />

Please note: Currently it is not possible to create playlists in some articles and single videos or user videos in
others. nx-YoutubeBox (module) defines if it treats the source as playlist or single video. So the type must fit.

Then make sure that the module "On all pages" is visible (Check Menu Assignement) and published and that the access
rights are correct.

## 3. Configure Article(s)

Now we are actually ready to test the whole thing, create a new article (or edit an existing one) and switch to the
Fields tab, here you will see the Custom Field you created earlier with an input field:

<img src="/img/youtubebox/add-video-url-in-field.jpg" alt="Article Settings Custom Field" class="bordered" />
<img src="/img/youtubebox/insert-module-in-article.jpg" alt="Insert Module Instance into Article" class="bordered" />

You can enter the video / playlist URL or just the ID in this field.

In the article text we now place the module at the desired position, set the cursor where the module should be added.
Depending on the editor / Joomla version used, the procedure here may differ - check the manual of your editor to learn
how best to proceed. In our example under Joomla 4 with the standard editor we proceed as follows:

<img src="/img/youtubebox/insert-module-in-article.jpg" alt="Insert Module Instance into Article" class="bordered" />

Select CMS Content in the Menubar and then click on Module - This opens a Modal where you got a list of all modules,
select here your NXD YouTubeBox Pro module instance that you have set up before. The module is now inserted in the form
of a shortcode at the corresponding position where your cursor was placed.

And that's it - the module with the ID 117 (the ID is of course different for you) is now displayed at the corresponding
position in the article.

## Troubleshooting

If you've gotten to this point and something isn't working as expected, here are some quick tips on what might be
causing it.

### I don't see the custom field in the article edit screen (Fields tab)

- Check if the custom field was created for the component "Article" -> Is the field listed under Content > Fields?
- Check if the corresponding field has been released for single categories only (Field settings)
- Check if the field is published
- Check if the fed belongs to a group (groups are displayed in separate tabs in the article edit screen)

### Video is not displayed - area is empty

- Check if the URL you entered is correct / don't use the ID but the complete URL (directly from the address bar when
  you watch the video on YouTube).
- Did you possibly choose the wrong / no Custom Field in the module settings?
- Is the type in the module settings for the content correct? (Playlist / Video)Is the module enabled for display "On
  all pages"?
- Is the module in Published status?
- Is the correct access group selected in the module settings? (Try to use Public)

