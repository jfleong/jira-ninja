document.addEventListener('DOMContentLoaded', function() {
    var collapseAllButton = document.getElementById('collapseAllSprintsButton');
    collapseButton.onclick = sendCollapseAll;
    var collapseNoVisibleButton = document.getElementById('collapseNoVisibleButton');
    collapseNoVisibleButton.onclick = sendCollapseNoVisible;
});

function sendCollapseAll() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "collapseAllSprints" }, function (response) {
            console.log('who cares?');
        });
    });
}

function sendCollapseNoVisible() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "collapseNoVisibleIssueSprints" }, function (response) {
            console.log('who cares?');
        });
    });
}
