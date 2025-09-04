---
sidebar_label: 'Styling'
sidebar_position: 7
toc_max_heading_level: 2
---

# Styling

Exposer comes with a default styling, but you can change it to fit your needs. Exposer is built upon the idea to give
you as much freedom as possible but with more freedom the complexity increases. In this section I will show you how you
can use some default UIkit Stylings along with your custom CSS to create a nice looking Exposer Module Instance.

This isn't a tutorial on how to use UIkit, but I will show you how some hints on you can use it to style your Exposer
Module Instance.

## Checkout the UIkit Documentation

The Full UIkit Documentation can be found
here: [https://getuikit.com/docs/introduction](https://getuikit.com/docs/introduction). In this Documentation you will
find all relevant CSS Classnames that also can be used in Exposer.
In adition, you will find [here](/category/usefull-css-classes) some of the most usefull CSS Classes that can be
used.

## Style Grid Items

### Add Border Radius to Cards

Let's say we have the following "default" Exposer Module Instance visible in our Frontend:

<img src="/img/exposer/exposer_grid.png" alt="Exposer Default Grid" className="bordered" />

No Custom CSS is used here, but we want to change the styling a bit, first lets add rounded corners to the cards. To do
so we need to step into the module configuration. Go to `Extensions > Modules` in Joomla 3 or `Content > Site Modules`
in Joomla 4, then select the Exposer Module Instance you want to style.
In the Module Settings we need to add the following CSS Classname to the *Additional Classes* in the **Grid Elements
Configuration** inside the *Grid* Tab:
`uk-border-rounded`:

<img src="/img/exposer/exposer_grid_cards_rounded_backend.png" alt="Exposer Card Rounded Settings" className="bordered" />

Now the Cards got rounded Borders:

<img src="/img/exposer/exposer_cards_rounded_borders.png" alt="Exposer Card Rounded Corners Frontend" className="bordered" />

<div class="alert alert--primary" role="alert">
<b>Please Note:</b> This only sets the CSS Classname <code>uk-border-rounded</code> for the card elements. If you are using a YOOtheme / UIkit Template the results may vary based upon your templates configuration for this classname.
</div>

### Shaping the image

So let's go a bit wild here and add a border radius to the image as well. To do so we need to add the following CSS
Classname to the *CSS Classes* in the **Main Media Setup** inside the *Module* Tab:
`uk-border-cricle`:

<img src="/img/exposer/exposer_border_circle_image.png" alt="Exposer Image Rounded Settings" className="bordered" />

If you check now the Frontend you will see the following:

<img src="/img/exposer/exposer_border_circle_image_frontend.png" alt="Exposer Image Rounded Frontend" className="bordered" />

Yeah, it makes not that much sense to have a circle image in a card, but you get the idea. You can use this section of
the module settings to style the image to your needs.

## Why so complicated?

At the beginning of this section I mentioned that Exposer is built upon the idea to give you as much freedom as possible
but with more freedom the complexity increases. Sure it would be possible to "hardcode" some Classnames for you and you
could just select them in the module settings, but this would limit you in your styling options. So I decided to give
you the freedom to use any CSS Classname you want to style your Exposer Module Instance. This way you can use any UIkit
Classname or any other CSS Classname you want to style your Exposer Module Instance. So you are able to create even your
own Classnames in your template.css / custom.css of your template and use them in Exposer.

In Fact, you are totally free on how you style your Exposer Module Instance.

This for example is an Exposer Grid Module Instance:

<img src="/img/exposer/exposer_broncos_player_grid.png" alt="Exposer Grid Module Instance" className="bordered" />

And this is a Modal from the same Module Instance:

<img src="/img/exposer/exposer_broncos_player_modal.png" alt="Exposer Modal Module Instance" className="bordered" />

The Grid is not that special it's just a PNG Image and the Grid Element Type is set to *Image Card*. But in the Modal the
following additions where made:

<img src="/img/exposer/exposer_modal_setup.png" alt="Exposer Modal Module Instance" className="bordered" />

As you might see the **Customfields for Modal Title** has some curious values. This is because Exposer has a built-in Feature to add CSS Classnames to Customfields on some places.

You can place the name of the customfield followed by a [] and inside the [] you can add the CSS Classnames you want to add to the customfield. In this case the customfield is called `player_name` and the CSS Classnames are `uk-text-bold`, `uk-text-uppercase`, `uk-text-primary`:
```
player_name[uk-text-bold uk-text-uppercase uk-text-primary]
```

Again, this is just an example, but you can use this feature to add any CSS Classnames you want to your customfields.
