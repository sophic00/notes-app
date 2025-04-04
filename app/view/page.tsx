"use client";
import React, { useEffect, useState } from "react";
import NoteCard from '@/app/components/notecard';

export default function View() {
  const [notes, setNotes] = useState<
    { title: string; description: string; content: string; date: string }[]
  >([]);
  const [expandedNote, setExpandedNote] = useState<
    { title: string; description: string; content: string; date: string } | null
  >(null);

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

        {expandedNote ? (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex items-center justify-center p-4 overflow-hidden">
            <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full h-[90vh] flex flex-col relative">
              <button 
                onClick={() => setExpandedNote(null)}
                className="absolute top-3 right-3 z-50 bg-white rounded-full p-1 shadow-md hover:bg-gray-100"
                aria-label="Close note"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <NoteCard
                title={expandedNote.title}
                description={expandedNote.description}
                content={expandedNote.content}
                date={expandedNote.date}
                fullscreen={true}
              />
            </div>
          </div>
        ) : notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {notes.map((note, index) => (
              <div key={index} className="h-full">
                <NoteCard
                  title={note.title}
                  description={note.description}
                  content={note.content}
                  date={note.date}
                  onClick={() => setExpandedNote(note)} // Expand the clicked note
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