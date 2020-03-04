const initialState = { results: [{ id: 1, text: 'abc' }, { id: 2, text: 'def' }] };
function reduce(state = initialState, action) {
  console.log('ApiReducer -> reduce', state, action);
  switch (action.type) {
    case 'SEARCHCOMPLETE':
      console.log('search complete');
      return { isSearching: false };
    case 'SEARCHSTARTED':
      console.log('search started');
      return { isSearching: true }
  }
  return { isSearching: false };
}
export default reduce;