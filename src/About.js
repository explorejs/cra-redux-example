import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function About({ stuff }) {
  const themeData = useSelector((reduxState) => reduxState.theme);

  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_THEME",
      payload: {
        stuff: "can send data with an action as payload or other key",
      },
    });
  };

  return (
    <div>
      <p>About</p>
      <p>Current Theme: {themeData.selected}</p>
      <button onClick={handleToggle}>Toggle Theme</button>
    </div>
  );
}
