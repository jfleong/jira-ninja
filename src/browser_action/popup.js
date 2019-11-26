document.addEventListener('DOMContentLoaded', function() {
    var collapseAllButton = document.getElementById('collapseAllSprintsButton');
    collapseAllButton.onclick = sendCollapseAll;
    var showVisibleButton = document.getElementById('showVisibleButton');
    showVisibleButton.onclick = sendShowSprintsWithIssues;
    return true;
});

function sendCollapseAll() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "collapseAllSprints" }, function (response) {
            console.log('Sending collapseAllSprints message');
        });
    });
}

function sendShowSprintsWithIssues() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "showSprintsWithIssues" }, function (response) {
            console.log('Sending showSprintsWithIssues message');
        });
    });
}
