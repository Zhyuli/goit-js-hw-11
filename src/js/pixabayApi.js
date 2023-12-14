import axios from 'axios';



export async function fetchImage(query = '', page = '') {
    const BASE_URL = 'https://pixabay.com/api/?';
    const params = new URLSearchParams({
        key: '41215142-176c4906bca0428b6e4a54ed1',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        saferearch: true,
        page: page,
        per_page: 40
    });
    return await axios.get(`${BASE_URL}&$${params}`).then(resp => {
        return resp.data;
    });
}



