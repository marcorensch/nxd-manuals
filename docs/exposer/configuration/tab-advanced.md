---
sidebar_label: 'Advanced Tab'
sidebar_position: 9
---

# Advanced Tab
The Advanced Tab is the only "standard tab" that we will look at in more detail in this manual. The reason for this is that we have added some options to this tab.

## UIkit compatibility Mode
The compatibility mode is switched on by default. This little helper defines if the module should load its own instance of the UIkit 3 framework. The framework was installed during the module installation and is not loaded externally.

### This option should be activated if...
- ...you are not using a UIkit 3 template (for example: YoothemePro templates)
- ...you have not manually integrated the UIkit 3 framework via plugin into Joomla

### What happens if this option is activated?
If this option is active, a custom version of the UIkit 3 framework with its own prefix (nx-) is loaded and used. 
All CSS class names of this module instance are prefixed then with nx-. Manually entered class names of this Module 
instance are searched for the prefix uk-* and replaced with nx-*.
For example, the input "uk-text-center" -> "nx-text-center" - accordingly, manually set CSS styles may have to be 
rewritten for the corresponding class names.

## Enable Debug Mode
If activated, extended information is displayed in the frontend. This option should only be used for debugging and not on live systems.

## Enable Warning Mode
A slightly lighter version of our debugging system that can be used on live systems in exceptional cases. 
If this option is activated, the module places comments in the HTML source code and in the browser console 
(for Javascript applications). It is possible that our support will ask you to activate this option if it is 
necessary to assist you with a problem.