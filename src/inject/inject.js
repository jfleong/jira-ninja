chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "collapseSprints") {
            collapseSprints(request, sender, sendResponse);
            // this is required to use sendResponse asynchronously
            return true;
        }
    }
);

function collapseSprints(request, sender, sendResponse) {
  var x = document.querySelectorAll(".ghx-open .aui-iconfont-expanded");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].click();
   }
}
