import axios from "axios"
// const API_KEY = "8382974d19cb9324dcad053cce7db68a"
// const API_TOKEN = 
// "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzgyOTc0ZDE5Y2I5MzI0ZGNhZDA1M2NjZTdkYjY4YSIsIm5iZiI6MTczNjUzMDU1NC4wMTIsInN1YiI6IjY3ODE1YTdhMzg4MWM3OTQxOWJiNzFmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PG1qiTWSxGFaSoB5zKGJsjItk3x1zDgX2hdyTJHH_NU"

axios.defaults.baseURL = "https://api.themoviedb.org/3"
const options = {
  params: {
    include_adult: false,
    language: 'en-US',
    page: 1,
    },
    
     headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MzgyOTc0ZDE5Y2I5MzI0ZGNhZDA1M2NjZTdkYjY4YSIsIm5iZiI6MTczNjUzMDU1NC4wMTIsInN1YiI6IjY3ODE1YTdhMzg4MWM3OTQxOWJiNzFmNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PG1qiTWSxGFaSoB5zKGJsjItk3x1zDgX2hdyTJHH_NU',
  },
};

export const fetchMovies = async () => {
  const response = await axios.get(`/trending/movie/day`, options);
  return response.data.results;
};

export const fetchMoviesById = async (id) => {
    const { data } = await axios.get(`/movie/${id}`, options)
    return data;
};