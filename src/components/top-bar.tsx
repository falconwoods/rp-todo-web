import React from 'react';

const TopBar: React.FC = () => {
  return (
    <header className="bg-blue-600 py-4">
      <div className="mx-auto px-4 w-full">
        <nav className="flex items-center justify-between">
          <div className="text-white font-bold">To Do</div>
          <ul className="flex space-x-4">
            <li>
              <a href="#" className="text-white">Login</a>
            </li>
            <li>
              <a href="#" className="text-white">Logout</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TopBar;
