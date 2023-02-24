---
sidebar_label: 'Customfield as Media'
sidebar_position: 3
toc_max_heading_level: 2
---


# (Multiple) Customfields as Media
As a small bonus we have added a tiny option in parallel to the Multi Fallback. If several customfields are setted up in the
field "Image Field" respectively "Media Field", all existing contents can be displayed within Exposer. The fields are
concatenated:

<img src="/img/exposer/exposer-multi-field-media-frontend.jpg" alt="Multiple Media in Frontend" className="bordered" />

In the example above, the custom field ACF Soundcloud Field and the JCE Media Field were used for the selected item.
Both were filled with content for this article.
So you can use as many fields as you want in Exposer, as soon as the fields for the corresponding article contain
something the plugin will render. Below you can see what the configuration of the example shown above looks like in
Exposer:

<img src="/img/exposer/exposer-main-media-config-multi.png" alt="Multiple Media Setup" className="bordered" />

The option Load all Fields allows you to display the contents of several fields if they are filled with contents. If the
option is deactivated, you can also use mixed content in the tiles, like in our Nature Demo, where we use Soundcloud,
Youtube fields (nx-designs & ACF) and even OpenStreet Maps! We have simply filled in the respective article exclusively
the corresponding field with information.

<img src="/img/exposer/exposer_cf_2.jpg" alt="CF Media" className="bordered" />

### Live Demo
[Exposer Customfields as Media](https://nx-designs.ch/showcase/exposer#nx-extension-139)

