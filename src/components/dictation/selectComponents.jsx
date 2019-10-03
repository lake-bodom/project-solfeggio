import React from "react";
import Select from "../select/Select";

import PropTypes from "prop-types";

const amountOfNotes = [3, 4, 5, 6, 7];

const amountOfNotesOptions = amountOfNotes.map(elem => (
  <option value={elem} key={elem}>
    {elem}
  </option>
));

const SelectAmountOfNotes = ({ value, onChange }) => {
  return (
    <Select onChange={onChange} value={value}>
      {amountOfNotesOptions}
    </Select>
  );
};

SelectAmountOfNotes.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

const modes = [
  { modePlay: false, ru: "Играть" },
  { modePlay: true, ru: "Писать" }
];

const modesOptions = modes.map(elem => (
  <option value={elem.modePlay} key={elem.ru}>
    {elem.ru}
  </option>
));

const SelectModes = ({ value, onChange }) => {
  return (
    <Select onChange={onChange} value={value}>
      {modesOptions}
    </Select>
  );
};

SelectModes.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
};


export { SelectAmountOfNotes, SelectModes };
