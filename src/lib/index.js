export function loadSmoothScroll() {
    // load smooth scroll
    if (typeof window !== 'undefined') {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]');
    }
}
