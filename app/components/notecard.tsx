import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface NoteCardProps {
  title: string;
  description: string;
  content: string;
  date: string;
  onClick?: () => void;
  fullscreen?: boolean;
}

export default function NoteCard({
  title,
  description,
  content,
  date,
  onClick,
  fullscreen = false,
}: NoteCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div 
      className={`${
        fullscreen
          ? "flex flex-col h-full overflow-hidden"
          : "h-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      }`}
      onClick={!fullscreen ? onClick : undefined}
    >
      {/* Title */}
      <div className={`bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-4 relative overflow-hidden flex-shrink-0 ${fullscreen ? "border-b border-blue-800" : ""}`}>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white opacity-10 rounded-full -mr-10 -mt-10"></div>
        <h2 className={`${fullscreen ? "text-2xl" : "text-lg"} font-semibold truncate relative z-10`}>{title}</h2>
      </div>

      {/* Description */}
      <div className={`px-5 py-3 border-b border-gray-100 ${fullscreen ? "bg-blue-50" : ""} flex-shrink-0`}>
        <p className="text-gray-700 font-medium">{description}</p>
      </div>

      {/* Content - This is what needs to scroll */}
      <div className={`${fullscreen ? "flex-grow overflow-y-auto" : ""}`}>
        <div className={`${fullscreen ? "px-5 py-4" : "px-4 py-3"}`}>
          <div 
            className={`prose ${fullscreen ? "prose-lg" : "prose-sm"} max-w-none text-gray-600 break-words ${
              !fullscreen && (expanded ? "h-auto max-h-64" : "h-16 overflow-hidden")
            }`}
          >
            <ReactMarkdown 
              rehypePlugins={[rehypeRaw]} 
              remarkPlugins={[remarkGfm]}
            >
              {content}
            </ReactMarkdown>
          </div>
          {!fullscreen && content.length > 100 && !expanded && (
            <div className="h-6 bg-gradient-to-t from-white to-transparent w-full"></div>
          )}
        </div>
      </div>

      {/* Footer with Date and Expand button */}
      <div className={`px-5 py-3 ${fullscreen ? "bg-gray-100 border-t border-gray-200" : "bg-gray-50"} flex items-center justify-between flex-shrink-0`}>
        <span className="text-xs text-gray-500">{date}</span>
        {!fullscreen && content.length > 100 && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }} 
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