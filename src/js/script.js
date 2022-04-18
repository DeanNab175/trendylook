import App from './modules/app.js';
import { carousel } from './modules/carousel.js';

const app = new App();

document.addEventListener( 'DOMContentLoaded', function() {
    carousel();
} );

