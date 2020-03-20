const albums = [
  {
    name: "Christopher Rau ‎– Two",
    id: "4043162"
  },
  {
    name: "Christopher Rau ‎– Asper Clouds",
    id: "2539205"
  },
  {
    name: "Frivolous ‎– Meteorology",
    id: "2694812"
  },
  {
    name: "Heinrichs & Hirtenfellner ‎– Down EP",
    id: "1991106"
  },
  {
    name: "The Beach Boys ‎– Kokomo",
    id: "1481598"
  }
];

const createAlbumHtml = (album, tracklist) =>
  `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${album.title}</div>
      <p class="text-gray-700 text-base">
      ${ tracklist }
      </p>
    </div>
    <div class="px-6 py-4 flex items-center">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">${album.artists_sort}</p>
        <p class="text-gray-600">${album.year}</p>
      </div>
    </div>
  </div>`;

const content = document.getElementById("content");

const fetchAlbum = (id) => {
  fetch(`https://api.discogs.com/releases/${ id }`, { mode: 'cors' }) 
    .then(res => res.json())
    .then(json => {
      let tracklistHtml = "<ul>";
      for (let i = 0; i < json.tracklist.length; i++) {
        const track = json.tracklist[i].title;
        tracklistHtml += `<li>${track}</li>`;
      }
      tracklistHtml += "</ul>";
      const html = createAlbumHtml(json, tracklistHtml);
      const div = document.createElement("div");
      div.innerHTML = html;
      content.append(div.firstChild);
    })
    .catch(error => {
      console.error(error);
    })
}

for (let i = 0; i < albums.length; i++) {
  const id = albums[i].id;
  fetchAlbum(id);
}
