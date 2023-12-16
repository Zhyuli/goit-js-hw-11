
export function createMarckUp(params) {
    return params.map(
        ({
            webformatURL,
            largeImageURL,
            tags,
            likes,
            views,
            comments,
            downloads
        }) => 
            `<div class="photo-card">
    <a class="photo-link" href=${largeImageURL}>
    <img class="photo-img" src="${webformatURL}" alt="${tags}" loading="lazy" width="300px" />
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
  </a>
</div>
 `
    ).join('');
    
    
}
