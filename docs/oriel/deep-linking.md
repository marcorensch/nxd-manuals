---
sidebar_label: 'Album Deep Linking'
sidebar_position: 5
toc_max_heading_level: 2
---

# Deep Linking

<p class="lead">
You can also directly access albums in OrielPro via URL. To do this, you must first activate the Deep Linking option in the module settings:
</p>

<img src="/img/oriel/OrielProDeepLinkOption.jpg" alt="Oriel Pro Deep Linking Option" className="bordered" />

But now you have to know what the FolderKey is. Basically the FolderKey is the folder name without special characters.
So "my_folder" becomes the FolderKey `#my_folder` and "My other folder" becomes `#myotherfolder`. But if you are not
sure you can activate the debug mode, in the filter overview the FolderKey's are displayed directly next to the filter
label:

<img src="/img/oriel/OrielProFolderKey.jpg" alt="Oriel Pro Deep Linking Debug" className="bordered" />

In the debug information you will also find the FolderKey:
```php
[
    ...
    'relname' => '/images/demoImages/my_folder',
    'folderId' => 'my_folder',
    'folder-id' => 'my_folder_5',
    'key' => 'my_folder',
    'label' => 'my folder',
    ...
]
```

And now you can use it like this: `http://www.domain.tld/#my_folder` to jump directly to the my folder album on page-load.
