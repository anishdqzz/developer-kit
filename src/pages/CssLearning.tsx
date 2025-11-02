import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/ThemeProvider'; // Import useTheme

const cssProperties = [
    {
        tagName: "color",
        description: "Sets the color of the text. You can use color names, hexadecimal values, RGB values, etc.",
        example: "p { color: red; }",
        html: "<p>This text is red.</p>"
    },
    {
        tagName: "background-color",
        description: "Sets the background color of an element.",
        example: "div { background-color: #f0f0f0; }",
        html: "<div style='padding:1rem; border: 1px solid black;'>This div has a light gray background.</div>"
    },
    {
        tagName: "background-image",
        description: "Sets one or more background images for an element.",
        example: "div { background-image: linear-gradient(to right, red, yellow); }",
        html: "<div style='padding:1rem; border: 1px solid black; height: 50px;'></div>"
    },
    {
        tagName: "background-repeat",
        description: "Sets if/how a background image will be repeated.",
        example: "div { background-image: url('https://via.placeholder.com/50'); background-repeat: repeat-x; }",
        html: "<div style='padding:1rem; border: 1px solid black; height: 60px;'></div>"
    },
    {
        tagName: "background-position",
        description: "Sets the starting position of a background image.",
        example: "div { background-image: url('https://via.placeholder.com/50'); background-repeat: no-repeat; background-position: center; }",
        html: "<div style='padding:1rem; border: 1px solid black; height: 60px;'></div>"
    },
    {
        tagName: "background-size",
        description: "Specifies the size of the background images.",
        example: "div { background-image: url('https://via.placeholder.com/150'); background-size: cover; background-repeat: no-repeat; }",
        html: "<div style='padding:1rem; border: 1px solid black; height: 100px; width: 100px;'></div>"
    },
    {
        tagName: "font-size",
        description: "Sets the size of the font.",
        example: "p { font-size: 24px; }",
        html: "<p>This text is larger.</p>"
    },
    {
        tagName: "font-family",
        description: "Specifies the font for an element. List multiple fonts for fallback.",
        example: "p { font-family: 'Courier New', monospace; }",
        html: "<p>This text is in Courier New.</p>"
    },
    {
        tagName: "font-weight",
        description: "Sets how thick or thin characters in text should be displayed.",
        example: "p { font-weight: bold; }",
        html: "<p>This text is bold.</p>"
    },
    {
        tagName: "font-style",
        description: "Sets the style of the font, such as italic.",
        example: "p { font-style: italic; }",
        html: "<p>This text is italic.</p>"
    },
    {
        tagName: "text-decoration",
        description: "Adds decoration to text like underline, overline, etc.",
        example: "p { text-decoration: underline; }",
        html: "<p>This text is underlined.</p>"
    },
    {
        tagName: "text-align",
        description: "Aligns the inline content of a block element.",
        example: "p { text-align: center; }",
        html: "<p>This text is centered.</p>"
    },
    {
        tagName: "line-height",
        description: "Specifies the height of a line of text.",
        example: "p { line-height: 1.6; }",
        html: "<p>This paragraph has increased line height for better readability.</p>"
    },
    {
        tagName: "letter-spacing",
        description: "Increases or decreases the space between characters.",
        example: "h1 { letter-spacing: 2px; }",
        html: "<h1>Wide Letters</h1>"
    },
    {
        tagName: "word-spacing",
        description: "Increases or decreases the white space between words.",
        example: "p { word-spacing: 10px; }",
        html: "<p>Wide word spacing.</p>"
    },
    {
        tagName: "text-transform",
        description: "Specifies how to capitalize an element's text.",
        example: "p { text-transform: uppercase; }",
        html: "<p>This text is uppercase.</p>"
    },
    {
        tagName: "text-indent",
        description: "Specifies the indentation of the first line in a text-block.",
        example: "p { text-indent: 50px; }",
        html: "<p>The first line of this paragraph is indented by 50 pixels. This is useful for long blocks of text.</p>"
    },
    {
        tagName: "white-space",
        description: "Specifies how white-space inside an element is handled.",
        example: "pre { white-space: pre-wrap; }",
        html: "<pre>This text respects    white space.</pre>"
    },
    {
        tagName: "margin",
        description: "Sets the margin space on all four sides of an element.",
        example: "div { margin: 20px; background: lightblue; }",
        html: "<div style='border: 1px solid black;'><div style='height: 20px;'>The outer div has a margin.</div></div>"
    },
    {
        tagName: "padding",
        description: "Sets the padding space on all four sides of an element.",
        example: "div { padding: 20px; background: lightgreen; }",
        html: "<div style='border: 1px solid black;'><div style='height: 20px;'>This div has padding.</div></div>"
    },
    {
        tagName: "border",
        description: "A shorthand for border-width, border-style, and border-color.",
        example: "div { border: 2px solid blue; }",
        html: "<div style='padding: 10px;'>This div has a blue border.</div>"
    },
    {
        tagName: "border-radius",
        description: "Rounds the corners of an element's outer border edge.",
        example: "div { border-radius: 8px; border: 1px solid black; }",
        html: "<div style='padding: 10px;'>This div has rounded corners.</div>"
    },
    {
        tagName: "width",
        description: "Sets the width of an element.",
        example: "div { width: 50%; background: lightgray; }",
        html: "<div style='border: 1px solid black; height: 20px;'></div>"
    },
    {
        tagName: "height",
        description: "Sets the height of an element.",
        example: "div { height: 100px; background: lightgray; }",
        html: "<div style='border: 1px solid black;'></div>"
    },
    {
        tagName: "box-shadow",
        description: "Attaches one or more shadows to an element.",
        example: "div { box-shadow: 10px 5px 5px #888888; }",
        html: "<div style='padding: 10px; border: 1px solid #ccc;'>This div has a shadow.</div>"
    },
    {
        tagName: "text-shadow",
        description: "Adds shadow to text.",
        example: "h1 { text-shadow: 2px 2px #ff0000; }",
        html: "<h1>This heading has a shadow.</h1>"
    },
    {
        tagName: "display",
        description: "Specifies the display behavior of an element (e.g., block, inline, flex).",
        example: "span { display: block; }",
        html: "<span>This is a span.</span><span>It is now a block-level element.</span>"
    },
    {
        tagName: "position",
        description: "Specifies the type of positioning method used for an element (static, relative, absolute, fixed, or sticky).",
        example: "div.relative { position: relative; left: 20px; border: 1px solid red; }",
        html: "<div class='relative'>This div is positioned relative to its normal position.</div>"
    },
    {
        tagName: "position: absolute",
        description: "Positioned relative to the nearest positioned ancestor.",
        example: "div.relative { position: relative; height: 100px; border: 1px solid blue; }\ndiv.absolute { position: absolute; top: 10px; right: 10px; width: 50px; height: 50px; border: 1px solid green; }",
        html: "<div class='relative'>I am a relative container.<div class='absolute'>I am absolute.</div></div>"
    },
    {
        tagName: "position: fixed",
        description: "Positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled.",
        example: "div.fixed { position: fixed; bottom: 10px; right: 10px; padding: 5px; background: #eee; border: 1px solid #ccc; }",
        html: "<div class='fixed'>I am fixed.</div>"
    },
    {
        tagName: "z-index",
        description: "Specifies the stack order of an element. An element with greater stack order is always in front of an element with a lower stack order.",
        example: ".container { position: relative; }\n.black-box { position: relative; z-index: 1; border: 2px solid black; height: 100px; margin: 30px; }\n.gray-box { position: absolute; z-index: 3; background: lightgray; height: 60px; width: 70%; left: 50px; top: 50px; }\n.green-box { position: absolute; z-index: 2; background: lightgreen; width: 35%; left: 270px; top: -15px; height: 100px; }",
        html: "<div class='container'><div class='black-box'>Black Box (z-index: 1)</div><div class='gray-box'>Gray Box (z-index: 3)</div><div class='green-box'>Green Box (z-index: 2)</div></div>"
    },
    {
        tagName: "overflow",
        description: "Specifies what happens if content overflows an element's box.",
        example: "div { overflow: scroll; width: 100px; height: 100px; border: 1px solid black; }",
        html: "<div>This is some long text that will overflow its container, and therefore, a scrollbar is added.</div>"
    },
    {
        tagName: "float",
        description: "Specifies whether an element should float to the left, right, or not at all.",
        example: "img { float: right; margin: 0 0 1em 1em; }",
        html: "<p><img src='https://via.placeholder.com/50' alt='placeholder'>This text wraps around the floated image.</p>"
    },
        {
        tagName: "clear",
        description: "Specifies what should happen with the element that is next to a floating element.",
        example: "div { float: left; border: 1px solid black; }\np { clear: left; }",
        html: "<div>Floated div</div><p>This paragraph clears the float.</p>"
    },
    {
        tagName: "flexbox",
        description: "A layout model for creating complex layouts easily and efficiently.",
        example: ".container { display: flex; justify-content: space-around; background-color: #f0f0f0; padding: 10px; }\n.item { background-color: #ddd; padding: 10px; }",
        html: "<div class='container'><div class='item'>Item 1</div><div class='item'>Item 2</div><div class='item'>Item 3</div></div>"
    },
    {
        tagName: "justify-content",
        description: "Aligns flex items along the main axis of the flex container.",
        example: ".container { display: flex; justify-content: flex-end; }",
        html: "<div class='container' style='border:1px solid black;'><div style='padding:5px; background:lightblue;'>1</div><div style='padding:5px; background:lightgreen;'>2</div></div>"
    },
    {
        tagName: "align-items",
        description: "Aligns flex items along the cross axis of the flex container.",
        example: ".container { display: flex; align-items: center; height: 100px; }",
        html: "<div class='container' style='border:1px solid black;'><div style='padding:5px; background:lightblue;'>1</div><div style='padding:5px; background:lightgreen; font-size: 24px;'>2</div></div>"
    },
    {
        tagName: "grid",
        description: "A two-dimensional layout system for creating grid-based layouts.",
        example: ".wrapper { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }\n.box { background-color: #ddd; padding: 20px; }",
        html: "<div class='wrapper'><div class='box'>1</div><div class='box'>2</div><div class='box'>3</div><div class='box'>4</div><div class='box'>5</div><div class='box'>6</div></div>"
    },
    {
        tagName: "grid-template-columns",
        description: "Specifies the number and size of columns in a grid layout.",
        example: ".grid-container { display: grid; grid-template-columns: auto auto auto; }",
        html: "<div class='grid-container' style='border:1px solid black;'><div style='padding:5px; background:lightblue;'>1</div><div style='padding:5px; background:lightgreen;'>2</div><div style='padding:5px; background:lightcoral;'>3</div></div>"
    },
    {
        tagName: "transform",
        description: "Lets you modify the coordinate space of the CSS visual formatting model. (rotate, scale, skew, translate)",
        example: "div { transform: rotate(20deg); }",
        html: "<div style='padding: 10px; border: 1px solid black; display: inline-block;'>Rotated</div>"
    },
    {
        tagName: "transform: scale()",
        description: "Scales an element up or down in size.",
        example: "div:hover { transform: scale(1.2); }",
        html: "<div style='padding: 10px; border: 1px solid black; display: inline-block; transition: transform 0.3s;'>Hover me</div>"
    },
    {
        tagName: "transition",
        description: "Allows you to control the animation speed when changing CSS properties.",
        example: "div { width: 100px; height: 100px; background: blue; transition: width 2s; }\ndiv:hover { width: 300px; }",
        html: "<div>Hover over me to see the transition.</div>"
    },
    {
        tagName: "animation",
        description: "A shorthand property for setting all the animation properties.",
        example: "@keyframes example { from {background-color: red;} to {background-color: yellow;} }\ndiv { width:100px; height:100px; background-color:red; animation-name: example; animation-duration: 4s; }",
        html: "<div></div>"
    },
    {
        tagName: "opacity",
        description: "Sets the opacity level for an element (0.0 to 1.0).",
        example: "img { opacity: 0.5; }",
        html: "<img src='https://via.placeholder.com/150' alt='placeholder'>"
    },
    {
        tagName: "cursor",
        description: "Specifies the mouse cursor to be displayed when pointing over an element.",
        example: "button { cursor: pointer; }",
        html: "<button>I am a pointer</button>"
    },
    {
        tagName: "box-sizing",
        description: "Changes how the total width and height of an element is calculated.",
        example: "div { box-sizing: border-box; width: 100px; padding: 10px; border: 5px solid black; }",
        html: "<div style='background: lightblue'>Total width is 100px</div>"
    },
    {
        tagName: "filter",
        description: "Applies graphical effects like blur or color shifting to an element.",
        example: "img { filter: blur(5px); }",
        html: "<img src='https://via.placeholder.com/150' alt='placeholder'>"
    },
    {
        tagName: "object-fit",
        description: "Specifies how an <img> or <video> should be resized to fit its container.",
        example: "img { width: 150px; height: 100px; object-fit: cover; border: 1px solid black; }",
        html: "<img src='https://via.placeholder.com/300' alt='placeholder'>"
    },
    {
        tagName: ":hover (pseudo-class)",
        description: "Selects elements when the user mouses over them.",
        example: "button:hover { background-color: lightgreen; }",
        html: "<button>Hover over me!</button>"
    },
    {
        tagName: "::before (pseudo-element)",
        description: "Creates a pseudo-element that is the first child of the selected element.",
        example: "p::before { content: \"Read this: \"; color: green; }",
        html: "<p>This is the main content.</p>"
    },
    {
        tagName: "::after (pseudo-element)",
        description: "Creates a pseudo-element that is the last child of the selected element.",
        example: "p::after { content: \" (end)\"; color: red; }",
        html: "<p>This is the main content.</p>"
    },
    {
        tagName: "CSS Variables",
        description: "User-defined variables that hold specific values to be reused throughout a document.",
        example: ":root { --main-bg-color: coral; }\n#div1 { background-color: var(--main-bg-color); }",
        html: "<div id='div1' style='padding:1rem;'>This div uses a CSS variable for its background color.</div>"
    }
];

