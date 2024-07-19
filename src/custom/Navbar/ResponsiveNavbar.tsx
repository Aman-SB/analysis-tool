'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/custom/Navbar/navbar'
import Sidenav from '@/custom/Navbar/sidenav';

export default function ResponsiveNavbar() {
    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth > 768 );

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth > 768);
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isDesktop ? <Navbar /> : <Sidenav />;
}

