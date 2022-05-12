const API_KEY = "6725650d4790dfee5aff087618cb4a61";
const BASE_PATH = "https://api.themoviedb.org/3";

//https://api.themoviedb.org/3/movie/now_playing?api_key=6725650d4790dfee5aff087618cb4a61&language=en-US&page=1&region=kr

export function getMoives() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (res) => res.json()
  );
}
