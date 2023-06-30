const getApiBtn = document.querySelector('#getapi');

async function fetchWebApi() {
  const res = await fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=cher&api_key=91a7bbba442bb17038f1401896e7fe46&format=json`);
  
  return await res.json();
}

async function handleOnClick() {
  const response = await fetchWebApi();
  console.log(response);
}

getApiBtn.addEventListener("click", handleOnClick); 