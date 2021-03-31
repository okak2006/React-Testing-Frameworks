import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from '../Root';
import App from '../components/App';

beforeEach(()=>{
    // When we run tests, we are doing so using "fake" browser to simulate events
    // Axios does not work in these "fake" browser environment we are mimicking
    // moxios intercepts axios requests so we don't get errors due to requests - it tricks axios into thinking it got a response
    moxios.install();
    // Provide specific url of interest
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        // simulate mock response
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
})

it('can fetch a list of comments and display them', (done)=>{
    // Render entire app
    const wrapped = mount(<Root>
        <App/>
    </Root>)
    // find and simulate fetch comments button click
    wrapped.find('.fetch-comments').simulate('click') 
    // Introduce pause to get back results from moxios
    moxios.wait(()=>{
        wrapped.update();
        // expect to find a list of comments
        expect(wrapped.find('li').length).toEqual(2);
        // by default Jest completes once they reach end of their execution
        // that means it will think the test passed when it finished executing the wait function
        // the expection will run sometime in teh future when the test has already been marked as passed
        // this done function tells jest to wait until the done callback is called before finishing test
        done();
        wrapped.unmount();
    })
})

afterEach(()=>{
    moxios.uninstall();
})