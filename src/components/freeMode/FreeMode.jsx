import React from "react";

const FreeMode = ({ actionSetMode, actionUpdatePianoKeys }) => {
  actionSetMode({ mode: "Свободный режим", stat: false });
  actionUpdatePianoKeys();
  return <div className="free-mode"></div>;
};

export default FreeMode;
