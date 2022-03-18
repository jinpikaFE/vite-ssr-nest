import React from 'react';
export { Page };
function Page({ is404 }) {
    if (is404) {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "404 Page Not Found"),
            React.createElement("p", null, "This page could not be found.")));
    }
    else {
        return (React.createElement(React.Fragment, null,
            React.createElement("h1", null, "500 Internal Server Error"),
            React.createElement("p", null, "Something went wrong.")));
    }
}
