const [movie, setMovie] = useState(null);

const API_URL_PAGE_1 =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=1';

const API_URL_PAGE_2 =
  'https://api.themoviedb.org/3/movie/upcoming?api_key=fd8d6c89de4982d8d30b319843006081&language=en-US&page=2';

useEffect(() => {
  Promise.all([
    fetch(API_URL_PAGE_1).then((response) => response.json()),
    fetch(API_URL_PAGE_2).then((response) => response.json()),
  ])
    .then((dataArray) => {
      const moviesArray = dataArray.flatMap((data) => data.results);
      setMovie(moviesArray);
    })
    .catch((error) => console.log(error.message));
}, []);

const currentDate = new Date().toISOString().slice(0, 10);

const film = movie && movie.filter((item) => item.release_date > currentDate);
