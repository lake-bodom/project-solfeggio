import React from "react";

const amountOfNotes = [3, 4, 5, 6, 7];

const amountOfNotesOptions = amountOfNotes.map(elem => (
  <option value={elem} key={elem}>
    {elem}
  </option>
));

const SelectAmountOfNotes = ({ value, onChange }) => {
  return (
    <select onChange={onChange} defaultValue={value}>
      {amountOfNotesOptions}
    </select>
  );
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
    <select onChange={onChange} defaultValue={value}>
      {modesOptions}
    </select>
  );
};

export { SelectAmountOfNotes, SelectModes };
