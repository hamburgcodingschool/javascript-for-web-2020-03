
const blogPosts = [
  {
    title: "Godafoss Waterfalls, Iceland",
    image: {
      src: "img/06Godafoss_Iceland800.jpg",
      alt: "Godafoss waterfalls in Iceland"
    },
    text:
      "Running, running, falling. Nothing, everything changes",
    author: "Gundarik Icetrollson",
    author_image: "img/icon_icetroll.jpg",
    date: "Dec 18, 1820",
    number: "1"
  },
  {
    title: "The Golden City of Prague",
    image: {
      src: "img/09Prague800.jpg",
      alt: "Prague, the Golden City"
    },
    text:
      "City of old, alchemists, crazy kings, dumplings and sauerkraut.",
    author: "Karel",
    author_image: "img/icon_krtek.png",
    date: "Feb 28, 2020",
    number: "2"
  },
  {
    title: "Old Paria, Utah",
    image: {
      src: "img/11Old_Paria_Utah_USA800.jpg",
      alt: "Old Paria in Utah, USA"
    },
    text:
      "The side of the mountains have spectacular colors due to their encrusted minerals like iron oxides, manganese, cobalt and others that geologists describe.",
    author: "Wild Bill",
    author_image: "img/icon_cowboy.jpg",
    date: "Jan 18, 2020",
    number: "3"
  },
  {
    title: "Peyto Lake Mountains, Canada",
    image: {
      src: "img/15Peyto_Lake_Mountains_Canada800.jpg",
      alt: "Peyto Lake Mountains in Canada"
    },
    text:
      "Energize! Where is Ryker? Make it so. Battle stations. Leave the bridge. One plum juice pleace.",
    author: "Wolpertinger",
    author_image: "img/icon_Wolpertinger.jpg",
    date: "March 9, 2020",
    number: "4"
  },
  {
    title: "Eltz Castle near Wierschem, Germany",
    image: {
      src: "img/03Eltz_Castle_Wierschem800.jpg",
      alt: "Eltz Castle near Wierschem, Germany"
    },
    text:
      "Make haste! By nightfall these hills will be swarming with orks.",
    author: "I am not Aragorn",
    author_image: "img/icon_musketeer.jpg",
    date: "March 10, 2020",
    number: "5"
  },
  {
    title: "Joekulsarlon Cave, Iceland",
    image: {
      src: "img/04Joekulsarlon_Iceland800.jpg",
      alt: "Joekulsarlon Cave in Iceland"
    },
    text:
      "I hope you brought some warm clothes. Don't camp here. Don't light a fire.",
    author: "Clemens LeBruesch",
    author_image: "img/icon_ClemensTrueSelf.jpg",
    date: "March 10, 2020",
    number: "6"
  },
  {
    title: "Geiranger Skywalk, Norway",
    image: {
      src: "img/05Geiranger_Norway800.jpg",
      alt: "Geiranger Skywalk in Norway"
    },
    text:
      "Luke, I am your father!",
    author: "Annakin, later in life",
    author_image: "img/icon_annakin.jpg",
    date: "March 10, 7528",
    number: "7"
  },
  {
    title: "Little well in Sintra, Portugal",
    image: {
      src: "img/10Sintra800.jpg",
      alt: "Little well in Sintra, Portugal"
    },
    text:
      "Relax and enjoy! You are on holiday.",
    author: "Kleiner Kachelmann",
    author_image: "img/icon_tile.jpeg",
    date: "March 27, 7528",
    number: "8"
  },
  {
    title: "More of Iceland",
    image: {
      src: "img/19Ingi_Haraldss_Iceland800.jpg",
      alt: "somewhere in Iceland"
    },
    text:
      "Stay a while.",
    author: "Gundarik Icetrollson",
    author_image: "img/icon_icetroll.jpg",
    date: "March 12, 2020",
    number: "9"
  },
  {
    title: "Mount Nemrut, Turkey",
    image: {
      src: "img/20Nemrut800.jpg",
      alt: "mount Nemrut in Turkey"
    },
    text:
      "Ancient craftsmanship",
    author: "Antiochus I Theos of Commagene",
    author_image: "img/icon_nemrut.jpg",
    date: "Sometime around 50 BC",
    number: "10"
  }
]

const divContent = document.getElementById("content");

const addClassList = div => {
  div.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");
}

const createPostHtml = post => {
  return `<img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
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
  </div>`
}

for (let i = 0; i < blogPosts.length; i++){
  const div = document.createElement("div");
  addClassList(div);
  div.innerHTML = createPostHtml(blogPosts[i]);
  divContent.append(div);
}

// let post = {
//   title: "In The Mountains",
//   image: {
//     src: "img/card-top.jpg",
//     alt: "Sunset in the mountains"
//   },
//   text:
//     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
//   author: "Teresa Holfeld",
//   author_image: "img/icon_jonathan.jpg",
//   date: "Jan 18, 2020",
//   number: "1"
// };

