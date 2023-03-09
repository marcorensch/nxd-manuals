---
sidebar_label: 'How to use Dynamic Mode'
sidebar_position: 3
toc_max_heading_level: 3
---

# Dynamic Mode

In Dynamic Mode the Module can only be used in combination with a Joomla! Article and a Custom Field. The Custom Field
must contain a valid URL to the content source. The URL can be either a full URL or a relative URL. Relative URLs are
relative to the Joomla! root directory.

### Create Customfield

First we navigate to the articles in the Joomla backend and click "Fields" on the left side. Here we create now a
new field of type ``Text`` or ``URL`` and name it for example **Url**.

### Add Information to Customfield

Now we navigate to the article we want to use and click on the tab "Fields". Here we enter the URL to the content we
want to display. This can be a full URL or a relative URL. Relative URLs are relative to the Joomla! root directory.

### Create Module Instance

Next we create a new Module Instance of the Dynamic Wrapper Module, set it into Dynamic Mode and select the previously
created Custom Field. Set the other module parameters as you like. See
the [Module Parameters](/docs/dynamicwrapper/module) for more information.

### Add Module to Page

In the last step we add the module to the page where we want to display the content. How you can do this is described in
the [Helpfull Ressources for Joomla Content](/docs/general/joomla/article-handling-links) section.

