import React from 'react';
import { Heart, Activity, Brain, Baby, Eye, Stethoscope } from 'lucide-react';

const specialties = [
    { icon: Heart, name: 'Cardiology', desc: 'Heart & vascular health' },
    { icon: Baby, name: 'Pediatrics', desc: 'Care for infants & children' },
    { icon: Brain, name: 'Neurology', desc: 'Brain & nervous system' },
    { icon: Activity, name: 'General', desc: 'Comprehensive check-ups' },
    { icon: Eye, name: 'Ophthalmology', desc: 'Eye care & surgery' },
    { icon: Stethoscope, name: 'Dermatology', desc: 'Skin, hair & nail care' },
];

export default function SpecialtyCards() {
    return (
        <div className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Popular Specialties</h2>
                    <p className="mt-4 text-gray-500">Explore our most requested medical services.</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {specialties.map((item, index) => (
                        <div key={index} className="group p-6 bg-white border border-gray-100 rounded-2xl hover:shadow-xl hover:border-blue-100 transition-all duration-300 cursor-pointer">
                            <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                                <item.icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                            <p className="text-gray-500 text-sm">{item.desc}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <button className="text-primary font-semibold hover:text-primary-hover hover:underline transition-all">
                        View all specialties &rarr;
                    </button>
                </div>
            </div>
        </div>
    );
}
