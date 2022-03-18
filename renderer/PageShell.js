import React from 'react';
import logo from './logo.svg';
import { PageContextProvider } from './usePageContext';
import './PageShell.css';
import { Link } from './Link';
export { PageShell };
function PageShell({ children, pageContext }) {
    return (React.createElement(React.StrictMode, null,
        React.createElement(PageContextProvider, { pageContext: pageContext },
            React.createElement(Layout, null,
                React.createElement(Sidebar, null,
                    React.createElement(Logo, null),
                    React.createElement(Link, { className: "navitem", href: "/" }, "Home"),
                    React.createElement(Link, { className: "navitem", href: "/about" }, "About"),
                    React.createElement(Link, { className: "navitem", href: "/test/test2" }, "test"),
                    React.createElement(Link, { className: "navitem", href: "/test" }, "test")),
                React.createElement(Content, null, children)))));
}
function Layout({ children }) {
    return (React.createElement("div", { style: {
            display: 'flex',
            maxWidth: 900,
            margin: 'auto',
        } }, children));
}
function Sidebar({ children }) {
    return (React.createElement("div", { style: {
            padding: 20,
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            lineHeight: '1.8em',
        } }, children));
}
function Content({ children }) {
    return (React.createElement("div", { style: {
            padding: 20,
            paddingBottom: 50,
            borderLeft: '2px solid #eee',
            minHeight: '100vh',
        } }, children));
}
function Logo() {
    return (React.createElement("div", { style: {
            marginTop: 20,
            marginBottom: 10,
        } },
        React.createElement("a", { href: "/" },
            React.createElement("img", { src: logo, height: 64, width: 64, alt: "logo" }))));
}
