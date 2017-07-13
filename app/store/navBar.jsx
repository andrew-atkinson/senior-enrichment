// ACTION TYPES

const CHANGE_NAV_VIEW = 'CHANGE_NAV_VIEW';

// ACTION CREATORS

export function changeNavView(name) {
  return { type: CHANGE_NAV_VIEW, name };
}


// THUNK CREATORS



// REDUCER
export default function reducer(state = 'campus', action) {

  switch (action.type) {

    case CHANGE_NAV_VIEW:
      return action.navView;

    default:
      return state;
  }
}