// let postPeyto = {
//   title: "Peyto Lake Mountains, Canada",
//   image: {
//     src: "img/15Peyto_Lake_Mountains_Canada800.jpg",
//     alt: "Peyto Lake Mountains in Canada"
//   },
//   text:
//     "Energize! Where is Ryker? Make it so. Battle stations. Leave the bridge. One plum juice pleace.",
//   author: "Wolpertinger",
//   author_image: "img/icon_Wolpertinger.jpg",
//   date: "March 9, 2020",
//   number: "2"
// };

// let postEltz = {
//   title: "Eltz Castle near Wierschem, Germany",
//   image: {
//     src: "img/03Eltz_Castle_Wierschem800.jpg",
//     alt: "Eltz Castle near Wierschem, Germany"
//   },
//   text:
//     "Make haste! By nightfall these hills will be swarming with orks.",
//   author: "I am not Aragorn",
//   author_image: "img/icon_musketeer.jpg",
//   date: "March 10, 2020",
//   number: "3"
// };

// let postJoekulsarlon = {
//   title: "Joekulsarlon Cave, Iceland",
//   image: {
//     src: "img/04Joekulsarlon_Iceland800.jpg",
//     alt: "Joekulsarlon Cave in Iceland"
//   },
//   text:
//     "I hope you brought some warm clothes. Don't camp here. Don't light a fire.",
//   author: "Clemens LeBruesch",
//   author_image: "img/icon_ClemensTrueSelf.jpg",
//   date: "March 10, 2020",
//   number: "4"
// };

// let postGeiranger = {
//   title: "Geiranger Skywalk, Norway",
//   image: {
//     src: "img/05Geiranger_Norway800.jpg",
//     alt: "Geiranger Skywalk in Norway"
//   },
//   text:
//     "Luke, I am your father!",
//   author: "Annakin, later in life",
//   author_image: "img/icon_annakin.jpg",
//   date: "March 10, 7528",
//   number: "5"
// };

// let newPost = document.createElement("div");
// newPost.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");


// newPost.innerHTML = "<img class=\"w-full\" src=\"img/01Siem_Reap_Angkor_Wat800.jpg\" alt=\"Sunset in the mountains\"><div class=\"px-6 py-4\"><div class=\"font-bold text-xl mb-2\">At Angkor Wat, Cambodia</div><p class=\"text-gray-700 text-base\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendiseaque, exercitationem praesentium nihil.</p></div><div class=\"px-6 py-4 flex items-center\"><img class=\"w-10 h-10 rounded-full mr-4\" src=\"img/icon_ClemensTrueSelf.jpg\" alt=\"Avatar of Clemens\"><div class=\"text-sm\"><p class=\"text-gray-900 leading-none\">Clemens LeBruesch</p><p class=\"text-gray-600\">March 10, 2020</p></div></div>"

// divContent.append(newPost);

// let veryNewPost = document.createElement("div");
// veryNewPost.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");


// veryNewPost.innerHTML = `<img class="w-full" src="${postPeyto.image.src}" alt="${postPeyto.image.alt}">
// <div class="px-6 py-4">
//   <div class="font-bold text-xl mb-2">${postPeyto.title}</div>
//   <p class="text-gray-700 text-base">
//     ${postPeyto.text}
//   </p>
// </div>
// <div class="px-6 py-4 flex items-center">
//   <img class="w-10 h-10 rounded-full mr-4" src="${postPeyto.author_image}" alt="${postPeyto.author}">
//   <div class="text-sm">
//     <p class="text-gray-900 leading-none">${postPeyto.author}</p>
//     <p class="text-gray-600">${postPeyto.date}</p>
//   </div>
// </div>`

// divContent.append(veryNewPost);

// let postNumber3 = document.createElement("div");
// postNumber3.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");


// postNumber3.innerHTML = `<img class="w-full" src="${postEltz.image.src}" alt="${postEltz.image.alt}">
// <div class="px-6 py-4">
//   <div class="font-bold text-xl mb-2">${postEltz.title}</div>
//   <p class="text-gray-700 text-base">
//     ${postEltz.text}
//   </p>
// </div>
// <div class="px-6 py-4 flex items-center">
//   <img class="w-10 h-10 rounded-full mr-4" src="${postEltz.author_image}" alt="${postEltz.author}">
//   <div class="text-sm">
//     <p class="text-gray-900 leading-none">${postEltz.author}</p>
//     <p class="text-gray-600">${postEltz.date}</p>
//   </div>
// </div>`

// divContent.append(postNumber3);

// let div4 = document.createElement("div");

// addClassList(div4);
// div4.innerHTML = createPostHtml(postJoekulsarlon);
// divContent.append(div4);

// let div5 = document.createElement("div");

// addClassList(div5);
// div4.innerHTML = createPostHtml(postGeiranger);
// divContent.append(div4);


