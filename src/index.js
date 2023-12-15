import Notiflix from 'notiflix';
// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';
import { fetchImage } from './js/pixabayApi';
import { createMarckUp } from './js/createMarkUp';
import simpleLightbox from 'simplelightbox';

export const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreButton: document.querySelector('.load-more'),
};

refs.loadMoreButton.classList.add('is-hidden');
refs.searchForm.addEventListener('submit', onSearch);

let page = 1;
let query = '';
const perPage = 40;


function onSearch(evt) {
    evt.preventDefault();
    page = 1;
    query = evt.currentTarget.searchQuery.value.toLowerCase().trim();
    refs.gallery.innerHTML = '';
    // console.log(query);

    if (query === '') {
        Notiflix.Notify.failure("Please enter your query. Search string cannot be empty!");
        return
    }
    fetchImage(query, page, perPage)
        .then(data => {
            const searchRes = data.hits;
            if (data.totalHits === 0) {
                Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            }
            else {
                createMarckUp(searchRes);
                // simpleLightBox = new SimpleLightbox('.gallery a').refresh();
                Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`)
            }
            if (data.totalHits > perPage) {
                refs.loadMoreButton.classList.remove('is-hidden');
            }
            // scrollPage();
        })
        .catch(error => {
            console.log(error);
            Notiflix.Notify.failure('Oops! Something went wrong. Please, try again.')
        })
        
        .finally(() => {
            refs.searchForm.reset();
        })
}

refs.loadMoreButton.addEventListener('click', onLoadMore);

async function onLoadMore() {
    page += 1;
    // simpleLightbox.destroy();
    try {
        const result = await fetchImage(query, page, perPage);
        const searchRes = result.hits;
        const lastPage = Math.ceil(result.totalHits / perPage);
        createMarckUp(searchRes);

        if (page === lastPage) {
            refs.loadMoreButton.classList.add('is-hidden');
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
            
        }
    } catch (error) {
          Notiflix.Notify.failure('Oops! Something went wrong. Please, try again.');
}
    }





