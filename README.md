# Firefox Extension: Efficient Tab Manager

The main purpose of this extension is to create, modify or delete groups of tabs. The practical utility is to open a
series of tabs and then store the URLs somewhere, so you can close them, saving memory and processing, since these tabs
are not open. At any time, you can open just one tab or the group of stored tabs.

## Introduction

### What makes this extension different?

There are alternatives on the market, but when it comes to tab management, most store URLs in local databases within the
browser. The problem I faced was when uninstalling the extension because all the URLs were lost. Check several
extensions and most use the same system, obviously some allow exporting URLs to browser bookmarks.

### Proposal

Store and manage tab groups directly using the browser's bookmarks feature. This way you can use the extension and when
you decide to disable or delete it, you will still be able to access your URLs until you manually decide to delete them.

### On the market

- [Simple Tab Groups](https://addons.mozilla.org/en-US/firefox/addon/simple-tab-groups/)
  by [Drive4ik](https://addons.mozilla.org/en-US/firefox/user/1017663/)
- [OneTab](https://addons.mozilla.org/en-US/firefox/addon/onetab/)
  by [OneTab Team](https://addons.mozilla.org/en-US/firefox/user/10945418/)
- [Tab Stash](https://addons.mozilla.org/en-US/firefox/addon/tab-stash/)
  by [Josh Berry](https://addons.mozilla.org/en-US/firefox/user/14084455/)

## Expectations

### Technical area

- Tab groups are stored in “Other Bookmarks”. Firefox does not allow access to other main bookmark folders.
  [Mozilla > Add-ons > Browser Extensions > JavaScript APIs > bookmarks](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks).
- Within “Other Bookmarks”, it is intended to create a sub-folder, for example “Efficient tab management”.
- In the “Efficient Tab Management” folder all the groups that the user creates will be stored, for example: Python, video games, Linux and learn to play guitar.
- The user can add the same URL to one or more groups, the administration will depend entirely on the user.
- Ideally, whenever you want to open a previously stored group you close the current tabs, storing previously opened tabs in a group called “Unsaved Tabs”. But, being very invasive, it will be better to leave that option in settings. The purpose is to stay organized, focused and avoid memory consumption due to the number of open tabs.

![EfficientTabManager-Example-indicators](https://user-images.githubusercontent.com/831380/196868164-bd524005-546f-4591-93be-2fa5b57c5ca3.png)

### Design area

- The extensions that exist in the market look nice and work well at the UI/UX level. Therefore, it is basically based entirely on these extensions.
- Context menu of the extension in the toolbar.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209871.png)
- Options menu within the context menu.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209872.png)
- Bookmark options in the context menu.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209879.png)
- Visualization of the groups in a tab.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209884.png)
  - ![](https://addons.mozilla.org/user-media/previews/full/251/251717.png)
- Change order of groups.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209887.png)
- Move tabs from one group to another.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209888.png)
- Press a hotkey to add the current tab to a group.
  - ![](https://addons.mozilla.org/user-media/previews/full/209/209891.png)
