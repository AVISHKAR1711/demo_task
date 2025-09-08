import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/pages/index.js
import React from "react";
import Header from "../src/components/Header.jsx"
import HeroBanner from "../src/components/HeroBanner.jsx"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      <main>
        <HeroBanner />
      </main>
      <footer className="text-center text-gray-400 py-8">
        © {new Date().getFullYear()} Tallento.ai — Where AI Meets Ambition
      </footer>
    </div>
  );
}
