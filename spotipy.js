const token = "BQBo9u_levnxj_uk_qK4SNrRBQ3pxnIguA4iaceRmv2K0U32WPenSrC2fxS3oDSW7pIKGUyEpx1-li-jEk5KI_vNXqWFUwtQ1RH1UzcHZswpT6XLJ54"
var client_id = 'fd375c56301c4dd88e66ca0233cf7253';
var client_secret = '358d30fb77164a4a845f8527ea870dc7';

const getAccessToken = async () => {
  const response = await fetch(authOptions);
  console.log(response);
}

async function fetchWebApi(endpoint, method, body) {
  // const token = await getAccessToken();
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body)
  });
  return await res.json();
}

async function searchSongs() {
  const searchQuery = document.getElementById('search').value;
  const response = await fetchWebApi(`v1/search?q=${searchQuery}&type=track&limit=9`, 'GET');
  console.log(response);
  const data = await response.tracks.items;
  showResults(data);
}

function handleError() {
  console.log("Error");
}

function enterKey() {
  if (window.event.keyCode === 13) {
    searchSongs();
  }
}

function showResults(songs) {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    resultsContainer.style.display = 'flex';
    resultsContainer.style.flexWrap = 'wrap';
    resultsContainer.style.justifyContent = 'center';
  
    songs.forEach(song => {
      const songDiv = document.createElement('div');
      songDiv.classList.add('song-result');

      const songInfoDiv = document.createElement('div');
      songInfoDiv.classList.add('song-info');
      songInfoDiv.innerHTML = `
        <h4>${song.name.length > 8 ? `${song.name.slice(0, 8)}...` : `${song.name}`}</h4>
        <p>${song.artists.map(artist => artist.name).join(', ').length > 15 ? 
      `${song.artists.map(artist => artist.name).join(', ').slice(0, 15)}...` : song.artists.map(artist => artist.name).join(', ')}</p>
      `;

      const albumImage = document.createElement('img');
      albumImage.src = song.album.images[0].url;
      albumImage.alt = "Album Cover";
      albumImage.width = 100;

      songDiv.appendChild(albumImage);
      songDiv.appendChild(songInfoDiv);
      
      // 클릭 이벤트 추가
      songDiv.addEventListener('click', () => {
        window.open(song.external_urls.spotify, "_blank");
      });

      resultsContainer.appendChild(songDiv);
    });
}