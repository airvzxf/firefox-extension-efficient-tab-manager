# Firefox Extension: Efficient Tab Manager

The main purpose of this extension is to create, modify or delete groups of tabs. The practical utility is to open a
series of tabs and then store the URLs in somewhere, so you can close them, saving memory and processing, since these
tabs are not open. At any time, you can open just one tab or the group of stored tabs.

## Introduction

### What makes this extension different?

There are alternatives on the market, but when it comes to tab management, most store URLs in local databases within the
browser. The problem that I faced was when uninstalling the extension all the URLs were lost. Check several extensions
and most use the same system, obviously some allow exporting URLs to browser bookmarks.

### Proposal

Store and manage tab groups directly using the browser's bookmarks feature. You can use the extension and when you
decide to disable or delete it, you will still access to your URLs until you manually decide to delete them from the
bookmarks.

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
  [Mozilla > Add-ons > Browser Extensions > JavaScript APIs > bookmarks](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/API/bookmarks)
  .
- Within “Other Bookmarks”, it is intended to create a sub-folder, for example “Efficient Tab Management”.
- In the “Efficient Tab Management” folder all the groups that the user creates will be stored, for example: Python,
  video games, Linux and learn to play guitar.
- The user can add the same URL to one or more groups, the administration will depend entirely on the user.
- Ideally, whenever you want to open a previously stored group you close the current tabs, storing previously opened
  tabs in a group called “Unsaved Tabs”. But, being very invasive, it will be better to leave that option in settings.
  The purpose is to stay organized, focused and avoid memory consumption due to the number of open tabs.

![EfficientTabManager-Example-indicators](https://user-images.githubusercontent.com/831380/196868164-bd524005-546f-4591-93be-2fa5b57c5ca3.png)

### Design area

- The extensions that exist in the market look nice and work well at the UI/UX level. Therefore, it is basically based
  entirely on these extensions.
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

## Contributing Devs

### Guides

Follow the official documentation for develop extension with Mozilla.

- [Mozilla ➟ Browser extensions](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions)
- [Mozilla ➟ Your first extension](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension)
- [Mozilla ➟ Content scripts](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
-

### Project structure

```text
.
├── LICENSE
├── README.md
├── .github ### Github workflow
│   ├── codeql
│   │   └── codeql-config.yml
│   └── workflows
│       └── codeql-analysis.yml
└── src ### Source code of the project.
    ├── content_scripts ### Run particular context
    │   ├── bookmarks.js
    │   └── content-script.js
    ├── icons
    │   ├── logo-48px.png
    │   ├── logo-96px.png
    │   ├── logo.png
    │   ├── logo.svg
    │   ├── logo.xcf
    ├── manifest.json ### Entrypoint of the extension
    └── popup ### Pop up window when click in the icon
        ├── menu.css
        ├── menu.html
        ├── menu.js
        ├── page-scripts
        │   └── page-script.js
        └── scope.html
```

### Clone the project

1. Fork the project in your repositories.
    - Optional click on this link:
      [Fork this project](https://github.com/airvzxf/firefox-extension-efficient-tab-manager/fork).
    - In the web browser click in the `Fork` button.
    - ![image](https://user-images.githubusercontent.com/831380/197837331-8411403c-a253-42d3-b360-4ea7623dbf95.png)
2. In your computer, clone your forked project.
    - `git clone https://github.com/MY_USER/firefox-extension-efficient-tab-manager.git`
    - Replace **MY_USER** with your GitHub user.
3. In you computer, go inside the cloned repository.
    - `cd firefox-extension-efficient-tab-manager`
4. Check the remote references.
    - `git remote -v`
5. Add this repository as the upstream.
    - `git remote add upstream https://github.com/airvzxf/firefox-extension-efficient-tab-manager.git`
6. Check again the remote references.
    - `git remote -v`
   ```text
   origin	https://github.com/MY_USER/firefox-extension-efficient-tab-manager.git (fetch)
   origin	https://github.com/MY_USER/firefox-extension-efficient-tab-manager.git (push)
   upstream	https://github.com/airvzxf/firefox-extension-efficient-tab-manager.git (fetch)
   upstream	https://github.com/airvzxf/firefox-extension-efficient-tab-manager.git (push)
   ```
7. Update the fetch.
    - `git fetch --all --tags`
8. Update the pull.
    - `git pull --all`
9. Create a branch describing shortly the work. For example **fix-settings-save-button**.
    - `git branch fix-settings-save-button`
10. Go to the new branch.
    - `git checkout fix-settings-save-button`
11. Start your work, modifying files.
12. Add and commit your changes.
    - `git add .`
    - `git commit -m "Fixed the button"`
13. Push your changes in your branch.
    - `git push`
    - If it is your first time it will request to execute:
        - `git push --set-upstream origin fix-settings-save-button`
14. At the moment, your changes are done and the checks are green. You can create a `pull request`.
    - Go to your repository in the web browser.
        - https://github.com/MY_USER/firefox-extension-efficient-tab-manager
    - A green button is displayed: `Compare and pull request`.
    - The creation and follow is intuitive.

### Install the extension in local

Follow this official tutorial:
[Temporary installation in Firefox](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)
.
Also, you can re-install at any time to upload your changes.

### Start to programming and designing

Any design program or template is welcome but keep aware that the licence should be free/open. Same case for
programming.

I develop in WebStorm (JetBrains), but VSC (visual studio code) is welcome, not forget to add the Git ignore references.
