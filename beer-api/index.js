const content = document.getElementById("content");

document.getElementById("button").addEventListener("click", function() {
  fetch("https://api.punkapi.com/v2/beers/random")
    .then(res => res.json())
    .then(json => {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = createBeerContent(json[0]);
      button.innerText = "Want another beer?";
      content.append(tempDiv.firstChild);
      console.log(json[0].name);
      console.log(createBeerContent(json[0]))
    })
    .catch(error => {
      console.log(error);
    });
});

const createBeerContent = post => {
  return `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
  <img class="w-full h-64 w-full object-contain" src="${post.image_url ? post.image_url : "oops.png"}" alt="${post.name}">
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">${post.name}</div>
    <p class="text-gray-700 text-base">
      ${post.tagline}
    </p>
  </div>
  <div class="px-6 py-4 flex items-center">
    <div class="text-sm">
      <p class="text-gray-900 leading-none">${post.description}</p>
    </div>
  </div>
</div>`;
};
