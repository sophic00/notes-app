"use client";
import React from "react";
import notes from "../../public/notes.png";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left content area */}
          <div className="w-full md:w-1/2 space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 tracking-tight">
              <span className="text-blue-600">Notes</span> App
            </h1>
            
            <div className="space-y-6">
              <p className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
                <span className="relative inline-block mb-2">
                  Create and manage notes
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-yellow-300 -z-10"></span>
                </span>
                <br />
                <span className="relative inline-block mb-2">
                  with ease and simplicity
                  <span className="absolute -bottom-1 left-0 w-full h-2 bg-pink-200 -z-10"></span>
                </span>
              </p>
              
              <p className="text-xl text-gray-600">
                Keep all your thoughts, ideas, and plans organized in one secure place.
                Access them anytime, anywhere.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/create"
                  className="inline-block bg-blue-600 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all text-center"
                >
                  Create New Notes
                </Link>
                <Link
                  href="/view"
                  className="inline-block bg-white text-blue-600 border border-blue-600 py-3 px-6 rounded-lg font-medium hover:bg-blue-50 transition-all text-center"
                >
                  View Notes
                </Link>
              </div>
            </div>
          </div>
          
          {/* Right image area */}
          <div className="w-full md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <Image 
                src={notes} 
                alt="Notes Illustration" 
                className="relative w-full h-auto rounded-lg shadow-md"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}