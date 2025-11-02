
import React, { useState } from 'react';
import { Copy } from 'lucide-react';

const cdnLinks = [
  {
    name: "Bootstrap",
    links: [
      {
        name: "Bootstrap CSS",
        link: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      },
      {
        name: "Bootstrap JS",
        link: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js",
      },
    ],
  },
  {
    name: "React",
    links: [
      {
        name: "React",
        link: "https://unpkg.com/react@18/umd/react.development.js",
      },
      {
        name: "React DOM",
        link: "https://unpkg.com/react-dom@18/umd/react-dom.development.js",
      },
    ],
  },
  {
    name: "TypeScript",
    links: [
      {
        name: "TypeScript",
        link: "https://cdn.jsdelivr.net/npm/typescript@5.4.5/lib/typescript.js",
      },
    ],
  },
  // Add other CDN link categories and items here as needed.
  // Example:
  {
    name: "jQuery",
    links: [
      {
        name: "jQuery Slim",
        link: "https://code.jquery.com/jquery-3.7.1.slim.min.js",
      },
      {
        name: "jQuery Full",
        link: "https://code.jquery.com/jquery-3.7.1.min.js",
      },
    ],
  },
  {
    name: "Font Awesome",
    links: [
      {
        name: "Font Awesome CSS",
        link: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css",
      },
    ],
  },
];

// Helper function to get contrasting color for better readability (optional)
// This function would need a full implementation if you want to use it for dynamic styling.
// For now, it's a placeholder, and the style prop using it is commented out.
const getContrastingColor = (bgColor: string) => {
  // Simple placeholder logic: determines if text should be black or white based on background lightness
  const r = parseInt(bgColor.substring(1, 3), 16);
  const g = parseInt(bgColor.substring(3, 5), 16);
  const b = parseInt(bgColor.substring(5, 7), 16);
  const y = (r * 299 + g * 587 + b * 114) / 1000;
  return y >= 128 ? '#000000' : '#FFFFFF';
};


const CdnLinks = () => {
  const [copiedLink, setCopiedLink] = useState<string | null>(null);
  const cardBgColor = "#f0f0f0"; // Example default background color for styling purposes

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLink(text);
      setTimeout(() => setCopiedLink(null), 2000); // Reset "Copied!" message after 2 seconds
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center" style={{ color: "#61dafbaa" }}>
        CDN Links
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
      Access a centralized collection of CDN links that you can conveniently copy from one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cdnLinks.map((category) => (
          <div key={category.name} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-4">{category.name}</h2>
            {category.links.map((item) => (
              <div key={item.name} className="mb-4 last:mb-0"> {/* last:mb-0 to remove bottom margin from last item */}
                <p className="font-medium text-gray-700 mb-1">{item.name}</p>
                <div className="relative flex items-center border border-gray-300 rounded-md bg-gray-50">
                  <input
                    type="text"
                    readOnly
                    value={item.link}
                    className="flex-grow p-2 pr-10 text-sm text-gray-800 rounded-l-md bg-transparent focus:outline-none"
                    // If you have a contrasting color function fully implemented, uncomment this:
                    // style={{ backgroundColor: cardBgColor, color: getContrastingColor(cardBgColor) }}
                  />
                  <button
                    onClick={() => handleCopy(item.link)}
                    className="absolute inset-y-0 right-0 px-3 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-r-md transition-colors duration-200"
                    title="Copy to clipboard"
                    aria-label={`Copy ${item.name} link`}
                  >
                    <Copy className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                {copiedLink === item.link && (
                  <p className="text-sm text-green-600 mt-2 animate-fade-in-out">
                    Copied!
                  </p>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CdnLinks;
