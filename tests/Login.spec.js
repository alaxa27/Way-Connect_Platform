import React from 'react';
import { render, mount, shallow } from 'enzyme';
import { Login } from "../src/views/Pages/Login/Login";
import { Redirect } from "react-router-dom";

/*
* The tests below are checking if Login page is rendered correctly,
* containing all necessary fields
*
* */
it('Renders Login component with form', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find("#login-form").length).toBe(1);
});

it('Renders username input', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find("input[name='username']").length).toBe(1);
});

it('Renders password input', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find("input[name='password']").length).toBe(1);
});

it('Renders remember me input', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find("input[type='checkbox']").length).toBe(1);
});

it('Renders Login button', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find(".btn-app-login").length).toBe(1);
});

it('Renders Register link', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#link-register').length).toBe(1);
});

it('Renders Forgot Password link', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#link-forgot-password').length).toBe(1);
});

it('Renders Go Back link', () => {
    const wrapper = shallow(<Login/>);
    expect(wrapper.find('#link-go-back').length).toBe(1);
});


/*
* The tests below are checking Login component's logic
*
* */

describe('Username input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<Login />);
        wrapper.find("input[name='username']").simulate('change', {target: {name: 'username', value: 'example@example.com'}});
        expect(wrapper.state('username')).toEqual('example@example.com');
    })
});

describe('Password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<Login />);
        wrapper.find("input[name='password']").simulate('change', {target: {name: 'password', value: 'secret'}});
        expect(wrapper.state('password')).toEqual('secret');
    })
});

describe('Remember Me input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
        const wrapper = shallow(<Login />);
        wrapper.find("input[type='checkbox']").simulate('change', {target: {name: 'remember', value: true}});
        expect(wrapper.state('remember')).toEqual(true);
    })
});

it('Renders error message if error property is passed', () => {
    const wrapper = shallow(<Login error={{error: "Something went wrong"}} />);
    expect(wrapper.find('.alert-danger').length).toBe(1);
});

it('Renders loader if data is being fetched', () => {
    const wrapper = shallow(<Login fetching={true} />);
    expect(wrapper.find('.loader').length).toBe(1);
});

it('Redirects if user is authenticated', () => {
    const wrapper = shallow(<Login isAuthenticated={true} location={{state: null}} />);
    expect(wrapper.find(Redirect).length).toBe(1);
});

it('Redirects if JWT is in storage', () => {
    const wrapper = shallow(<Login location={{state: null}} />);
    wrapper.setState({
        redirect: true
    });
    expect(wrapper.find(Redirect).length).toBe(1);
});

it('Redirects to previously visited page', () => {
    const wrapper = shallow(
        <Login
            isAuthenticated={true}
            location={{
                state: {
                    from: {
                        pathname: '/campaigns'
                    }
                }
            }}
        />);
    expect(wrapper.find(Redirect).props().to).toBe('/campaigns');
});

it('Redirects to dashboard if user did not visit any pages yet', () => {
    const wrapper = shallow(<Login isAuthenticated={true} location={{state: null}} />);
    expect(wrapper.find(Redirect).props().to).toBe('/dashboard');
});

it('Dispatches login action on form submit', () => {
    const login = jest.fn();
    const wrapper = mount(<Login login={login} />);
    wrapper.find('.btn-app-login')
        .simulate('submit');
    expect(login).toHaveBeenCalled();
});