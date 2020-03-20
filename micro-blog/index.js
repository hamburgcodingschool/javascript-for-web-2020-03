// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

const content = document.getElementById("content");

db.collection("posts").get()
  .then((posts) => {
    posts.forEach((post) => {
      const json = post.data();
      // json
      const html = createPostHtml(json);
      const div = document.createElement("div");
      div.innerHTML = html;
      const weatherElement = div.querySelector("#weather");
      const cityName = json.location.city;
      fetchWeather(weatherElement, cityName);
      content.append(div.firstChild);
  });
});

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

const fetchWeather = (element, city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5aa80dd64429a526f1f80921fc784bb7`)
    .then(res => res.json())
    .then(json => {
      const weather = json.weather[0].main;
      element.innerHTML = weather;
    })
    .catch(error => {
      console.error(error);
    })
}
