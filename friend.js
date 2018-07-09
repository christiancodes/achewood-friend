// Show alt text
var p = document.createElement('p');
var altText = document.getElementsByClassName('comic')[0].title;
p.innerText = altText || "--No alt text--";
document.getElementById('comic_body').appendChild(p);

// Arrow key navigation
let url = window.location.origin;
window.addEventListener("keydown", function(e) {
  if (e.key === "ArrowLeft" || e.key.match(/^j$/i)) {
    const previousComic = document.querySelector(".left a").getAttribute("href");
    window.location = `${url}/${previousComic}`;
  } else if (e.key === "ArrowRight" || e.key.match(/^k$/i)) {
    const nextComic = document.querySelector(".right a").getAttribute("href");
    window.location = `${url}/${nextComic}`;
  }
});

// scroll to comic
document.getElementById("body").scrollIntoView();
