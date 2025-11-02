import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

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
  {
    name: "Vue.js",
    links: [
      {
        name: "Vue.js",
        link: "https://cdn.jsdelivr.net/npm/vue@3.4.27/dist/vue.global.min.js",
      },
    ],
  },
  {
    name: "AngularJS",
    links: [
      {
        name: "AngularJS",
        link: "https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js",
      },
    ],
  },
  {
    name: "Lodash",
    links: [
      {
        name: "Lodash",
        link: "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js",
      },
    ],
  },
  {
    name: "Moment.js",
    links: [
      {
        name: "Moment.js",
        link: "https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.30.1/moment.min.js",
      },
    ],
  },
  {
    name: "GSAP",
    links: [
      {
        name: "GSAP",
        link: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js",
      },
    ],
  },
    {
    name: "Tailwind CSS",
    links: [
      {
        name: "Tailwind CSS",
        link: "https://cdn.tailwindcss.com",
      },
    ],
  },
];

const CdnLinks = () => {
  const { theme } = useTheme();
  const [copiedLink, setCopiedLink] = useState<string | null>(null);

  const isDark = theme === 'dark';

  const cardBgColor = isDark ? '#1a202c' : '#ffffff';
  const cardTextColor = isDark ? '#ffffff' : '#000000';
  const inputBgColor = isDark ? '#2d3748' : '#f7fafc';
  const inputTextColor = isDark ? '#e2e8f0' : '#2d3748';
  const copyButtonBgColor = isDark ? '#4a5568' : '#e2e8f0';
  const copyButtonHoverBgColor = isDark ? '#718096' : '#edf2f7';
  const copyIconColor = isDark ? '#cbd5e0' : '#4a5568';

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedLink(text);
      setTimeout(() => setCopiedLink(null), 2000);
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-primary">
        CDN Links
      </h1>
      <p className="text-lg text-muted-foreground mb-8 text-center">
        Access a centralized collection of CDN links that you can conveniently copy from one place.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cdnLinks.map((category) => (
          <div key={category.name} className="rounded-lg shadow-md p-4" style={{ backgroundColor: cardBgColor }}>
            <h2 className="text-xl font-semibold mb-4" style={{ color: cardTextColor }}>{category.name}</h2>
            {category.links.map((item) => (
              <div key={item.name} className="mb-4 last:mb-0">
                <p className="font-medium mb-1" style={{ color: cardTextColor }}>{item.name}</p>
                <div className="relative flex items-center border rounded-md" style={{ borderColor: isDark ? '#4a5568' : '#d1d5db' }}>
                  <input
                    type="text"
                    readOnly
                    value={item.link}
                    className="flex-grow p-2 pr-10 text-sm rounded-l-md focus:outline-none"
                    style={{ backgroundColor: inputBgColor, color: inputTextColor }}
                  />
                  <button
                    onClick={() => handleCopy(item.link)}
                    className="absolute inset-y-0 right-0 px-3 flex items-center justify-center rounded-r-md transition-colors duration-200"
                    style={{ backgroundColor: copyButtonBgColor }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = copyButtonHoverBgColor}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = copyButtonBgColor}
                    title="Copy to clipboard"
                    aria-label={`Copy ${item.name} link`}
                  >
                    <Copy className="h-5 w-5" style={{ color: copyIconColor }} />
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
