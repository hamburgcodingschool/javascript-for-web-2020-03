const content = document.getElementById("content");

const reload = () => {
  fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(json => {
      // code
      console.log(json.fact);
      content.innerHTML = json.fact;
    })
    .catch(error => {
      // error handling
      console.error(error);
    })
}

reload();
