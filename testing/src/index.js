import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Root from './Root'

ReactDOM.render(
    // Root is a functional component that takes child component as prop = <App /> in this case
    // It then returns a Provider component
    // This becomes useful in tests because we don't have to wrap every component in our tests with boilerplate (i.e. Providers, etc)
    <Root>
        <App />
    </Root>,    
    document.querySelector('#root')
);