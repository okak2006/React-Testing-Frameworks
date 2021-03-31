import React from 'react';
import { mount } from 'enzyme';
import CommentBox from '../CommentBox';
import Root from '../../Root'

// console.log(wrapped.find("textarea").length);

let wrapped;
beforeEach(() => {
    wrapped = mount(
    <Root>
        <CommentBox />
    </Root>
    );
});

it('has a text area and a button', () => {
    // mount for full dom render
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

// describe groups together tests with similarities that are not necessarily required in other tests
// this allows us to set up another beforeEach or afterEach for operations that are common just for these tets
describe('the text area', ()=> {

    beforeEach(() => {
        // Simulate change event. make sure to use hmtl event name, not react onChange. 
        // Also provide fake event object (i.e. so event handler knows what to do with event.target.value)
        wrapped.find('textarea').simulate('change', {
            target: { value: 'new comment'}
        });

        // Component automatically rerenders when setState is called so we want to mimic that behavior by forcing update
        // without this we won't get expected behavior because setState is actually asynchronous
        wrapped.update();
    });

    it('has a text area that users can type in', ()=>{
        // Retrieve prop value and make sure the correct value was passed (this.state.comment in this case)
        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('has a text area that gets emptied on submit', ()=>{
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });
})

// clean up - when using mount for full dom render, make sure to clean up so it doesn't pollute other tests
afterEach(()=>{
    wrapped.unmount();
})