import React from "react";

import PropTypes from "prop-types";

const FreeMode = ({ actionSetMode, actionUpdatePianoKeys }) => {
  actionSetMode({ mode: "Свободная игра", stat: false });
  actionUpdatePianoKeys();
  return <div className="free-mode"></div>;
};

FreeMode.propTypes = {
  actionSetMode: PropTypes.func.isRequired,
  actionUpdatePianoKeys: PropTypes.func.isRequired
};

export default FreeMode;
