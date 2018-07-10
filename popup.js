document.addEventListener('DOMContentLoaded', function() {
  // visit last bookmark
  document.getElementById('goToBookmark').addEventListener('click', function() {
    chrome.runtime.sendMessage({intent: "bookmark"});
  }, false);

  // view source code
  document.getElementById('sourceLink').addEventListener('click', function() {
    chrome.runtime.sendMessage({intent: "source"});
  }, false);

}, false);
