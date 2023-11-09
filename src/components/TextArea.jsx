import React from "react";

import "../styles/style.css";

const TextArea = (props) => {
  const { name } = props;

  return (
    <>
      <textarea name={name} placeholder="catatan" />
    </>
  );
};

export default TextArea;
