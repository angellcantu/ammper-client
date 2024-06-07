'use strict';

import { useEffect, useState } from 'react';

/* isMobile */
const useIsMobile = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const handleWidth = () => setWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => {
            window.removeEventListener('resize', handleWidth);
        };
    }, [width]);

    return (width <= 780) ? 'true' : 'false';
};

/* isScrollTop */
const useScrollTop = () => {
    const [scroll, setScroll] = useState<boolean>();

    const handleScroll = (value: boolean) => setScroll(value);

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset == 0) {
                handleScroll(true);
            } else {
                handleScroll(false);
            }
        };
        return () => {
            window.onscroll = null;
            handleScroll(true);
        };
    }, []);

    return scroll ? 'true' : 'false';
};

export {
    useIsMobile,
    useScrollTop
};