// components/NoteCard.tsx
import { useState } from 'react';

interface NoteCardProps {
  title: string;
  description: string;
  content: string;
  date: string;
}

export default function NoteCard({
  title,
  description,
  content,
  date,
}: NoteCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="h-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Title */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-4 py-3 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
        <h2 className="text-lg font-semibold truncate relative z-10">{title}</h2>
      </div>

      {/* Description */}
      <div className="px-4 py-3 border-b border-gray-100">
        <p className="text-gray-700 font-medium text-sm">{description}</p>
      </div>

      {/* Content */}
      <div className="px-4 py-3">
        <div 
          className={`text-gray-600 text-sm break-words whitespace-pre-wrap overflow-y-auto transition-all duration-300 ${
            expanded ? "h-auto max-h-64" : "h-16"
          }`}
        >
          {content}
        </div>
        {content.length > 100 && !expanded && (
          <div className="h-6 bg-gradient-to-t from-white to-transparent w-full"></div>
        )}
      </div>

      {/* Footer with Date and Expand button */}
      <div className="px-4 py-3 bg-gray-50 flex items-center justify-between mt-auto">
        <span className="text-xs text-gray-500">{date}</span>
        {content.length > 100 && (
          <button 
            onClick={() => setExpanded(!expanded)} 
            className="text-blue-500 hover:text-blue-700 text-xs font-medium transition-colors flex items-center"
          >
            {expanded ? "Show Less" : "Show More"}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-3 w-3 ml-1 transition-transform ${expanded ? "rotate-180" : ""}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
}