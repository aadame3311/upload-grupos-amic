import React, { useState, useEffect } from 'react';
import {
  DEFAULT_TEXT_COLOR,
  DESELECTED_BACKGROUND_COLOR,
  SELECTED_BACKGROUND_COLOR,
  SELECTED_TEXT_COLOR,
} from './constants';
export default function Pill({ title, selectedIndex, index, onClick }) {
  const [bgColor, setBgColor] = useState(DESELECTED_BACKGROUND_COLOR);
  const [textColor, setTextColor] = useState(DEFAULT_TEXT_COLOR);
  const styles = {};

  useEffect(() => {
    if (selectedIndex !== index) {
      setTextColor(DEFAULT_TEXT_COLOR);
      setBgColor(DESELECTED_BACKGROUND_COLOR);
      return;
    }

    setTextColor(SELECTED_TEXT_COLOR);
    setBgColor(SELECTED_BACKGROUND_COLOR);
  }, [selectedIndex]);

  return (
    <>
      <div
        className={`${bgColor} ${textColor} hover:cursor-pointer p-3 rounded-full m-3 text-center`}
        style={{ ...styles }}
        onClick={() => onClick()}
        onMouseEnter={() => {
          setTextColor(SELECTED_TEXT_COLOR);
          setBgColor(SELECTED_BACKGROUND_COLOR);
        }}
        onMouseLeave={() => {
          if (selectedIndex === index) {
            return;
          }

          setTextColor(DEFAULT_TEXT_COLOR);
          setBgColor(DESELECTED_BACKGROUND_COLOR);
        }}
      >
        {title}
      </div>
    </>
  );
}

