const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  databaseURL: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "..."
};
firebase.initializeApp(firebaseConfig);

const content = document.getElementById("content");

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in.
    content.innerHTML = "Welcome! :)"

    const div = document.createElement("div");
    div.innerHTML = `<button onclick="logout()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Logout</button>`;
    content.append(div.firstChild);

  } else {
    // No user is signed in.
    content.innerHTML = "Go out!";
    window.location.href = "/auth/login.html";
  }
});

const logout = () => {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    console.log("logout successful");
  }).catch(function(error) {
    // An error happened.
    console.log("logout not successful");
  });
}