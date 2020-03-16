const posts = [
  {
    title: "Two Brothers",
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Volupt atibus quia, nulla!
    Maiores et perferendis eaque, exercitationem praesentium nihil.`,
    image: {
        src: "img/Rio de Janeiro.jpg",
        alt: "Rio de Janeiro"
    }, 
    author: "Eva Dressel",
    date: "Jan 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Brazil",
    number: 1
  },
  {
    title: "Mountains By The Sea",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Dahab.jpg",
        alt: "Dahab"
    }, 
    author: "Eva Dressel",
    date: "Feb 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Egypt",
    number: 2
},
{
    title: "In The Desert",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Petra.jpg",
        alt: "Petra"
    }, 
    author: "Eva Dressel",
    date: "Mar 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Jordan",
    number: 3
},
{
    title: "Swimming Pool In The Water",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Helsinki.jpg",
        alt: "Helsinki"
    }, 
    author: "Eva Dressel",
    date: "Apr 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Finland",
    number: 4
},
{
    title: "Palm Trees In The Mountains",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Cocora.jpg",
        alt: "Cocora"
    }, 
    author: "Eva Dressel",
    date: "May 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Colombia",
    number: 5
},
{
    title: "Fountain In The City",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Hamburg.jpg",
        alt: "Hamburg"
    }, 
    author: "Eva Dressel",
    date: "Jun 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Germany",
    number: 6
},
{
    title: "Golden Dome",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Jerusalem.jpg",
        alt: "Jerusalem"
    }, 
    author: "Eva Dressel",
    date: "Jul 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Israel",
    number: 7
},
{
    title: "Hanseatic Town Square",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Riga.jpg",
        alt: "Riga"
    }, 
    author: "Eva Dressel",
    date: "Aug 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Latvia",
    number: 8
},
{
    title: "Channel Water",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/St Petersburg.jpg",
        alt: "St. Petersburg"
    }, 
    author: "Eva Dressel",
    date: "Sep 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Russia",
    number: 9
},
{
    title: "Church Towers",
    text: `Something else something else. And some more more more.`,
    image: {
        src: "img/Tallinn.jpg",
        alt: "Tallinn"
    }, 
    author: "Eva Dressel",
    date: "Oct 18, 2002",
    author_image: "img/myAvatar.png",
    author_image_alt: "Avatar of Eva Dressel",
    location: "Estonia", 
    number: 10
},
];

/*var stringified = JSON.stringify(post.author);
document.write(stringified)*/

var content = document.getElementById("content");
//console.log(content);

/* 1. Create new element
var div = document.createElement("div");
console.log(div);
   2. Add div
content.append(div);
*/

//newDiv.innerHTML = "<p>Title of the next blog post</p>";
//<div><p>Title of the next blog post</p></div>

/*oder über newP
var newP = document.createElement("p")
newDiv.append(newP);
<div><p> </p></div>*/

/* Alte Funktionsdeklaration
function createPostHtml (post) {
    return `<img>
    <div> ..... 
    </div>`
}*/
// Als Fat Arraw Function
const createPostHtml = post => 
`<div class= "container mx-auto max-w-sm rounded overflow-hidden shadow-lg justify-center bg-white m-6">
<img class="w-full" src="${ post.image.src }" alt="${ post.image.alt }">
<div class="px-6 py-4">
  <div class="font-bold text-xl mb-2">${ post.title }</div>
    <p class="text-gray-700 text-base">
    ${ post.text }
    </p>
  </div>
  <div class="px-6 py-4 flex items-center">
    <img class="w-10 h-10 rounded-full mr-4" src="${ post.author_image }" alt="${ post.author_image_alt }">
    <div class="text-sm">
        <p class="text-gray-900 leading-none">${ post.author }</p>
        <p class="text-gray-600">${ post.date }, ${ post.location }</p>
    </div>
  </div>
</div>
</div>`;

/* Alte Funktionsdeklaration
function addClasses(div) {
    div.classList.add("container", "mx-auto", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg", "justify-center", "bg-white", "m-6")
}*/

/*const addClasses = div => 
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
    const div = document.createElement("div");
    addClasses(div);
    div.innerHTML = createPostHtml(posts[i]);
    content.append(div);
}*/

for (let i = 0; i < posts.length; i++) {
    const newDiv = document.createElement("div");
    newDiv.innerHTML = createPostHtml(posts[i]);
    content.append(newDiv.firstChild);
}


