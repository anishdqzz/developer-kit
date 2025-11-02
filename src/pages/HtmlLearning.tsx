import React from 'react';
import { useTheme } from '@/components/ThemeProvider'; // Import useTheme

const htmlTags = [
    {
        tagName: "Installation & Setup",
        description: "Learn how to set up an HTML file and run it in your browser.",
        example: `<!-- HTML requires no installation! -->

<!-- 1. Create a file named index.html -->

<!-- 2. Paste this code into the file: -->
<!DOCTYPE html>
<html>
<head>
  <title>My First HTML Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is my first webpage.</p>
</body>
</html>

<!-- 3. Open the index.html file in your web browser to see the result. -->
`
    },
    {
        tagName: "<h1> to <h6>",
        description: "Heading tags are used to define headings in a document. <h1> is the most important heading, while <h6> is the least important.",
        example: "<h1>This is a heading</h1>",
      },
      {
        tagName: "<p>",
        description: "The paragraph tag is used to define a paragraph of text.",
        example: "<p>This is a paragraph.</p>",
      },
      {
        tagName: "<a>",
        description: "The anchor tag is used to create hyperlinks to other web pages or to a certain part of the same page.",
        example: '<a href="https://www.example.com">Visit Example.com</a>',
      },
      {
        tagName: "<img>",
        description: "The image tag is used to embed an image in an HTML page.",
        example: '<img src="image.jpg" alt="An image">',
      },
      {
        tagName: "<ul> and <li>",
        description: "The unordered list tag is used to create a list of items with no specific order. Each item in the list is defined with the <li> tag.",
        example: "<ul>\n  <li>First item</li>\n  <li>Second item</li>\n</ul>",
      },
      {
        tagName: "<ol> and <li>",
        description: "The ordered list tag is used to create a list of items in a specific order. Each item in the list is defined with the <li> tag.",
        example: "<ol>\n  <li>First item</li>\n  <li>Second item</li>\n</ol>",
      },
      {
        tagName: "<div>",
        description: "The div tag is a block-level element that is often used as a container for other HTML elements.",
        example: '<div>\n  <h3>This is a heading in a div</h3>\n  <p>This is a paragraph in a div.</p>\n</div>',
      },
      {
        tagName: "<span>",
        description: "The span tag is an inline container used to mark up a part of a text, or a part of a document.",
        example: '<p>My mother has <span style="color:blue;font-weight:bold">blue</span> eyes.</p>',
      },
      {
        tagName: "<table>",
        description: "The table tag is used to create a table. It contains other elements like <tr>, <th>, and <td>.",
        example: "<table>\n  <tr>\n    <th>Firstname</th>\n    <th>Lastname</th>\n  </tr>\n  <tr>\n    <td>Jill</td>\n    <td>Smith</td>\n  </tr>\n</table>",
      },
      {
        tagName: "<form>",
        description: "The form tag is used to create an HTML form for user input.",
        example: '<form action="/submit-form.php">\n  <label for="fname">First name:</label><br>\n  <input type="text" id="fname" name="fname"><br>\n  <input type="submit" value="Submit">\n</form>',
      },
        {
        tagName: "<strong>",
        description: "The strong tag is used to indicate that its content has strong importance, seriousness, or urgency.",
        example: '<p><strong>Warning:</strong> This is important.</p>',
      },
      {
        tagName: "<em>",
        description: "The em tag is used to define emphasized text.",
        example: '<p>I think I was <em>very</em> clear.</p>',
      },
      {
        tagName: "<br>",
        description: "The br tag inserts a single line break.",
        example: '<p>This is a<br>paragraph with a line break.</p>',
      },
      {
        tagName: "<hr>",
        description: "The hr tag represents a thematic break between paragraph-level elements. It is typically displayed as a horizontal rule.",
        example: '<h1>HTML</h1>\n<p>HTML is a markup language.</p>\n<hr>\n<h1>CSS</h1>\n<p>CSS is a style sheet language.</p>',
      },
        {
        tagName: "<header>",
        description: "The header element represents a container for introductory content or a set of navigational links.",
        example: '<header>\n  <h1>Main Page Title</h1>\n  <p>Posted by John Doe</p>\n</header>',
      },
      {
        tagName: "<footer>",
        description: "The footer element defines a footer for a document or section.",
        example: '<footer>\n  <p>Author: Hege Refsnes</p>\n  <p><a href="mailto:hege@example.com">hege@example.com</a></p>\n</footer>',
      },
      {
        tagName: "<nav>",
        description: "The nav element defines a set of navigation links.",
        example: '<nav>\n  <a href="/html/">HTML</a> |\n  <a href="/css/">CSS</a> |\n  <a href="/js/">JavaScript</a>\n</nav>',
      },
      {
        tagName: "<main>",
        description: "The main element specifies the main content of a document.",
        example: '<main>\n  <h1>Most Popular Browsers</h1>\n  <p>Chrome, Firefox, and Edge are the most used browsers today.</p>\n</main>',
      },
      {
        tagName: "<section>",
        description: "The section element defines a section in a document.",
        example: '<section>\n  <h1>WWF</h1>\n  <p>The World Wide Fund for Nature (WWF) is an international organization...</p>\n</section>',
      },
      {
        tagName: "<article>",
        description: "The article element specifies independent, self-contained content.",
        example: '<article>\n  <h2>Google Chrome</h2>\n  <p>Google Chrome is a web browser developed by Google...</p>\n</article>',
      },
      {
        tagName: "<aside>",
        description: "The aside element defines some content aside from the content it is placed in (like a sidebar).",
        example: '<aside>\n  <h4>Epcot Center</h4>\n  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>\n</aside>',
      },
        {
        tagName: "<input>",
        description: "The input tag is used to create interactive controls for web-based forms to accept data from the user.",
        example: '<input type="text" placeholder="Enter your name">',
      },
      {
        tagName: "<textarea>",
        description: "The textarea tag defines a multi-line plain-text editing control.",
        example: '<textarea rows="4" cols="50">\n  Enter your text here...\n</textarea>',
      },
      {
        tagName: "<button>",
        description: "The button tag represents a clickable button.",
        example: '<button onclick="alert(\'Hello World!\')">Click me</button>',
      },
      {
        tagName: "<label>",
        description: "The label tag represents a caption for an item in a user interface.",
        example: '<label for="username">Username:</label>\n<input type="text" id="username">',
      },
      {
        tagName: "<select>",
        description: "The select tag represents a control that provides a menu of options.",
        example: '<select>\n  <option value="volvo">Volvo</option>\n  <option value="saab">Saab</option>\n</select>',
      },
      {
        tagName: "<blockquote>",
        description: "The blockquote tag indicates that the enclosed text is an extended quotation.",
        example: '<blockquote>\n  <p>For 50 years, WWF has been protecting the future of nature.</p>\n</blockquote>',
      },
      {
        tagName: "<iframe>",
        description: "The iframe tag specifies an inline frame, used to embed another document within the current HTML document.",
        example: '<iframe src="https://www.example.com" height="200" width="300"></iframe>',
      },
      {
        tagName: "<canvas>",
        description: "The canvas tag is used to draw graphics, on the fly, via scripting (usually JavaScript).",
        example: '<canvas id="myCanvas" width="200" height="100" style="border:1px solid #000;"></canvas>',
      },
      {
        tagName: "<video>",
        description: "The video tag is used to embed video content in a document.",
        example: '<video width="320" height="240" controls>\n  <source src="movie.mp4" type="video/mp4">\n</video>',
      },
      {
        tagName: "<audio>",
        description: "The audio tag is used to embed sound content in a document.",
        example: '<audio controls>\n  <source src="horse.ogg" type="audio/ogg">\n</audio>',
      },
      {
        tagName: "<figure>",
        description: "The figure tag specifies self-contained content, like illustrations, diagrams, photos, code listings, etc.",
        example: '<figure>\n  <img src="pic_trulli.jpg" alt="Trulli">\n  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>\n</figure>',
      },
      {
        tagName: "<figcaption>",
        description: "The figcaption tag defines a caption for a <figure> element.",
        example: '<figure>\n  <img src="pic_trulli.jpg" alt="Trulli">\n  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>\n</figure>',
      },
      {
        tagName: "<details>",
        description: "The details tag specifies additional details that the user can open and close on demand.",
        example: '<details>\n  <summary>Epcot Center</summary>\n  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>\n</details>',
      },
      {
        tagName: "<summary>",
        description: "The summary tag defines a visible heading for a <details> element.",
        example: '<details>\n  <summary>Epcot Center</summary>\n  <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international pavilions, award-winning fireworks and seasonal special events.</p>\n</details>',
      },
      {
        tagName: "<dialog>",
        description: "The dialog tag defines a dialog box or subwindow.",
        example: '<dialog open>This is an open dialog window</dialog>',
      },
      {
        tagName: "<address>",
        description: "The address tag defines the contact information for the author/owner of a document or an article.",
        example: '<address>\n  Written by John Doe.<br> \n  Visit us at:<br>\n  Example.com<br>\n  Box 564, Disneyland<br>\n  USA\n</address>',
      },
];

const HtmlLearning = () => {
    const { theme } = useTheme(); // Use the theme from the context

    const isDark = theme === 'dark';

    const cardBgColor = isDark ? '#1a202c' : '#ffffff';
    const cardTextColor = isDark ? '#ffffff' : '#000000';
    const preBgColor = isDark ? '#2d3748' : '#f7fafc';
    const preTextColor = isDark ? '#e2e8f0' : '#2d3748';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center text-primary">
                Learn HTML Elements
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
                Here you can find a comprehensive list of HTML elements to learn from.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {htmlTags.map((tag, index) => (
                    <div key={index} className="rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:-translate-y-1" style={{ backgroundColor: cardBgColor, color: cardTextColor }}>
                        <h2 className="text-2xl font-bold mb-2">{tag.tagName}</h2>
                        <p className="flex-grow">{tag.description}</p>
                        <pre className="p-4 rounded-lg text-sm overflow-x-auto mt-4" style={{ backgroundColor: preBgColor, color: preTextColor }}>
                            <code>{tag.example}</code>
                        </pre>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HtmlLearning;
