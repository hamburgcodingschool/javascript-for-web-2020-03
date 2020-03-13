const posts = [
	{
		title: "In the Mountains",
		text: "Mountains. Nothing more to say.",
		image: { src: "img/card-top.jpg", alt: "Sunset in the mountains" },
		author: "Christoph Pöllmann",
		author_image: "img/jonathan.jpg",
		date: "Jan 18, 2020",
		number: "1"
	},
	{
		title: "Mountain Valley",
		text: "Very dusty, very dirty landscape with rocks and dust.",
		image: {
			src: "img/monument_valley-wallpaper-800x600.jpg",
			alt: "Mountains in the valley"
		},
		author: "Kermit Müllberger",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "2"
	},

	{
		title: "Armenia",
		text: "Wood. Wood everywhere",
		image: {
			src: "img/armenia_teghut-wallpaper-800x600.jpg",
			alt: "Woody wood"
		},
		author: "Sven Röbel",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "3"
	},
	{
		title: "French Alps",
		text: "France is nice aswell",
		image: {
			src: "img/french_alps_summer_mountain_landscape-wallpaper-800x600.jpg",
			alt: "Mountains and water"
		},
		author: "Gisela Franz",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "4"
	},
	{
		title: "Italy with water",
		text: "Houses on a lake ... huge. Be aware of corona here",
		image: {
			src: "img/idyllic_landscape_italy-wallpaper-800x600.jpg",
			alt: "House on a Lake"
		},
		author: "Karin Müllberger",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "5"
	},
	{
		title: "Karersee in den Dolomiten",
		text: "Good for swimmers",
		image: {
			src: "img/karersee_lake_dolomites_mountains_italy-wallpaper-800x600.jpg",
			alt: "Dolomites"
		},
		author: "Woody Tray",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "6"
	},
	{
		title: "Canadian Rockies",
		text: "Thank you Canada!",
		image: {
			src: "img/moraine_lake_canadian_rockies-wallpaper-800x600.jpg",
			alt: "Kanada"
		},
		author: "Karin Müllberger",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "7"
	},
	{
		title: "Random place in France",
		text: "Flowers. Flowers. Flowers.",
		image: {
			src: "img/morning_mist_flowers_field_nature-wallpaper-800x600.jpg",
			alt: "Flowers in France"
		},
		author: "Brigitte Siebel",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "8"
	},
	{
		title: "Yosemite N Park",
		text: "Man kennt ihn...",
		image: {
			src: "img/yosemite_national_park_yosemite_valley-wallpaper-800x600.jpg",
			alt: "Yosemite National Park"
		},
		author: "Christoph Pöllmann",
		author_image: "img/jonathan.jpg",
		date: "Feb 11, 2020",
		number: "9"
	},
	{
		title: "Grüne Berge",
		text: "Bayern ... immer eine Reise wert",
		image: {
			src: "img/mountain_landscape-wallpaper-800x600.jpg",
			alt: "Berge in Bayern"
		},
		author: "Gottfried Brumm",
		author_image: "img/kermit.png",
		date: "Feb 11, 2020",
		number: "10"
	}
];

const content = document.getElementById("content");

const createPost = post =>
	`<img class="w-full" src="${post.image.src}" alt="${post.image.alt}"/>
	<div class="px-6 py-4"><div class="font-bold text-xl mb-2">${post.title}</div>
	<p id="texting" class="text-gray-700 text-base">${post.text}</p></div>
	<div class="px-6 py-4 flex items-center">
	<img class="w-10 h-10 rounded-full mr-4" src="${post.author_image}" alt="Avatar of Jonathan Reinink"/>
	<div class="text-sm"><p class="text-gray-900 leading-none">${post.author}</p>
	<p class="text-gray-600">${post.date}</p></div></div>`;

const addClass = div =>
	div.classList.add(
		"container",
		"mx-auto",
		"max-w-sm",
		"rounded",
		"overflow-hidden",
		"shadow-lg",
		"justify-center",
		"bg-white",
		"m-6"
	);

for (let i = 0; i < posts.length; i++) {
	const newDiv = document.createElement("div");
	content.append(newDiv);

	newDiv.innerHTML = createPost(posts[i]);
	addClass(newDiv);
}

// newDiv10.innerHTML = createPost(post10);
// addClass(newDiv10);

// let firstPost = document.getElementById("blogPost");

// // //Post Element kopieren/klonen

// // // let newPost = firstPost.cloneNode(true);
// // // newPost.id = "newPost";

// // // firstPost.after(newPost);

// function addPost(number) {
// 	// clone old and add new post
// 	for (let i = number; i >= 1; i--) {
// 		let newPost = firstPost.cloneNode(true);
// 		newPost.id = "newPost" + i;
// 		firstPost.after(newPost);
// 	}
// }
// addPost(3);
