import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { HiHomeModern } from "react-icons/hi2";

export const Header = () => {

    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Adjust this threshold as needed
        };
        handleResize(); // Check initial size
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set('searchTerm', searchTerm);
        const searchQuery = urlParams.toString();
        navigate(`/search?${searchQuery}`);
    };

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const searchTermFromUrl = urlParams.get('searchTerm');
        if (searchTermFromUrl) {
            setSearchTerm(searchTermFromUrl);
        }
    }, [location.search]);

    return (
        <header className='bg-slate-200 shadow-md'>
            <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
                <Link to='/'>
                    <h1 className='font-bold text-xl sm:text-2xl flex flex-wrap'>
                        <span className='flex m-1 text-blue-400 items-center'><HiHomeModern /></span>
                        <span className='text-slate-500'>Apna</span>
                        <span className='text-slate-700'>asiyana</span>
                        <span className='text-red-600'>.com</span>                    
                    </h1>
                </Link>
                <form
                    onSubmit={handleSubmit}
                    className='bg-slate-100 p-3 rounded-lg flex items-center'
                >
                    <input
                    type='text'
                    placeholder={isMobile ? 'City' : 'Search Your City...'}
                    className={`bg-transparent focus:outline-none w-24 sm:w-64 ${isMobile ? 'text-sm' : ''}`}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />

                    <button>
                        <FaSearch className='text-slate-600' />
                    </button>
                </form>
                <ul className='flex gap-8 font-semibold text-sm sm:text-xl'>
                    {isMobile ? (
                        <Link to='/profile'>
                            {currentUser ? (
                                <img
                                    className='rounded-full h-8 w-8 object-cover '
                                    src={currentUser.avatar}
                                    alt='profile'
                                />
                            ) : (
                                <li className='text-slate-700 hover:underline'> Sign in</li>
                            )}
                        </Link>
                    ) : (
                        <>
                            <Link to='/'>
                                <li className='text-slate-700 hover:underline'>Home</li>
                            </Link>

                            <Link to='/about'>
                                <li className='text-slate-700 hover:underline'>About</li>
                            </Link>

                            <Link to='/contact-us'>
                                <li className='text-slate-700 hover:underline'>Contact us</li>
                            </Link>

                            <Link to='/profile'>
                                {currentUser ? (
                                    <img
                                        className='rounded-full h-8 w-8 object-cover '
                                        src={currentUser.avatar}
                                        alt='profile'
                                    />
                                ) : (
                                    <li className='text-slate-700 hover:underline'> Sign in</li>
                                )}
                            </Link>
                        </>
                    )}
                </ul>
            </div>
        </header>
    )
}
