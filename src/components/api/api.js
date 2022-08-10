import axios from "axios";

// 'https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12'


const API_KEY = '28129229-bb4cd1c73e2b9860b59b7f6a7';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {
    per_page: 12,
}


export const getImages = async(query, page) => {
    const { data } = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);
    return data;
}