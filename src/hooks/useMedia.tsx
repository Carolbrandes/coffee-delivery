import { useState, useEffect } from 'react';

type ScreenSize = 'small' | 'medium' | 'large';

export const useMedia = (): ScreenSize => {
    const [screenSize, setScreenSize] = useState<ScreenSize>(() => getScreenSize());

    useEffect(() => {
        const handleResize = () => {
            setScreenSize(getScreenSize());
        };

        window.addEventListener('resize', handleResize);

        // Cleanup the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount

    return screenSize;
};

const getScreenSize = (): ScreenSize => {
    const mediaQuerySmall = window.matchMedia('(max-width: 599px)');
    const mediaQueryMedium = window.matchMedia('(min-width: 600px) and (max-width: 1199px)');

    if (mediaQuerySmall.matches) {
        return 'small';
    } else if (mediaQueryMedium.matches) {
        return 'medium';
    } else {
        return 'large';
    }
};