---
sidebar_label: 'Custom CSS Overrides'
sidebar_position: 2
toc_max_heading_level: 2
---

# Custom CSS Overrides

## Introduction

Oriel Pro is based on the great UIkit Framework, if you are use a YoothemePro or UIkit 3 template you can
configure the whole styling through the template parameters, disable the load UIkit Option in the Advanced Tab and let
your template style Oriel. If you don't use a YT Pro or UIkit 3 template you can of
course also change all these options. For this you have to create new rules in the custom.css or the corresponding file
for "Custom CSS Overrides" of your template. You can find out exactly where to add your own CSS rules in the manual of
the template you are using.

<div class="alert alert--danger">
<b>Please note:</b>
    <div>Every template offers a possibility to integrate your own Custom CSS styles, check the manual of your template or contact your template provider for more details.</div>
</div>

## General Tips

### Use the Developer Tools

You can use the developer tools of your browser to find out the CSS selectors of the elements you want to change. Use
the "Inspect Element" function of your browser to find out the CSS selectors of the elements you want to change. You can
also use the "Inspect Element" function to find out the CSS selectors of the elements you want to change.

### Use the CSS Selector Specificity

If you want to change the styling of an element that is defined in the template you are using, you may have to use a CSS
rule with a higher specificity than the one defined in the template. You can do this by adding more CSS selectors to
your rule. For example, if you want to change the styling of a button that is defined in the template you are using, you
can add the class of the button to your CSS rule. For example, if you want to change the styling of a button that is
defined in the template you are using, you can add the class of the button to your CSS rule. For example, if you want to
change the styling of a button that is defined in the template you are using, you can add the class of the button to
your CSS rule.

### Custom styles got overwritten

Keep in mind that you always can overwrite yours and other styles with new custom CSS rules. The same is true for the
CSS files. The last rule in the last CSS file always *wins*. This is why it is important to use the correct CSS selector
specificity. Check the page with your browser developer tools to find out where your styles gets overwritten if needed.

## Change Lightbox Background

In this tutorial we will change the background color of the lightbox:

### Before

<img src="/img/tutorials/oriel/oriel_bg_black.jpg" alt="Oriel Original Lightbox Background" className="bordered" />
<p className="text-center meta">The original Lightbox Background is black</p>

### After

<img src="/img/tutorials/oriel/oriel_bg_white.jpg" alt="Oriel Modified Lightbox Background" className="bordered" />
<p className="text-center meta">We set it to white</p>

### How we do it

We use a custom CSS Rule to change the background color of the lightbox. We add the following rule to the custom.css (
your template may have a different name for this file).

```css
.uk-lightbox {
    background-color: #fff;
}
```

**aaaaaand we are done!**

Unfortunately I can't give you any more information about where to put this CSS rule because the file/procedure differs
depending on the template. Please contact your template provider if you can't find a "custom.css" or "override.css" for
your template.





