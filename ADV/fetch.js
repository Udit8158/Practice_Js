// Fetch api (It can't run on node environment so go to browser console)
// fetch method always return a promise
fetch("https://api.chucknorris.io/jokes/random")
  .then((response) => {
    return response.json();
    // console.log("res", response.json());
  })
  .then((data) => {
    console.log(data);
    let joke = data.value;
    console.log("Joke is :", joke);
  })
  .catch((reject) => {
    console.log("It is rejected");
  });
