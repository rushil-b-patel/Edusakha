import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-black py-6 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <h1 className="text-white text-2xl font-semibold">Edusakha</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to='/HomePage'
                className="text-lg text-gray-300 hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link to='/Event'
                className="text-lg text-gray-300 hover:text-white transition duration-300"
              >
                Events
              </Link>
            </li>
            <li>
                <Link to='LoginForm'>
                <button className='text-lg bg-red-200 rounded-full px-4'>
                    Login
                </button>
                {/* <img
                  src="profile-icon.png"
                  alt="Profile"
                  className="w-6 h-6 ml-4 mr-0 text-gray-300 hover:text-white transition duration-300"
                /> */}
                </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;