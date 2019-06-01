document.addEventListener('DOMContentLoaded', function() {
    var collapseButton = document.getElementById('collapseSprintsButton');
    collapseButton.onclick = sendCollapse;
});

function sendCollapse() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "collapseSprints" }, function (response) {
            console.log('who cares?');
        });
    });
}
