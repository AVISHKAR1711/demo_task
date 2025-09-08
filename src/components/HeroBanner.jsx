
import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsBuilding, BsPeople, BsBag } from "react-icons/bs";


export default function HeroBanner() {
  return (
    <section className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
         
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
              Find Your Dream Job Now
            </h1>
            <p className="mt-4 text-gray-300 max-w-xl">
              Discover curated roles from top companies that match your skills and ambitions. Let AI help you get there faster.
            </p>

            
            <div className="mt-6 bg-gray-800/60 rounded-xl p-4 shadow-md">
              <div className="flex flex-col sm:flex-row gap-3 items-stretch">
                
                <div className="min-w-[160px]">
                  <label className="sr-only">Category</label>
                  <div className="relative">
                    <select className="w-full bg-gray-700 text-sm rounded-md py-3 px-3 pr-8 focus:outline-none">
                      <option>All Categories</option>
                      <option>Development</option>
                      <option>Design</option>
                      <option>Teaching</option>
                    </select>
                  </div>
                </div>

              
                <div className="flex-1">
                  <label className="sr-only">Search jobs</label>
                  <div className="relative">
                    <input
                      className="w-full bg-gray-700 text-sm rounded-md py-3 px-4 pr-10 placeholder-gray-300 focus:outline-none"
                      placeholder="Search by keywords, title, or company"
                      type="text"
                    />
                    <FiSearch className="absolute right-3 top-3 text-gray-400 w-5 h-5" />
                  </div>
                </div>

                
                <div className="sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center gap-2 px-4 py-3 rounded-md bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold">
                    Find Jobs
                  </button>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                {["Social Science Teacher","Math Faculty","Frontend Developer","UX Designer"].map((t) => (
                  <button key={t} className="text-xs py-1 px-2 rounded bg-gray-700/50 hover:bg-gray-700 transition">
                    {t}
                  </button>
                ))}
              </div>
            </div>

           
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Feature
                icon={<BsBag className="w-6 h-6" />}
                title="Curated Roles"
                desc="Handpicked jobs matching your objectives."
              />
              <Feature
                icon={<BsBuilding className="w-6 h-6" />}
                title="Top Companies"
                desc="Opportunities from verified employers."
              />
              <Feature
                icon={<BsPeople className="w-6 h-6" />}
                title="Career Support"
                desc="Guidance and tips to land interviews."
              />
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <StatCard number="12,540" label="Jobs Available" />
              <StatCard number="3,200" label="Companies Hiring" />
              <StatCard number="45,120" label="Candidates" />
            </div>

            <div className="mt-6 bg-gradient-to-br from-gray-800/60 to-gray-700/40 rounded-xl p-6">
              <h3 className="text-lg font-semibold">Why Tallento.ai?</h3>
              <p className="mt-3 text-gray-300">
                We combine AI-driven matching with curated career guidance to help you find roles faster — and prepare you to land them.
              </p>
            </div>

       
            <div className="hidden lg:block bg-gradient-to-tr from-indigo-600/20 to-pink-500/10 rounded-xl h-44 flex items-center justify-center text-gray-300">
              <div className="text-center">
                <div className="text-2xl">🎯</div>
                <div className="mt-2">Illustration/Promotion Area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Feature({ icon, title, desc }) {
  return (
    <div className="flex gap-3 items-start p-3 rounded-md bg-gray-800/50">
      <div className="p-2 rounded bg-gray-700/50">
        {icon}
      </div>
      <div>
        <div className="font-medium">{title}</div>
        <div className="text-sm text-gray-300">{desc}</div>
      </div>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-700 rounded-lg p-4 text-center">
      <div className="text-2xl font-bold">{number}</div>
      <div className="text-sm text-gray-300">{label}</div>
    </div>
  );
}
