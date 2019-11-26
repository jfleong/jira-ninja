/*
 * Collapse all sprints
 */
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
      console.log(`Received ${request.action} Message`);
      if (request.action == "collapseAllSprints") {
          collapseAllSprints(request, sender, sendResponse);
          // this is required to use sendResponse asynchronously
          return true;
      }
      if (request.action == "showSprintsWithIssues") {
        showSprintsWithIssues(request, sender, sendResponse);
        // this is required to use sendResponse asynchronously
        return true;
    }
  }
);

function collapseAllSprints(request, sender, sendResponse) {
  var openSprints = document.querySelectorAll(".ghx-backlog-container .ghx-sprint-active .js-sprint-container .ui-droppable .ghx-open");
  var i;
  for (i = 0; i < x.length; i++) {
    openSprints[i].children(".ghx-iconfont .aui-icon .aui-icon-small .aui-iconfont-expanded")[0].click();
  }
}

/*
 * If there is 0 of xxx issues visible then collapse, otherwise leave it open
 */
function showSprintsWithIssues(request, sender, sendResponse) {
  var openSprints = document.querySelectorAll(".ghx-backlog-container .ghx-sprint-active .js-sprint-container .ui-droppable .ghx-open");
  var closedSprints = document.querySelectorAll(".ghx-backlog-container .ghx-sprint-active .js-sprint-container .ui-droppable .ghx-closed");
  var i
  for (i = 0; i < openSprints.length; i++) {
    sprint = openSprints[i];
    issue_count = sprint.children(".ghx-issue-count")[0];
    if (issue_count.innerHTML.toLowerCase().indexOf("0 ") === -1) {
      openSprints[i].children(".ghx-iconfont .aui-icon .aui-icon-small .aui-iconfont-expanded")[0].click();
    }
  }
  for (i = 0; i < closedSprints.length; i++) {
    sprint = closedSprints[i];
    issue_count = sprint.children(".ghx-issue-count")[0];
    if (issue_count.innerHTML.toLowerCase().indexOf("0 ") === -1) {
      continue;
    }
    else {
      closedSprints[i].children(".ghx-iconfont .aui-icon .aui-icon-small .aui-iconfont-expanded")[0].click();
    }
  }
}
