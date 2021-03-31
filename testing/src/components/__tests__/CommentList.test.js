import React from 'react';
import { mount } from 'enzyme';
import Root from '../../Root';
import CommentList from '../CommentList';

let wrapped;

beforeEach(()=>{
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    )
})


it('has creates one li per comment', () => {
    expect(wrapped.find('li').length).toEqual(2)
})

it('shows the text for each comment', () => {
    // CheerioWrapper -> wrapped.render() returns Cheerio element -> allows jQuery selector for virtual dom
    expect(wrapped.render().text()).toContain('Comment 1')
    expect(wrapped.render().text()).toContain('Comment 2')
})