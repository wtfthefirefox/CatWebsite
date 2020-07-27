import tabs from './modals/tabs';

window.addEventListener('DOMContentLoaded', () => {
    tabs('.pets__list', '.pets__tab', '.pets__tab-content-wrapper', 'pet-active');
});