---
sidebar_label: 'Auto Update & Download ID'
sidebar_position: 99
toc_max_heading_level: 2
---

# Auto Update & Download ID

Our extensions have, for licensing reasons, no limit on the number of installations. However, in order to receive
updates, you must have a valid subscription. Only then you can either manually download the current version of the
extension in your MyCockpit or have it installed automatically (via the Joomla Installer) using the nx-designs Framework
Plugin. The duration of a subscription period depends on the selected subscription plan. Every website that uses
extensions from nx-designs can install updates automatically via Joomla! by installing and using the nx-designs
Framework Plugin. For this you have to generate a download ID for the corresponding domain. A Download ID is valid for
one domain. An account can contain any number of Download ID's. If you use more than one extension from us on one domain
you only need to create one Download ID.

## Install nx-designs Framework Plugin

When you have a Subscription that support the nx-design Framework Plugin for Direct Updates then you will find the
download for this plugin in your Downloads area. Alternatively you can download the plugin directly
from [GitHub](https://github.com/marcorensch/nxdesigns_framework/releases).

## Generate a Download ID

To generate a Download ID for a domain please log in on nx-designs.ch with your username & password you used when
purchasing the extension. After login, you can manage your download ID's or create new ones via My Cockpit --> [My
Download ID's](https://nx-designs.ch/cockpit/download-ids?view=downloadids) in the main menu.

<img src="/img/general/downloadid/DownloadID_menu.jpeg" alt="Download ID on nx-designs" className="bordered" />
<p class="meta text-center">Download ID on nx-designs</p>

On this page you will find all generated download ID's. You can generate 1-5 new ID's using the option in the upper
right corner. After generation, you can copy the ID and enter it on your page in the plugin.

<img src="/img/general/downloadid/DownloadID_add.jpg" alt="Generate Download ID" className="bordered" />
<p class="meta text-center">Generate Download ID</p>

## Use the Download ID

### Joomla 3.x

The plugin was installed manually or was included in the last update of supported extensions. You can find the plugin in
Joomla 3.x in the Backend under ``Extensions`` --> ``Plugins``. Make sure that the plugin is activated and enter the
previously generated Download ID in the **Download ID** field. If
you have
installed the same or another extension of nx-designs on another domain you have to create a separate Download ID for
each website (domain). **One Download ID is only valid for one domain**.

### Joomla 4.x

In Joomla 4.x you will find the Plugin in ``System`` inside the ``Manage`` Section in ``Plugins``. 

<img src="/img/general/downloadid/j4_plugins.png" alt="Manage Plugins J4" className="bordered" />
<p class="meta text-center">Manage Plugins Link in Joomla 4.x</p>


The plugin was
installed as **System - nx-designs Framework**.
Make sure that the plugin is activated and enter the previously generated Download ID in the **Download ID** field. If
you have
installed the same or another extension of nx-designs on another domain you have to create a separate Download ID for
each website (domain). **One Download ID is only valid for one domain**.

And that's it, when a new version of our extensions is available your Joomla! installation will be able to update it
automatically if an active subscription for the corresponding extension is active.

