import Notiflix from 'notiflix';
import { fetchImage } from './js/pixabayApi';
import { createMarckUp } from './js/createMarkUp';

export const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreButton: document.querySelector('.load-more'),
};

