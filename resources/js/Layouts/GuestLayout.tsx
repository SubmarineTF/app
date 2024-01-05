import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="min-h-screen bg-gray-100 flex h-full items-center py-16">
            <div className="w-full max-w-md mx-auto p-6">
                <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
                    <div className="w-20 h-20 fill-current mx-auto pt-5 mb-2">
                        <ApplicationLogo />
                    </div>
                    <div className="p-4 sm:p-7">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}
