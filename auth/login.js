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

const login = (e) => {
  e.preventDefault();
  const email = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Success!");
      // go to restricted.html
      window.location.href = "/auth/restricted.html";
    })
    .catch((error) => {
      // Handle Errors here.
      // TODO <p> Username and password don't match. </p>
      var errorCode = error.code;
      var errorMessage = error.message;
      console.error(errorCode, errorMessage);
    });
}

document.getElementById("loginForm").addEventListener("submit", login);
