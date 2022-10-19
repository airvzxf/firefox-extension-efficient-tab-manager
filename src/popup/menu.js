function listenForClicks() {
    document.addEventListener("click", (e) => {

        //console.log("EventListener Click");
        //console.log(e);

        function bookmark_it(tabs) {
            browser.tabs.insertCSS({}).then(() => {
                let url = beastNameToURL(e.target.textContent);
                browser.tabs.sendMessage(tabs[0].id, {
                    command: "bookmark_it",
                    beastURL: url
                });
            });
        }

        function reportError(error) {
            console.error(`Could not beastify: ${error}`);
        }

        if (e.target.classList.contains("beast")) {
            browser.tabs.query({active: true, currentWindow: true})
                .then(bookmark_it)
                .catch(reportError);
        }
    });
}

function reportExecuteScriptError(error) {
    document.querySelector("#message").innerHTML = "reportExecuteScriptError" + error;
    document.querySelector("#error-content").classList.remove("hidden");
    console.error(`Failed to execute beastify content script: ${error.message}`);
}

function mainProcess() {
    function validateRootBookmark(tree) {
        if (tree.length !== 1) {
            console.error("Extension Beautiful Bookmarks:\n" +
                "Expected a length of 1 elements in the tree, got " + tree.length);
            console.log(tree);
            return false;
        } else if (tree[0].id !== "root________") {
            console.error("Extension Beautiful Bookmarks:\n" +
                "Expected bookmark ID root________, got " + tree[0].id);
            console.log(tree);
            return false;
        }
        return true;
    }

    function getOtherBookmarksFolder(children) {
        let other_bookmarks = undefined;
        let ids = [];
        children.every(child => {
            ids.push(child.id);
            if (child.id === "unfiled_____" && child.type === "folder"
                && child.parentId === "root________") {
                other_bookmarks = child;
                return false;
            }
            return true;
        })
        if (!other_bookmarks) {
            console.error("Extension Beautiful Bookmarks:\n" +
                "Expected bookmark ID unfiled_____, got " + ids.join(', '));
            console.log(children);
        }
        return other_bookmarks;
    }

    function createBeautifulBookmarksFolder() {
        let beautiful_bookmarks = browser.bookmarks.create({
            title: "My Beautiful Bookmarks",
            type: "folder",
            index: 0,
            parentId: "unfiled_____"
        });
        beautiful_bookmarks.then(main);
        beautiful_bookmarks.then(child => {
            console.info("Extension Beautiful Bookmarks:\n" +
                "Created new Bookmark folder inside the Other Bookmarks folder.");
            console.log(child);
        }, error => {
            console.error("Extension Beautiful Bookmarks:\n" +
                "Expected the creation of the beautiful bookmarks folder.");
            console.log(error);
            return false;
        });
    }

    function getBeautifulBookmarksFolder(children) {
        let beautiful_bookmarks = undefined;
        children.every(child => {
            if (child.title === "My Beautiful Bookmarks" && child.type === "folder"
                && child.parentId === "unfiled_____") {
                beautiful_bookmarks = child;
                return false;
            }
            return true;
        })
        if (!beautiful_bookmarks) {
            createBeautifulBookmarksFolder();
            return false;
        }
        return beautiful_bookmarks;
    }

    function main() {
        browser.bookmarks.getTree().then(tree => {
            if (!validateRootBookmark(tree)) {
                return false;
            }
            const root = tree[0];
            const other_bookmarks = getOtherBookmarksFolder(root.children);
            if (!other_bookmarks) {
                return false;
            }
            const beautiful_bookmarks = getBeautifulBookmarksFolder(other_bookmarks.children);
            if (!beautiful_bookmarks) {
                console.error("Extension Beautiful Bookmarks:\n" +
                    "Expected the folder My Beautiful Bookmarks.");
                return false;
            }

            const main_bookmarks = document.querySelector("#main_bookmarks");
            main_bookmarks.innerHTML = "";
            beautiful_bookmarks.children.every(child => {
                console.log("child");
                console.log(child);
                if (child.type !== "folder") {
                    return false;
                }
                const node = document.createElement("dt");
                const name_readable = child.title + " (" + child.children.length + ")";
                const text_node = document.createTextNode(name_readable);
                node.appendChild(text_node);
                child.children.every(sub_child => {
                    if (sub_child.type !== "bookmark") {
                        return false;
                    }
                    const sub_node = document.createElement("dd");
                    const text_sub_node = document.createTextNode(sub_child.title);
                    sub_node.appendChild(text_sub_node);
                    node.appendChild(sub_node);
                    return true;
                });
                main_bookmarks.appendChild(node);
                return true;
            });
            console.log("main_bookmarks");
            console.log(main_bookmarks.innerHTML);
            listenForClicks();
        });
    }

    main();
}

browser.tabs.executeScript({file: "/content_scripts/bookmarks.js"})
    .then(mainProcess)
    .catch(reportExecuteScriptError);
