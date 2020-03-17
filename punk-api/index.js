const content = document.getElementById("content");
const title = document.getElementById("title");
const slogan = document.getElementById("slogan");

const reload = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(json => {
      // code
      const beer = json[0];
      title.innerHTML = beer.name;
      slogan.innerHTML = beer.tagline;
    })
    .catch(error => {
      // error handling
      console.error(error);
    })
}

reload();
