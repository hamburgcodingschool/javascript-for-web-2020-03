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

// Get blog posts

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
    <img class="w-full" src="${post.image ? post.image.src : ""}" alt="${post.image ? post.image.alt : ""}">
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
        <p class="text-gray-600">${post.date.toDate ? post.date.toDate().toDateString() : post.date}</p>
      </div>
    </div>
    <div class="px-6 py-4">${ post.location.city }, ${post.location.country}</div>
    <div class="px-6 py-4">Current weather: <span id="weather"></span></div>
  </div>`;

const fetchWeather = (element, city) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5aa80dd64429a526f1f80921fc784bb7`)
    .then(res => res.json())
    .then(json => {
      if (json.weather) {
        const weather = json.weather[0].main;
        element.innerHTML = weather;
      }
    })
    .catch(error => {
      console.error(error);
    })
}

// Create new blog post

const createNewBlogPost = (e) => {
  e.preventDefault();
  
  // get values from form
  const title = document.getElementById("title").value;
  const text = document.getElementById("text").value;
  const city = document.getElementById("city").value;
  const country = document.getElementById("country").value;
  console.log(title, text, city, country);
  const date = new Date();

  // send to Firestore
  db.collection("posts").add({
    title: title,
    text: text,
    location: {
      city: city,
      country: country
    },
    date: date,
    author: "Teresa Holfeld",
    author_image: "img/teresa-holfeld.jpg"
  })
  .then(docRef => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
      console.error("Error adding document: ", error);
  });

}

document.getElementById("newPostForm").addEventListener("submit", createNewBlogPost);
