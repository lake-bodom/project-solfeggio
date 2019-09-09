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

let mapIndex = {};

function getFullArrayOfNotes(arr) {
  mapIndex = {};
  const newArr = [];

  for (let k = 0; k < arr.length; k++) {
    const obj = arr[k];
    const nextObj = arr[k + 1];
    let i = newArr.length;
    let section = [];

    section.push(addNewFields(obj));

    mapIndex[arr[k].key] = {
      i,
      j: 0
    };

    if (nextObj && nextObj.name.includes("#")) {
      section.push(addNewFields(nextObj));
      k++;
      mapIndex[arr[k].key] = {
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

const getMapIndex = () => {
  return { ...mapIndex };
};

export { getBaseArrayOfNotes, getFullArrayOfNotes, getMapIndex };
