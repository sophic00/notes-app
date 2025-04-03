"use client";
import React, { useEffect, useState } from "react";
import NoteCard from '@/app/components/notecard';

export default function View() {
  const [notes, setNotes] = useState<
    { title: string; description: string; content: string; date: string }[]
  >([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem("notes");

    if (storedNotes) {
      // Parse the notes if available
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            <span className="text-blue-600">My</span> Notes
          </h1>
          <p className="text-center text-gray-600 mt-2">
            {notes.length > 0 
              ? `You have ${notes.length} note${notes.length > 1 ? 's' : ''}`
              : 'Create your first note to get started'}
          </p>
        </div>

        {notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <div key={index} className="h-full">
                <NoteCard
                  title={note.title}
                  description={note.description}
                  content={note.content}
                  date={note.date}
                />
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            <p className="text-xl text-gray-600 mb-4">No notes found</p>
            <a 
              href="/create" 
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded font-medium hover:bg-blue-700 transition-colors"
            >
              Create a new note
            </a>
          </div>
        )}
      </div>
    </div>
  );
}