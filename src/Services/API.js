import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY = '20697627-1a708263c5a563a5588011ca6';

const fetchImages = async ({ searchQuery = '', currentPage = 1 }) => {
  const r = await axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
  return r.data.hits;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchImages };