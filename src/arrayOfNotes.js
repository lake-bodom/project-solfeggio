let baseArrOfNotes = [];

let BASE_NAMES = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];

const BASE_START_NOTE = 21;
const BASE_FINISH_NOTE = 108;

let octaveNumber = 0;

for (let i = 0; i <= BASE_FINISH_NOTE - BASE_START_NOTE; i++) {
  const name = BASE_NAMES[i % BASE_NAMES.length];

  if (name === "C") {
    octaveNumber++;
  }
  baseArrOfNotes.push({
    index: i,
    key: i + BASE_START_NOTE,
    name,
    fullName: name + octaveNumber
  });
}

function getBaseArrayOfNotes(
  start = 0,
  finish = BASE_FINISH_NOTE - BASE_START_NOTE
) {
  return [...baseArrOfNotes].slice(start, finish + 1);
}

function getFullArrayOfNotes(arr) {
  const newArr = [];
  const mapIndex = {};

  for (let i = 0; i < arr.length; i++) {
    const obj = arr[i];
    const nextObj = arr[i + 1];

    let section = [];

    section.push(addNewFields(obj));

    mapIndex[arr[i].key] = {
      i,
      j: 0
    };

    if (nextObj && nextObj.name.includes("#")) {
      section.push(addNewFields(nextObj));
      i++;
      mapIndex[arr[i].key] = {
        i,
        j: 1
      };
    }

    newArr.push(section);
  }

  function addNewFields(obj) {
    return { ...obj, active: false, wrong: false, right: false };
  }

  return newArr;
}

export { getBaseArrayOfNotes, getFullArrayOfNotes };
