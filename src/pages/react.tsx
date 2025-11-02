import React from 'react';
import { CheatSheet } from "@/components/Cheatsheet";
import { useTheme } from '@/components/ThemeProvider'; // Import useTheme

const reactCheatsheet = [
    {
        title: "Installation & Setup (React + Vite)",
        code: `# 1. Create a new React project with TypeScript using Vite
npm create vite@latest my-react-app -- --template react-ts

# 2. Navigate into your new project directory
cd my-react-app

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev`
    },
    {
        title: "Folder Structure",
        code: `my-react-app/
├── public/              # Static assets that are not processed by Vite
├── src/                 # Your application's source code
│   ├── assets/          # Images, fonts, etc.
│   ├── App.tsx          # The main component of your application
│   └── main.tsx         # The entry point that renders the App component
├── index.html           # The main HTML file for your app
├── package.json         # Project dependencies and scripts
└── vite.config.ts       # Vite configuration file`
    },
    {
        title: "Class Component",
        code: `class MyComponent extends React.Component {
      render() {
        return <h1>Hello, {this.props.name}</h1>;
      }
    }`,
      },
      {
        title: "Functional Component",
        code: `function MyComponent(props) {
      return <h1>Hello, {props.name}</h1>;
    }`,
      },
      {
        title: "State Management (useState)",
        code: `const [count, setCount] = useState(0);
    
    <button onClick={() => setCount(count + 1)}>
      You clicked {count} times
    </button>`,
      },
      {
        title: "Side Effects (useEffect)",
        code: `useEffect(() => {
      // Side effect code goes here
      document.title = \`You clicked \${count} times\`;
    
      // Optional cleanup function
      return () => {
        // Cleanup code goes here
      };
    }, [count]); // Dependency array`,
      },
      {
        title: "Context (useContext)",
        code: `const MyContext = React.createContext();
    
    function MyProvider({ children }) {
      return (
        <MyContext.Provider value="Hello from Context!">
          {children}
        </MyContext.Provider>
      );
    }
    
    function MyComponent() {
      const value = useContext(MyContext);
      return <div>{value}</div>;
    }`,
      },
      {
        title: "Custom Hook",
        code: `function useWindowWidth() {
      const [width, setWidth] = useState(window.innerWidth);
    
      useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
    
      return width;
    }
    
    function MyComponent() {
      const width = useWindowWidth();
      return <div>Window width is: {width}</div>;
    }`,
      },
      {
        title: "Conditional Rendering",
        code: `function Greeting(props) {
      const isLoggedIn = props.isLoggedIn;
      if (isLoggedIn) {
        return <UserGreeting />;
      }
      return <GuestGreeting />;
    }`,
      },
      {
        title: "List and Keys",
        code: `const numbers = [1, 2, 3, 4, 5];
    const listItems = numbers.map((number) =>
      <li key={number.toString()}>
        {number}
      </li>
    );`,
      },
      {
        title: "Event Handling",
        code: `function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    
      return (
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }`,
      },
      {
        title: "JSX",
        code: `const element = <h1>Hello, world!</h1>;`
      },
      {
        title: "Components and Props",
        code: `function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }
    
    const element = <Welcome name="Sara" />;`
      },
      {
        title: "State and Lifecycle",
        code: `class Clock extends React.Component {
      constructor(props) {
        super(props);
        this.state = {date: new Date()};
      }
    
      componentDidMount() {
        this.timerID = setInterval(
          () => this.tick(),
          1000
        );
      }
    
      componentWillUnmount() {
        clearInterval(this.timerID);
      }
    
      tick() {
        this.setState({
          date: new Date()
        });
      }
    
      render() {
        return (
          <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>
        );
      }
    }`
      },
      {
        title: "Handling Events",
        code: `function ActionLink() {
      function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
      }
    
      return (
        <a href="#" onClick={handleClick}>
          Click me
        </a>
      );
    }`
      },
      {
        title: "Forms",
        code: `class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    }`
      },
      {
        title: "Lifting State Up",
        code: `class Calculator extends React.Component {
      constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {temperature: ''};
      }
    
      handleChange(e) {
        this.setState({temperature: e.target.value});
      }
    
      render() {
        const temperature = this.state.temperature;
        return (
          <fieldset>
            <legend>Enter temperature in Celsius:</legend>
            <input
              value={temperature}
              onChange={this.handleChange} />
            <BoilingVerdict
              celsius={parseFloat(temperature)} />
          </fieldset>
        );
      }
    }`
      },
      {
        title: "Composition vs Inheritance",
        code: `function FancyBorder(props) {
      return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
          {props.children}
        </div>
      );
    }
    
    function WelcomeDialog() {
      return (
        <FancyBorder color="blue">
          <h1 className="Dialog-title">
            Welcome
          </h1>
          <p className="Dialog-message">
            Thank you for visiting our spacecraft!
          </p>
        </FancyBorder>
      );
    }`
      },
      {
        title: "Thinking In React",
        code: `// Step 1: Break The UI Into A Component Hierarchy
    // Step 2: Build A Static Version in React
    // Step 3: Identify The Minimal (but complete) Representation Of UI State
    // Step 4: Identify Where Your State Should Live
    // Step 5: Add Inverse Data Flow`
      },
      {
        title: "useReducer",
        code: `const initialState = {count: 0};
    
    function reducer(state, action) {
      switch (action.type) {
        case 'increment':
          return {count: state.count + 1};
        case 'decrement':
          return {count: state.count - 1};
        default:
          throw new Error();
      }
    }
    
    function Counter() {
      const [state, dispatch] = useReducer(reducer, initialState);
      return (
        <>
          Count: {state.count}
          <button onClick={() => dispatch({type: 'decrement'})}>-</button>
          <button onClick={() => dispatch({type: 'increment'})}>+</button>
        </>
      );
    }`
      },
      {
        title: "useCallback",
        code: `const memoizedCallback = useCallback(
      () => {
        doSomething(a, b);
      },
      [a, b],
    );`
      },
      {
        title: "useMemo",
        code: `const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`
      },
      {
        title: "useRef",
        code: `const inputEl = useRef(null);
    const onButtonClick = () => {
      // \`current\` points to the mounted text input element
      inputEl.current.focus();
    };
    return (
      <>
        <input ref={inputEl} type="text" />
        <button onClick={onButtonClick}>Focus the input</button>
      </>
    );`
      },
      {
        title: "useImperativeHandle",
        code: `function FancyInput(props, ref) {
      const inputRef = useRef();
      useImperativeHandle(ref, () => ({
        focus: () => {
          inputRef.current.focus();
        }
      }));
      return <input ref={inputRef} ... />;
    }
    FancyInput = forwardRef(FancyInput);`
      },
      {
        title: "useLayoutEffect",
        code: `useLayoutEffect(() => {
      // similar to componentDidMount and componentDidUpdate
      return () => {
        // cleanup
      };
    }, [dependency]);`
      },
      {
        title: "useDebugValue",
        code: `useDebugValue(isOnline ? 'Online' : 'Offline');`
      },
      {
        title: "React.memo",
        code: `const MyComponent = React.memo(function MyComponent(props) {
      /* render using props */
    });`
      },
      {
        title: "React.Fragment",
        code: `<React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
    
    // shorthand
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>`
      },
      {
        title: "React.StrictMode",
        code: `<React.StrictMode>
      <App />
    </React.StrictMode>`
      },
      {
        title: "Code-Splitting",
        code: `const OtherComponent = React.lazy(() => import('./OtherComponent'));
    
    function MyComponent() {
      return (
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <OtherComponent />
          </Suspense>
        </div>
      );
    }`
      },
      {
        title: "Error Boundaries",
        code: `class ErrorBoundary extends React.Component {
      constructor(props) {
        super(props);
        this.state = { hasError: false };
      }
    
      static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }
    
      componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        logErrorToMyService(error, errorInfo);
      }
    
      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return <h1>Something went wrong.</h1>;
        }
    
        return this.props.children;
      }
    }
    
    <ErrorBoundary>
      <MyWidget />
    </ErrorBoundary>`
      },
      {
        title: "Forwarding Refs",
        code: `const FancyButton = React.forwardRef((props, ref) => (
      <button ref={ref} className="FancyButton">
        {props.children}
      </button>
    ));
    
    // You can now get a ref directly to the DOM button:
    const ref = React.createRef();
    <FancyButton ref={ref}>Click me!</FancyButton>;`
      },
      {
        title: "Portals",
        code: `ReactDOM.createPortal(child, container)`
      },
      {
        title: "Render Props",
        code: `<DataProvider render={data => (
      <h1>Hello {data.target}</h1>
    )}/>`
      },
      {
        title: "Web Components",
        code: `class Hello extends React.Component {
      render() {
        return <div>Hello, {this.props.name}</div>;
      }
    }
    const-element = document.registerElement('x-hello', {prototype: Hello.prototype});`
      },
      {
        title: "Higher-Order Components",
        code: `function withSubscription(WrappedComponent, selectData) {
      // ...and returns another component...
      return class extends React.Component {
        constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.state = {
            data: selectData(DataSource, props)
          };
        }
    
        componentDidMount() {
          // ... that takes care of the subscription...
          DataSource.addChangeListener(this.handleChange);
        }
    
        componentWillUnmount() {
          DataSource.removeChangeListener(this.handleChange);
        }
    
        handleChange() {
          this.setState({
            data: selectData(DataSource, this.props)
          });
        }
    
        render() {
          // ... and renders the wrapped component with the fresh data!
          // Notice that we pass through any additional props
          return <WrappedComponent data={this.state.data} {...this.props} />;
        }
      };
    }`
      },
    ];
    
    const themes = {
      dark: {
        bgColor: '#1a202c',
        textColor: '#ffffff',
      },
      light: {
        bgColor: '#ffffff',
        textColor: '#000000',
      },
      blueprint: {
        bgColor: '#3c6e71',
        textColor: '#ffffff',
      },
      forest: {
        bgColor: '#283618',
        textColor: '#fefae0',
      },
    };

const ReactCheatsheet = () => {
    const { theme } = useTheme(); // Use the theme from the context

    const isDark = theme === 'dark';

    const cardBgColor = isDark ? '#1a202c' : '#ffffff';
    const cardTextColor = isDark ? '#ffffff' : '#000000';

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-center text-primary">
                React Basic To Advance
            </h1>
            <p className="text-lg text-muted-foreground mb-8 text-center">
                Here’s a complete list of React topics, from fundamental concepts to advanced techniques.
            </p>
            <CheatSheet title="" items={reactCheatsheet} cardBgColor={cardBgColor} cardTextColor={cardTextColor} />
        </div>
    );
};

export default ReactCheatsheet;
