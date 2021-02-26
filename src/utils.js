const getMoviesByName = async (movieSearch) => {
    const baseUrl = 'https://www.omdbapi.com';
    const apiKey = '';
    const url = `${baseUrl}/?apikey=${apiKey}&s=${movieSearch}`;

    const response = await fetch(url);
    const data = await response.json();
    return data;
}
  
const getMovieDetailsById = async (movieId) => {
    const baseUrl = 'https://www.omdbapi.com';
    const apiKey = '4493334f';
    const url = `${baseUrl}/?apikey=${apiKey}&s=${movieId}`;
    
    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export default getMoviesByName;
export default getMovieDetailsById;

// getMoviesByName('spider')
//     .then((data) => console.log(data));

// getMovieDetailsById()
//     .then((data) => console.log(data));
