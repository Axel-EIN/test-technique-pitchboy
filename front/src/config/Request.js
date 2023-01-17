const API_KEY = "ad2c28e0345278f3c8b002efddadf28f";
const BASE_URL = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}`,
    fetchLatests: `${BASE_URL}/movie/latest/?api_key=${API_KEY}&language=en-US`,
    fetchUpcomings: `${BASE_URL}/movie/upcoming/?api_key=${API_KEY}`,
    fetchBaseMovie: `${BASE_URL}/movie`,
    fetchRecommendations: `/recommendations?api_key=${API_KEY}`,
};

export default requests;