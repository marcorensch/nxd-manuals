---
sidebar_label: 'Custom Rules'
sidebar_position: 5
toc_max_heading_level: 3
---

# Custom Rules

The Custom Rules section was created to give you the ability to adjust the values of your custom fields before
outputting them within Exposer. Sometimes it is necessary that we do not save data directly in the format / formatting
in which we want to display it.

The custom rules are exclusively for the purpose of adjusting the display of custom field contents before output in the
display. For this we have given you a set of options to add / remove or replace content.

## Article Item Fields

In our example we have stored the three values "player number", "weight" and "height" as numerical values within the
custom fields. This is because we need these values elsewhere as effective numerical values.

<img src="/img/exposer/custom-rules-howto.jpg" alt="Custom Rules" className="bordered" />

## Custom Rules in Exposer Instance

Within our Exposer module we have defined rules for each of these fields. The field "player number" is preceded by
the "#" sign. For the field "Size" we put the size unit "cm" behind the number and for the field "Weight" we put "kg".

<img src="/img/exposer/custom-rules-overview-howto.jpg" alt="Custom Rules" className="bordered" />

In the respective rules we can specify to which field this rule should refer (Customfield Fieldname), from which type
this rule should be (based on this selection other suitable fields are then available for selection) and when / where
this rule should apply.

## Frontend View
So we have now adjusted the values for player number, weight & size for our exposer instance and this is now done with
the fields in the frontend:

<img src="/img/exposer/modified-custom-rules-frontend.jpg" alt="Custom Rules in action" className="bordered" />

> **Please Note:** Note: We see here the modal view of the article for the player shown at the beginning,
> the presentation was edited by various CSS classes & rules.

## Conclusion
The player number (saved as "21") is represented by the custom rule as "#21", with "cm" written behind the value in the
field Size and "kg" in the field Weight. Custom rules supports you in making small, general adjustments in the frontend.
Another example would be to implement a line break using a Replace-Rule. The possible options of the custom rules may
still change in future releases.