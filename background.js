var ab = new ModifiedAchewoodBookmarker();

chrome.webNavigation['onCompleted'].addListener(function(data) {
  if (ab.isAchewoodURL(data.url)) {
    ab.setURL(data.url);
  }
});

chrome.runtime.onMessage.addListener( function(request,sender,sendResponse) {
  if( request.intent === "bookmark" ) {
    ab.getURL((data) => {
      if (data.url) {
        chrome.tabs.update(null, {
          url: data.url
        });
      } else {  // no bookmark yet? go to first comic
        chrome.tabs.update(null, {
          url: "http://achewood.com/index.php?date=10012001"
        });
      }
    });
  } else if( request.intent === "source" ) {
    chrome.tabs.update(null, {
      url: 'https://github.com/christiancodes/achewood-friend'
    });
  }
});

function ModifiedAchewoodBookmarker() {
  this.achewoodURL = 'achewood.com/index.php?date=';

  this.isAchewoodURL = function(url) {
    return url.indexOf(this.achewoodURL) !== -1;
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
