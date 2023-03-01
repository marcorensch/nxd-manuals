---
sidebar_label: 'Ressources Content'
sidebar_position: 3
toc_max_heading_level: 3
---

# Helpfull Ressources for Joomla Content

This section contains links to helpfull Joomla Content related resources.

## Publishing a Module Instance

There are multiple ways to publish a module within Joomla. You need to use the module assignment in the module settings
in
combination with a predefined module position. You can either use a custom module
position (or *load module id*) in the article to show the module on the article page, or you can use one of your
templates
module positions that is available in the Article View.

### Using Module Assignment

Select *On all Pages* in the module assignment settings. Then you can use one of your templates module positions that is
available like *Banner* for example.
If you now check your Frontend you will see that the module instance got rendered on every page. Please be aware that
each template has its own module positions, and you need to check the template documentation to find out which module
positions are available.


### Using Module ID in the Article
You can also load every module instance by its id. This is useful if you want to show a module on a specific article.
Insert the following code in the article where you want to show the module:

```html
{loadmoduleid 123}
```

Where ``123`` is the module id of the desired Exposer module instance.

### Using a Custom Module Position
Another way to show a module on a specific article is to use a custom module position / to load a module position inside your article.
Insert the following code in the article where you want to show the modules on position *my-module-position*:

```html
{loadposition my-module-position}
```

Where ``my-module-position`` is the name of the custom module position you have entered the module settings.

