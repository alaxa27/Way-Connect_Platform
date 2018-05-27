import React from 'react';
import { render, mount, shallow } from 'enzyme';
import { Register } from "../../src/views/Pages/Register/Register";
import { Redirect } from "react-router-dom";

describe('Register', () => {
    it('Renders with form', () => {
        const wrapper = shallow(<Register/>);
        expect(wrapper.find("#register-form").length).toBe(1);
    });

    it('Renders first name input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='firstName']").length).toBe(1);
    });

    it('Renders last name input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='lastName']").length).toBe(1);
    });

    it('Renders username input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='username']").length).toBe(1);
    });

    it('Renders email input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='email']").length).toBe(1);
    });

    it('Renders password input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='password']").length).toBe(1);
    });

    it('Renders password confirmation input', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("input[name='passwordConfirmation']").length).toBe(1);
    });

    it('Renders register button', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find(".btn-app-login").length).toBe(1);
    });

    it('Renders login link', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find("#link-login").length).toBe(1);
    });

    it('Renders Go Back link', () => {
        const wrapper = shallow(<Register />);
        expect(wrapper.find('#link-go-back').length).toBe(1);
    });

    it('Should respond to first name change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='firstName']").simulate('change', {target: {name: 'firstName', value: 'firstName'}});
        expect(wrapper.state('firstName')).toEqual('firstName');
    });

    it('Should respond to last name change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='lastName']").simulate('change', {target: {name: 'lastName', value: 'lastName'}});
        expect(wrapper.state('lastName')).toEqual('lastName');
    });

    it('Should respond to username change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='username']").simulate('change', {target: {name: 'username', value: 'username'}});
        expect(wrapper.state('username')).toEqual('username');
    });

    it('Should respond to email change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='email']").simulate('change', {target: {name: 'email', value: 'email'}});
        expect(wrapper.state('email')).toEqual('email');
    });

    it('Should respond to password change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='password']").simulate('change', {target: {name: 'password', value: 'password'}});
        expect(wrapper.state('password')).toEqual('password');
    });

    it('Should respond to password confirmation change and change the state of the Register Component', () => {
        const wrapper = shallow(<Register />);
        wrapper.find("input[name='passwordConfirmation']").simulate('change', {target: {name: 'passwordConfirmation', value: 'passwordConfirmation'}});
        expect(wrapper.state('passwordConfirmation')).toEqual('passwordConfirmation');
    });

    it('Should display error message if first name is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.firstName-error').length).toBe(1);
    });

    it('Should display error message if last name is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.lastName-error').length).toBe(1);
    });

    it('Should display error message if username is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.username-error').length).toBe(1);
    });

    it('Should display error message if email is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.email-error').length).toBe(1);
    });

    it('Should display error message if email is malformed', () => {
        const wrapper = mount(<Register />);
        wrapper.find("input[name='email']").simulate('change', { target: { value: 'malformedEmail' } });
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.email-error').length).toBe(1);
    });

    it('Should display error message if password is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.password-error').length).toBe(1);
    });

    it('Should display validation message if password has insufficient length', () => {
        const wrapper = mount(<Register />);
        wrapper.find("input[name='password']").simulate('change', { target: { value: '1' } });
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.validation-message').length).toBe(1);
    });

    it('Should display error message if password confirmation is empty', () => {
        const wrapper = mount(<Register />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.passwordConfirmation-error').length).toBe(1);
    });

    it('Should display error message if password confirmation does not match password', () => {
        const wrapper = mount(<Register />);
        wrapper.find("input[name='password']").simulate('change', { target: { value: '12345678' } });
        wrapper.find("input[name='passwordConfirmation']").simulate('change', { target: { value: '---12345678---' } });
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(wrapper.find('.passwordConfirmation-error').length).toBe(1);
    });

    it('Should fire register function if validation passes', () => {
        const register = jest.fn();
        const wrapper = mount(<Register register={register} />);

        wrapper.find("input[name='firstName']").simulate('change', { target: { value: 'firstName' } });
        wrapper.find("input[name='lastName']").simulate('change', { target: { value: 'lastName' } });
        wrapper.find("input[name='username']").simulate('change', { target: { value: 'username' } });
        wrapper.find("input[name='email']").simulate('change', { target: { value: 'example@example.com' } });
        wrapper.find("input[name='password']").simulate('change', { target: { value: '12345678' } });
        wrapper.find("input[name='passwordConfirmation']").simulate('change', { target: { value: '12345678' } });

        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(register).toHaveBeenCalled();
    });

    it('Should not fire register function if validation fails', () => {
        const register = jest.fn();
        const wrapper = mount(<Register register={register} />);
        wrapper.find('.btn-app-login')
            .simulate('submit');
        expect(register).not.toHaveBeenCalled();
    });

    it('Renders error message if error property is passed', () => {
        const wrapper = shallow(<Register error={{error: "Something went wrong"}} />);
        expect(wrapper.find('.alert-danger').length).toBe(1);
    });

    it('Renders loader if data is being fetched', () => {
        const wrapper = shallow(<Register fetching={true} />);
        expect(wrapper.find('.loader').length).toBe(1);
    });

    it('Redirects to dashboard if user was successfully registered', () => {
        const wrapper = shallow(<Register success={true} />);
        expect(wrapper.find(Redirect).props().to).toBe('/dashboard');
    });
});