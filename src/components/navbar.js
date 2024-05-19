import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 flex justify-center items-center">
      <ul className="flex space-x-4">
        <li>
          <Link to="/memory-card" className="text-white hover:text-gray-400">
            Memory Card
          </Link>
        </li>
        <li>
          <Link to="/connect-four" className="text-white hover:text-gray-400">
            Connect Four
          </Link>
        </li>
        <li>
          <Link to="/tower-stacking" className="text-white hover:text-gray-400">
            Tower Stacking
          </Link>
        </li>
        <li>
          <Link to="/whack-a-mole" className="text-white hover:text-gray-400">
            Whack-a-Mole
          </Link>
        </li>
        <li>
          <Link to="/catch-the-sticks" className="text-white hover:text-gray-400">
            Catch the Sticks
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
