document.addEventListener('DOMContentLoaded', function() {
  var openBookmarkButton = document.getElementById('goToBookmark');
  openBookmarkButton.addEventListener('click', function() {
    chrome.runtime.sendMessage({bookmark: "visit"});
  }, false);
}, false);
