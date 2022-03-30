import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import * as ReactDOMClient from 'react-dom/client';

ReactDOM.render(<App/>,document.querySelector("#root"));

// import App from 'App';

// const container = document.getElementById('root');

// // Create *and* render a root with hydration.
// const root = ReactDOMClient.hydrateRoot(container, <App tab="home" />);
// // Unlike with createRoot, you don't need a separate root.render() call here