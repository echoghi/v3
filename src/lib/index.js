const isSSR = typeof window === 'undefined';

export function loadSmoothScroll() {
    // load smooth scroll
    if (!isSSR) {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]');
    }
}
