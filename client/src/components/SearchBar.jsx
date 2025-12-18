import React from 'react';
import { Search, MapPin } from 'lucide-react';

export default function SearchBar() {
    return (
        <div className="bg-white p-3 rounded-2xl shadow-xl max-w-4xl mx-auto flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    type="text"
                    placeholder="Condition, doctor, or specialty..."
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-gray-700 font-medium"
                />
            </div>
            <div className="flex-1 relative border-t md:border-t-0 md:border-l border-gray-100">
                <MapPin className="ml-2 md:ml-0 absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                    type="text"
                    placeholder="New York, NY"
                    className="w-full pl-12 md:pl-14 pr-4 py-3 bg-gray-50 md:bg-transparent rounded-xl focus:outline-none focus:ring-2 md:focus:ring-0 focus:ring-primary/20 transition-all text-gray-700 font-medium"
                />
            </div>
            <button className="bg-primary hover:bg-primary-hover text-white px-8 py-3 rounded-xl font-bold text-lg transition-colors shadow-lg shadow-blue-500/30">
                Search
            </button>
        </div>
    );
}
