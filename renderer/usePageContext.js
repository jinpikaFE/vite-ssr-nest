// `usePageContext` allows us to access `pageContext` in any React component.
// More infos: https://vite-plugin-ssr.com/pageContext-anywhere
import React, { useContext } from 'react';
export { PageContextProvider };
export { usePageContext };
const Context = React.createContext(undefined);
function PageContextProvider({ pageContext, children }) {
    return React.createElement(Context.Provider, { value: pageContext }, children);
}
function usePageContext() {
    const pageContext = useContext(Context);
    return pageContext;
}
