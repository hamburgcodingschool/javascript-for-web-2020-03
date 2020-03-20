const posts = [
  {
    title: "In The Mountains",
    image: {
      src: "img/card-top.jpg",
      alt: "Sunset in the mountains"
    },
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    author: "Teresa Holfeld",
    author_image: "img/teresa-holfeld.jpg",
    date: "Jan 18, 2020",
    location: {
      city: "Grenoble",
      country: "France"
    }
  },
  {
    title: "The Crowded City",
    image: {
      src: "img/barcelona.jpeg",
      alt: "Barcelona"
    },
    text:
      "Barcelona is a very busy city. It is full of tourists, attractions and centuries old buildings. Very beautiful, really.",
    author: "Teresa Holfeld",
    author_image: "img/teresa-holfeld.jpg",
    date: "Feb 28, 2020",
    location: {
      city: "Barcelona",
      country: "Spain"
    }
  }
];

const createPostHtml = (post) =>
  `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
    <img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">${post.title}</div>
      <p class="text-gray-700 text-base"> 
      ${post.text}
      </p>
    </div>
    <div class="px-6 py-4 flex items-center">
      <img class="w-10 h-10 rounded-full mr-4" src="${post.author_image}" alt="${post.author}">
      <div class="text-sm">
        <p class="text-gray-900 leading-none">${post.author}</p>
        <p class="text-gray-600">${post.date}</p>
      </div>
    </div>
    <div class="px-6 py-4">${ post.location.city }, ${post.location.country}</div>
    <div class="px-6 py-4">Current weather: <span id="weather"></span></div>
  </div>`;

const content = document.getElementById("content");

const fetchWeather = (element, city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5aa80dd64429a526f1f80921fc784bb7`)
    .then(res => res.json())
    .then(json => {
      const weather = json.weather[0].main; // Rain
      // console.log("Wetter", weather);
      element.innerHTML = weather; // Rain
    })
    .catch(error => {
      console.error(error);
    })
}

for (let i = 0; i < posts.length; i++) {
  const div = document.createElement("div");
  div.innerHTML = createPostHtml(posts[i]);
  const weatherElement = div.querySelector("#weather");
  const cityName = posts[i].location.city;
  fetchWeather(weatherElement, cityName);
  content.append(div.firstChild);
}
