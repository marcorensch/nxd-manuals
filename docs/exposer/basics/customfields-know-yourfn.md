---
sidebar_label: 'Customfields - know your Fieldnames'
sidebar_position: 3
---
# Customfields - know your Fieldnames

Exposer supports sorting by article customfield values and rendering of article customfields within the List, Grid, 
Slideshow & Modal View. To use this feature, you must know the names of your custom fields. Exposer cannot work with 
custom field labels, it needs to know the names of the fields you want to use. The names of your customfields will be 
displayed in the Joomla! backend at:
**Content > Fields**  
After the Field Label the name of the field is declared in brackets:  
Field Label (Name: ``Name-of-Field``)

<img src="/img/exposer/fieldnames.jpg" alt="Fieldnames" className="bordered" />

## Version 1.2 Updates
We know it is not always easy to keep those fieldnames in mind so we added a new section to our Module backend. In Version 1.2.x of Exposer you will find a list of all available customfields at the end of the page. But Please note: Exposer does not check if those fields are accessible! For example: If you add a customfield named "my-field" Exposer will do that and will handle the content of that field but when you setted up this field (inside field params) to an access level like Registered or Superuser the content of this field will not been visible for Guests (as example).