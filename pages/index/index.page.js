import React from 'react';
import { Counter } from './Counter';
export { Page };
function Page() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Welcome"),
        "This page is:",
        React.createElement("ul", null,
            React.createElement("li", null, "Rendered to HTML."),
            React.createElement("li", null,
                "Interactive. ",
                React.createElement(Counter, null)))));
}
