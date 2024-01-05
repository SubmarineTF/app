import {HTMLAttributes} from 'react';

export default function TitleText({ value, className = '', children, ...props }: HTMLAttributes<HTMLParagraphElement> & { value?: string }) {
    return (
        <h1 {...props} className={`block text-2xl font-bold text-gray-800 ` + className}>
            {value ? value : children}
        </h1>
    );
}
