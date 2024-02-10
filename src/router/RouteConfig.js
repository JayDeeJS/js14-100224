import LandingPage from '../pages/LandingPage/LandingPage.js';
import AboutPage from '../pages/AboutPage/AboutPage.js';
import ProductPage from '../pages/ProductPage/ProductPage.js';

export const PATHS = {
    LANDING: '/',
    ABOUT: '/about',
    PRODUCT: '/product',
}

export const routes = [
    {
        id: 1,
        path: PATHS.LANDING,
        element: <LandingPage/>
    },
    {
        id: 2,
        path: PATHS.ABOUT,
        element: <AboutPage/>
    },
    {
        id: 3,
        path: PATHS.PRODUCT,
        element: <ProductPage/>
    },
]