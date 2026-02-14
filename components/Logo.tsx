import React from 'react';
import logoUrl from '@/images/Logo.png';

const Logo: React.FC<{ className?: string }> = ({ className = "h-10 w-auto" }) => {
    return (
        <img
            src={logoUrl}
            alt="DibujArte Logo"
            className={className}
        />
    );
};

export default Logo;
