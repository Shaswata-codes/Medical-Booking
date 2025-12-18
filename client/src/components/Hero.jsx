import React from 'react';
import SearchBar from './SearchBar';

export default function Hero() {
    return (
        <div className="relative bg-gradient-to-br from-blue-50 to-white pt-10 pb-20 lg:pt-20 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
                        Find the Right <span className="text-primary">Doctor</span> for Your Needs.
                    </h1>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Book appointments instantly with top-rated specialists in your area. Your health journey starts here with trusted professionals.
                    </p>
                    <SearchBar />
                </div>

                {/* Abstract background elements */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-blue-100/50 rounded-[100%] blur-3xl -z-10 animate-pulse pointer-events-none" />
            </div>
        </div>
    );
}
