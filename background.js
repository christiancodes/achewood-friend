var ab = new ModifiedAchewoodBookmarker();

chrome.webNavigation['onCompleted'].addListener(function(data) {
  if (ab.isAchewoodURL(data.url)) {
    ab.setURL(data.url);
  }
});

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
  if( request.bookmark === "visit" ) {
    ab.getURL((data) => {
      if (data.url) {
        chrome.tabs.update(null, {
          url: data.url
        });
      }
    });
  }
});

function ModifiedAchewoodBookmarker() {
  this.achewoodURL = 'http://www.achewood.com/index.php?date=';

  this.isAchewoodURL = function(url) {
    return url.substring(0, this.achewoodURL.length) === this.achewoodURL
  };

  this.getURL = function(cb) {
    chrome.storage.local.get('url', cb);
  };

  this.setURL = function(url) {
    chrome.storage.local.set({'url': url}, function() {
      console.log('Bookmarked ' + url);
    });
  };
}
