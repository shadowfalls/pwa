import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

// Check that service workers are supported
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js');
    });
}
