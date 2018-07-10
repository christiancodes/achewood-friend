// Show alt text
var p = document.createElement('p');
var altText = document.getElementsByClassName('comic')[0].title;
p.innerText = altText || "--No alt text--";
document.getElementById('comic_body').appendChild(p);

// Arrow key navigation. Shift also moves forward
let url = window.location.origin;
window.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft" || e.key.match(/^j$/i) ) {
    const previousComic = document.querySelector(".left a").getAttribute("href");
    window.location = `${url}/${previousComic}`;
  } else if (e.key === "ArrowRight" || e.key.match(/^k$/i) || e.key === "Shift") {
    const nextComic = document.querySelector(".right a").getAttribute("href");
    window.location = `${url}/${nextComic}`;
  }
});

// scroll to comic
document.getElementById("body").scrollIntoView();

// calculate progress
if(window.location.href.indexOf("date=") !== -1) {
  var theDate = window.location.href.split("date=")[1];
  var sequenceNum = dates.indexOf( theDate );
  if( sequenceNum !== -1) {
    var percentage = (((sequenceNum+1.0) / dates.length) * 100 ).toFixed(1);
    var progressText = (sequenceNum+1) + " of " + dates.length + " (" + percentage + "%)";
    var t = document.createElement('p');
    t.innerText = progressText;
    t.style.fontSize = "0.75em";
    document.getElementById('comic_body').appendChild(t);
  }
}
