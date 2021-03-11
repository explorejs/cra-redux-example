const initialState = {
  selected: "light",
  lorem: "ipsum",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const newTheme = state.selected === "light" ? "dark" : "light";
      return {
        ...state,
        selected: newTheme,
      };
    }
    default:
      return state;
  }
};

export default themeReducer;
