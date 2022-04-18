import Splide from '@splidejs/splide';

export function carousel() {
    var splide = new Splide( '#hero-carousel',{
        type   : 'slide',
        perPage: 1,
        // heightRatio : 0.3
    } );
    splide.mount();
}
