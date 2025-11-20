import React from 'react';
import { cn } from '../../utils/cn';

export const GlassmorphicCard = ({
    children,
    className,
    blur = 'md',
    opacity = 10,
    border = true,
    ...props
}) => {
    const blurClasses = {
        sm: 'backdrop-blur-sm',
        md: 'backdrop-blur-md',
        lg: 'backdrop-blur-lg',
        xl: 'backdrop-blur-xl'
    };

    return (
        <div
            className={cn(
                'relative',
                blurClasses[blur],
                `bg-white/[0.${opacity}]`,
                border && 'border border-white/20',
                'shadow-xl',
                'rounded-2xl',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
};
