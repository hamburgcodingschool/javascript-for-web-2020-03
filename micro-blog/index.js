const posts = [
  {
  title: "In The Mountains",
  text: "Mountains are fun. Lot of snow. Snow is fun, too. Good for snowboarding and skiing. And apres-ski. Germans like apres-ski very much.",
  image: {
    src: "img/card-top.jpg",
    alt: "Sunset in the mountains"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Jan 18, 2020"
  },
  {
  title: "Nature",
  text: "Going outside for a hike is always a good idea. Mother nature has a lot to offer. This river bed is dry though.",
  image: {
    src: "img/nature-river.jpg",
    alt: "A dry river bed"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 17, 2020"
  },
  {
  title: "To The Sea",
  text: "The ocean is fun too. Good for swimming and surfing. Also oceans often hav beaches. Germans like layin' on beaches a lot.",
  image: {
    src: "img/beach-signs.jpg",
    alt: "Signs at the beach"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Jan 20, 2020"
  },
  {
  title: "Animals",
  text: "Animals are a fun thing too. They look kinda sweet and often are very furry. However, this donkey is wearing a mask.",
  image: {
    src: "img/donkey-mask.jpg",
    alt: "Donkey with mask"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Jan 23, 2020"
  },
  {
  title: "Sports",
  text: "Doing sports while being on holiday is great. I personally like kitesurfing. This is a friend of mine taking a break in a hammock.",
  image: {
    src: "img/sports.jpg",
    alt: "Dude in hammock"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 3, 2020"
  },
  {
  title: "At The Market",
  text: "Markets are funny places too. Lots of things going on there. Pretty crowded usually. And lots of fresh fruits and tasty vegetables.",
  image: {
    src: "img/market-bw.jpg",
    alt: "Signs at a market"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 12, 2020"
  },
  {
  title: "Bars",
  text: "Bars are nice places to hang out and have a drink or two. Or maybe even three or four. This one has quite bright colors.",
  image: {
    src: "img/bar-colors.jpg",
    alt: "Signs at a market"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 15, 2020"
  },
  {
  title: "Fishing",
  text: "Fishing for some people somehow is nice too. Even though I think it's kinda boring. Anyhow, you get the most fresh fish.",
  image: {
    src: "img/fisherman.jpg",
    alt: "Man fishing in river"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 19, 2020"
  },
  {
  title: "Historic Places",
  text: "Visting historic places is fun too. You will meet rich architecture and culture. Some people consider it to be boring though.",
  image: {
    src: "img/historic-place.jpg",
    alt: "View of a historic place"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Feb 26, 2020"
  },
  {
  title: "Great Food",
  text: "Great Food is fantastic. It's delicious and tasty. Most people like great food. Fish is not for everybody though.",
  image: {
    src: "img/fish-bbq.jpg",
    alt: "Grilled fish at skewers"
  },
  author: "Hendrik Harlichs",
  author_image_src: "img/hein_bloed_2.png",
  author_image_alt: "Avatar of Hein Blöd",
  date: "Mar 5, 2020"
  }
]

// function transformObjectToString(post) {
//   return `<img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
//   <div class="px-6 py-4">
//   <h2 class="font-bold text-xl mb-2">${post.title}</h2>
//   <p class="text-gray-700 text-base">${post.text}</p>
//   </div>
//   <div class="px-6 py-4 flex items-center">
//   <img class="w-10 h-10 rounded-full mr-4" src="${post.author_image_src}" alt="${post.author_image_alt}">
//   <div class="text-sm">
//   <p class="text-gray-900 leading-none">${post.author}</p>
//   <p class="text-gray-600">${post.date}</p>
//   </div>
//   </div>`
// }

const transformObjectToString = post =>
  `<img class="w-full" src="${post.image.src}" alt="${post.image.alt}">
  <div class="px-6 py-4">
  <h2 class="font-bold text-xl mb-2">${post.title}</h2>
  <p class="text-gray-700 text-base">${post.text}</p>
  </div>
  <div class="px-6 py-4 flex items-center">
  <img class="w-10 h-10 rounded-full mr-4" src="${post.author_image_src}" alt="${post.author_image_alt}">
  <div class="text-sm">
  <p class="text-gray-900 leading-none">${post.author}</p>
  <p class="text-gray-600">${post.date}</p>
  </div>
  </div>`

// function addClasses(div) {
//   div.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");
// }

const addClasses = div => div.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6");

// Get element in the DOM
const content = document.getElementById("content");

// Generate and append a post for each element of posts array
for (let i = 0; i < posts.length; i++) {
  const div = document.createElement("div");
  addClasses(div);
  div.innerHTML = transformObjectToString(posts[i]);
  content.append(div);
}