var post = {
  image: {
    src: "img/card-top.jpg",
    imageAlt: "Sunset in the Mountains"
  },
  title: "In The Mountains",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  authorImage: {
    src: "img/jonathan.jpg"
  },
  author: "Sabrina Schramme",
  date: "März 9, 2020",
  number: 1
}

// var stringified = JSON.stringify(post.author);
//
// console.log(stringified);
//
// document.write(stringified);
//
// var contentSearch = document.getElementById('content');
//
// console.log (contentSearch)
//
// // 1. Schritt: neues Elemenent anlegen
// var newDiv = document.createElement("div");
//
// //Inhalt geben
//
// newDiv.innerHTML = "<p>Title of the next Post</p>"
//
// var newP = document.createElement("p")
// newDiv.append(newP)
//
// console.log(newDiv)
//
// // 2. Schritt: Dem neuen Element einen Platz im Tree zuweisen
//
// content.append(newDiv)
//
// //Hausaufgabe neuen Blogpost, der genauso aussieht, wie der alte

var newDiv = document.createElement("div");
newDiv.innerHTML = `<div class="container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
       <img class="w-full" src="${post.image.src}" alt="Sunset in the mountains">
       <div class="px-6 py-4">
         <div class="font-bold text-xl mb-2">${post.title}</div>
         <p class="text-gray-700 text-base">${post.description}</p>
       </div>
       <div class="px-6 py-4 flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="${post.authorImage.src}" alt="${post.author}">
          <div class="text-sm">
          <p class="text-gray-900 leading-none">${post.author}</p>
          <p class="text-gray-600">${post.date}</p>
      </div>
      </div>
    </div>`;
console.log (newDiv)
content.append(newDiv)
