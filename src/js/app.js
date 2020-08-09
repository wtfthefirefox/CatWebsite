import tabs from './modals/tabs';
import slider from './modals/slider';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.pets__list', '.pets__tab', '.pets__tab-content-wrapper', 'pet-active');

    slider('.cats-male > .prev-slide', '.cats-male > .next-slide', '.cats-male > .slider > .pets__slider > .gallery > .gallery__item', 'slider__slide--active', 'gallery__item-left', 'gallery__item-right');
    slider('.cats-female > .prev-slide', '.cats-female > .next-slide', '.cats-female > .slider > .pets__slider > .gallery > .gallery__item', 'slider__slide--active', 'gallery__item-left', 'gallery__item-right');
    slider('.cats-kids > .prev-slide', '.cats-kids > .next-slide', '.cats-kids > .slider > .pets__slider > .gallery > .gallery__item', 'slider__slide--active', 'gallery__item-left', 'gallery__item-right');
});