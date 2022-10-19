(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    browser.runtime.onMessage.addListener((message) => {
        console.log(message.command);
    });
})();
