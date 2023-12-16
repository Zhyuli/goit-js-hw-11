import axios from 'axios';

// const BASE_URL = 'https://pixabay.com/api/?';
// const API_KEY = '41215142-176c4906bca0428b6e4a54ed1';

// export async function fetchImage(query, page, perPage) {
//     try {
//         const url = `${BASE_URL}key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`;
//         const response = await axios.get(url);
//         return response.data;
//     } catch (error) {
//         console.log('fetchImage error', error.message)
//     };
// }
    





export async function fetchImage(query='', page='') {
    const BASE_URL = 'https://pixabay.com/api/?';
    const params = new URLSearchParams({
        key: '41215142-176c4906bca0428b6e4a54ed1',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 40
    });
    return await axios.get(`${BASE_URL}&${params}`).then(resp => {
        return resp.data;
    });

}


