import Immutable from 'immutable';
import * as types from '../../actions/types';

const initialState = Immutable.fromJS({
  myTest: false,
});

export default function addReducer(state = initialState, action) {
  switch (action.type) {
    case types.TEST:
      return Immutable.fromJS({
        myTest: action.setFlag,
      });
    default:
      return state;
  }
}
