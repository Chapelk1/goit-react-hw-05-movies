import axios from 'axios'


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjI3MGE5MDQxOWZmZGU3NTdhNTMwZjc5ZGEwZjk5MyIsInN1YiI6IjY1MTRhOTZlYzUwYWQyMDE0ZGNiZDRhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0cnUSQym0igy96KjBCSKsZxHrfcfXCa_zP5yeOXpcdA',
  },
};


export default function getApi(url) {
  return axios.get(url, options).then(console.log);
}

