export function onClick() {
  return {
    type: "INCREMENT"
  };
}

export function onCallApi(text) {
  return (dispatch) => {
    dispatch({ type: "SEARCHSTARTED", text: text });

    setTimeout(() => {
      dispatch({ type: "SEARCHCOMPLETE", text: text });

    }, 1000);


  }
}