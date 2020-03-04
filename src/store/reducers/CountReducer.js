const initialState = 0;
function reduce(state = initialState, action) {
  console.log('CountReducer -> reduce', state, action);
  if (action.type === 'INCREMENT') {
    return state + 1;
  }
  return state;
}
export default reduce;