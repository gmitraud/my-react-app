import { useState, useEffect } from "react";

function Button() {
  const [ bgColor, setBackgroundColor ] = useState("rgb(255, 255, 255)")

  const alterBackground = () => {
    if (bgColor === "rgb(62, 61, 61)") {
      setBackgroundColor("rgb(255, 255, 255)")
    } else {
      setBackgroundColor("rgb(62, 61, 61)");
    }
  }

  useEffect(() => {
    document.documentElement.style.backgroundColor = bgColor
  }, [bgColor])

  return (
    <>
      <button
        onClick = {alterBackground}
      >
        Change BG Color
      </button>
    </>
  );
}

export default Button;
