import reducer from '../../src/reducers/login';
import * as types from '../../src/constants/ActionTypes';

describe('Login reducer', () => {
  it('Should return the initial state', () => {
    expect(reducer(undefined, [])).toEqual(
      {
        fetching: false,
        isLoggedOut: false,
        isAuthenticated: false,
        error: null
      }
    );
  });

  it('Should handle LOGIN', () => {
    expect(
      reducer([], {
        type: types.LOGIN,
      })
    ).toEqual(
      {
        fetching: true,
        isAuthenticated: false,
        error: null
      }
    );
  });

  it('Should handle LOGIN_FULFILLED', () => {
    expect(
      reducer([], {
        type: types.LOGIN_FULFILLED,
      })
    ).toEqual(
      {
        fetching: false,
        isAuthenticated: true,
        error: null
      }
    );
  });

  it('Should handle LOGIN_REJECTED', () => {
    expect(
      reducer([], {
        type: types.LOGIN_REJECTED,
      })
    ).toEqual(
      {
        fetching: false,
        isAuthenticated: false,
        error: undefined
      }
    );
  });
})