const CssLearning = () => {
    const { theme } = useTheme(); // Use the theme from the context
    const [runningExample, setRunningExample] = useState(null);

    const isDark = theme === 'dark';

    const cardBgColor = isDark ? '#1a202c' : '#ffffff';
    const cardTextColor = isDark ? '#ffffff' : '#000000';
    const preBgColor = isDark ? '#2d3748' : '#f7fafc';
    const preTextColor = isDark ? '#e2e8f0' : '#2d3748';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center text-primary">
                Learn CSS Properties
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
                Here you can find a comprehensive list of CSS properties to learn from.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cssProperties.map((tag, index) => (
                    <div key={index} className="rounded-lg shadow-lg p-6 flex flex-col transition-transform transform hover:-translate-y-1" style={{ backgroundColor: cardBgColor, color: cardTextColor, borderColor: cardTextColor }}>
                        <h2 className="text-2xl font-bold mb-2">{tag.tagName}</h2>
                        <p className="flex-grow">{tag.description}</p>
                        <pre className="p-4 rounded-lg text-sm overflow-x-auto mt-4" style={{ backgroundColor: preBgColor, color: preTextColor }}>
                            <code>{tag.example}</code>
                        </pre>
                        <Button onClick={() => setRunningExample(runningExample === index ? null : index)} className="mt-4 w-full">
                            {runningExample === index ? 'Close' : 'Run'}
                        </Button>
                        {runningExample === index && (
                            <div className="mt-4">
                                <h4 className="text-lg font-semibold mb-2">Output</h4>
                                <div id={`css-output-${index}`} className="p-4 rounded bg-white text-black border border-gray-300">
                                    <style>
                                        {tag.example.split('\n').map(rule => {
                                            const separatorIndex = rule.indexOf('{');
                                            if (separatorIndex !== -1) {
                                                const selectors = rule.substring(0, separatorIndex).trim();
                                                const style = rule.substring(separatorIndex);
                                                const newSelectors = selectors.split(',').map(s => `#css-output-${index} ${s.trim()}`).join(', ');
                                                return `${newSelectors} ${style}`;
                                            }
                                            return rule;
                                        }).join('\n')}
                                    </style>
                                    <div dangerouslySetInnerHTML={{ __html: tag.html }} />
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CssLearning;
