import React from 'react';
import { render, mount, shallow } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/actions/loginActions';
import * as types from '../../src/constants/ActionTypes';
import moxios from 'moxios';
import { axiosInstance } from '../../src/constants/ApiConfig';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Login Actions', () => {
    beforeEach(function () {
        moxios.install(axiosInstance);
    });
      
    afterEach(function () {
        moxios.uninstall(axiosInstance);
    });
      
    it("Dispatches LOGIN and LOGIN_FULFILLED when user login API response is 200", () => {
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.respondWith({
            status: 200,
            response: {
              token: "secret:terces"
            },
          });
        });
        const expectedActions = [
          {
            type: types.LOGIN,
          },
          {
            type: types.LOGIN_FULFILLED
          }
        ];
        const store = mockStore({});
        return store.dispatch(actions.login({})).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });

    it("Dispatches LOGIN and LOGIN_REJECTED when user login API throws error", () => {
        const error = {
            message: "Something went wrong"
        };
        moxios.wait(() => {
          const request = moxios.requests.mostRecent();
          request.reject(error)
        });
        const expectedActions = [
          {
            type: types.LOGIN,
          },
          {
            type: types.LOGIN_REJECTED,
            payload: {
                message: "Something went wrong"
            }
          }
        ];
        const store = mockStore({});
        return store.dispatch(actions.login({})).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
        });
    });
});