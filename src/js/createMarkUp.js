import { refs } from "../index";
import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export function createMarckUp(params) {
    const imgArr = params.map(
        ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads
        }) => {
            return `<div class="photo-card">
    <a class="photo-link" href=${largeImageURL}>
    <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" width="300px" /></a>
  <div class="info">
                 <p class="info-item">
                 <b>Likes: <br/> ${likes}</b></p>
                  <p class="info-item">
                  <b>Views: <br/> ${views}</b></p>
                  <p class="info-item">
                  <b>Comments: <br/> ${comments}</b></p>
                  <p class="info-item">
                  <b>Downloads: <br/> ${downloads}</b></p>
  </div>
</div>
 `
        }
    );
    refs.gallery.insertAdjacentHTML('beforeend', imgArr.join(''));
    
    const simpleLightBox = new SimpleLightbox('.gallery a', {
       captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
    });
}
