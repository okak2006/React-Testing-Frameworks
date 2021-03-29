import React from 'react';
// import ReactDOM from 'react-dom';
import App from '../App';
import { shallow } from 'enzyme';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

// Enzyme
// Static - render the given component and return plain HTML. No interaction
// Shallow - render just the given component and none of its children.
// Full DOM - render the component and all of its children + let us modify it afterwards

let wrapped;
// jest code reuser
beforeEach(() => {
    wrapped = shallow(<App />);
});


// naming convention: it applies to file name, in this case App
// each test should not assume knowledge of internal workings of other components
it('shows a comment box', () => {
    // JEST - create virtual div
    // const div = document.createElement('div');
    
    // note on jest: when we execute jest it runs in our command line environment
    // However, react expects to be executed in browser => JSDOM simulates how browser behaves but in terminal
    // document.create div makes 'fake' div in mem
    // ReactDOM.render(<App/>, div);


    expect(wrapped.find(CommentBox).length).toEqual(1);
    
    // JEST cleanup
    // ReactDOM.unmountComponentAtNode(div);
});

it('shows a comment list', ()=> {
    expect(wrapped.find(CommentList).length).toEqual(1);
});