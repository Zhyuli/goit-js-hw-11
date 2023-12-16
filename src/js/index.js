import Notiflix from 'notiflix';
import { fetchImage } from './pixabayApi';
import { createMarckUp } from './createMarkUp';
import { simpleLightBox } from './lightBox';

export const refs = {
    searchForm: document.querySelector('.search-form'),
    gallery: document.querySelector('.gallery'),
    loadMoreButton: document.querySelector('.load-more'),
};


refs.searchForm.addEventListener('submit', onSearch);


refs.loadMoreButton.style.visibility = 'hidden';

let page = 1;
let getQuery = '';
const perPage = 40;
let lastPage;


async function onSearch(evt) {
    evt.preventDefault();

    refs.gallery.innerHTML = '';
    page = 1;
    getQuery = evt.currentTarget.elements.searchQuery.value.toLowerCase().trim();
    // console.log(getQuery);
    
    try {

        const { hits, totalHits } = await fetchImage(getQuery, page);
        lastPage = Math.ceil(totalHits / perPage);

        if (getQuery === '' || totalHits === 0) {
            
            refs.loadMoreButton.style.visibility = 'hidden';
            Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again!");
        }

        refs.loadMoreButton.style.visibility = 'visible';
        Notiflix.Notify.success(`Hooray! We found ${totalHits} images.`)

        refs.gallery.insertAdjacentHTML('beforeend', createMarckUp(hits));

        if (page >= lastPage) {
            refs.loadMoreButton.style.visibility = 'hidden';
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
        
        }
    }
    catch (error) {
        Notiflix.Notify.failure('Oops! Something went wrong. Please, try again.');
    
    }
     simpleLightBox.refresh();
}
    
refs.loadMoreButton.addEventListener('click', onLoadMore);

async function onLoadMore(evt) {
 evt.preventDefault();
    page += 1;
   
    try {
        const { hits } = await fetchImage(getQuery, page)

         if (page === lastPage) {
            refs.loadMoreButton.style.visibility = 'hidden';
            Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
         }
        refs.gallery.insertAdjacentHTML('beforeend', createMarckUp(hits));

    } catch (error) {
          Notiflix.Notify.failure('Oops! Something went wrong. Please, try again.');
    }
      simpleLightBox.refresh();
    }





