const content = document.getElementById("content");
const blogPost = document.getElementById("blogPost");

const reload = () => {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(json => {
      const beer = json[0];
      const html = createHTML(beer);
      blogPost.innerHTML = html;
    })
    .catch(error => {
      console.error(error);
    })
}

const createHTML = (beer) =>
  `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <img class="h-32 object-contain" src="${ beer.image_url ? beer.image_url : "beer.png" }" alt="${beer.name}">
    <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">${beer.name}</div>
        <p class="font-bold text-gray-700 text-base">${beer.tagline}</p>
        <p class="text-gray-700 text-base">${beer.description}</p>
      </div>
    </div>`;

const createHtmlElement = (htmlString) => {
  const div = document.createElement("div");
  div.innerHTML = htmlString;
  return div.firstChild;
}

reload();
