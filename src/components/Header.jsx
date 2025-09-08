
import React from "react";
import { FiSearch, FiBell, FiChevronDown, FiGrid } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";


export default function Header() {
  return (
    <header className="w-full bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-20">
         
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="rounded-md p-2 gradient-border mr-3">
                {/* small logo box */}
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-indigo-600 to-pink-500 rounded">
                  <span className="font-bold">T</span>
                </div>
              </div>
              <div>
                <div className="text-lg font-semibold leading-none">Tallento.ai</div>
                <div className="text-xs text-gray-400 leading-none">Where AI Meets Ambition</div>
              </div>
            </div>
          </div>

      
          <nav className="hidden md:flex items-center gap-6">
            <button className= "flex items-center gap-2 px-3 py-2 rounded bg-transparent text-white hover:bg-gray-800/60 focus:outline-none transition">
              <FiGrid className="w-5 h-5" />
              <span className="text-sm">Job Category</span>
              <FiChevronDown className="w-4 h-4 text-gray-400" />
            </button>

            <button className="flex items-center gap-2 px-3 py-2 rounded bg-transparent text-white hover:bg-gray-800/60 focus:outline-none transition">
              <FiSearch className="w-5 h-5" />
              <span className="text-sm">Find Jobs</span>
            </button>

            <button className="relative flex items-center gap-2 px-3 py-2 rounded bg-transparent text-white hover:bg-gray-800/60 focus:outline-none transition">
              <FiBell className="w-5 h-5" />
              <span className="sr-only">Notifications</span>
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white bg-pink-500 rounded-full">29</span>
            </button>
          </nav>

        
          <div className="flex items-center gap-4">
         
            <div className="md:hidden">
              <button className="p-2 rounded-md hover:bg-gray-800/60">
                <FiSearch className="w-5 h-5" />
              </button>
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="w-9 h-9 rounded-full ring-2 ring-gray-700"
              />
              <div className="text-sm text-gray-300">Hi, User</div>
            </div>

            <button
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-white font-medium bg-gradient-to-r from-indigo-500 to-pink-500 hover:from-indigo-600 hover:to-pink-600 shadow-md transition"
              aria-label="Post a Job"
            >
              <FaPlus className="w-3.5 h-3.5" />
              + Post a Job
            </button>

            <button className="sm:hidden p-2 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 text-white">
              <FaPlus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-indigo-500/40 via-transparent to-pink-400/25"></div>
    </header>
  );
}
