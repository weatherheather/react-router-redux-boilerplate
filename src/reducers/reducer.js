const initialState = {
  number: 1,
};

export default function update(state = initialState, action) {
  switch (action.type) {
    case 'INCREASE':
      return Object.assign({}, state, {
        number: state.number + action.amount,
      });
    case 'DECREASE':
      return Object.assign({}, state, {
        number: state.number - action.amount,
      });
    default:
      return state;
  }
}
