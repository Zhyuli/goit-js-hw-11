import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';

export let simpleLightBox = new SimpleLightbox('.gallery a', {
       captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom',
    });