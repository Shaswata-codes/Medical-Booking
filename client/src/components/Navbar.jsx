import React, { useState } from 'react';
import { Menu, X, Stethoscope, LogOut, User as UserIcon } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <div className="bg-primary p-1.5 rounded-lg">
                            <Stethoscope className="h-6 w-6 text-white" />
                        </div>
                        <span className="font-bold text-xl text-gray-900">HealWell</span>
                    </Link>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Doctors</a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">Services</a>
                        <a href="#" className="text-gray-600 hover:text-primary transition-colors font-medium">About Us</a>

                        {isAuthenticated ? (
                            <div className="flex items-center gap-4">
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors font-medium"
                                >
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center text-primary font-bold">
                                    {isAuthenticated && user?.name ? user.name.charAt(0).toUpperCase() : <UserIcon className="h-5 w-5" />}
                                </div>
                            </div>
                        ) : (
                            <>
                                <Link to="/auth" className="text-gray-600 hover:text-primary transition-colors font-medium">
                                    Sign In
                                </Link>
                                <Link to="/auth" className="bg-primary text-white px-5 py-2 rounded-full font-medium hover:bg-primary-hover transition-colors shadow-sm">
                                    Book Appointment
                                </Link>
                            </>
                        )}
                    </div>

                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-primary">
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Doctors</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">Services</a>
                        <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50">About Us</a>

                        {isAuthenticated ? (
                            <button
                                onClick={handleLogout}
                                className="block w-full text-left px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50 rounded-md"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link to="/auth" className="block w-full mt-2 bg-primary text-white px-5 py-2.5 rounded-lg font-medium text-center">
                                Book Appointment
                            </Link>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
