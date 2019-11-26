/*
 * Collapse all sprints
 */
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.action == "collapseAllSprints") {
            collapseSprints(request, sender, sendResponse);
            // this is required to use sendResponse asynchronously
            return true;
        }
    }
);

function collapseAllSprints(request, sender, sendResponse) {
  var x = document.querySelectorAll(".ghx-open .aui-iconfont-expanded");
   var i;
   for (i = 0; i < x.length; i++) {
     x[i].click();
   }
}

/*
 * I wanted a way to collapse all sprints that had 0 visible issues because
 * When doing sprint planning we look at individual users and I want to see
 * all the tickets from all the sprints for an individual
 */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      if (request.action == "collapseNoVisibleIssueSprints") {
          collapseNoVisibleIssueSprints(request, sender, sendResponse);
          // this is required to use sendResponse asynchronously
          return true;
      }
  }
);

/*
 * If there is 0 of xxx issues visible then collapse, otherwise leave it open
 */
function collapseNoVisibleIssueSprints(request, sender, sendResponse) {
  var x = document.querySelectorAll(".ghx-open .aui-iconfont-expanded");
  var i
  for (i = 0; i < x.length; i++) {
    checkbox = x[i];
    issue_count = checkbox.siblings(".ghx-issue-count")[0];
    if (issue_count.innerHTML.toLowerCase().indexOf("0 ") === -1) {
      x[i].click();
    }
  }
}
