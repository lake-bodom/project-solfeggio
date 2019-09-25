let baseArrOfNotes = [];

const BASE_NAMES = [
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

const NAMES_OF_OCTAVES = {
  0: "Субконтроктава",
  1: "Контроктава",
  2: "Большая октава",
  3: "Малая октава",
  4: "Первая октава",
  5: "Вторая октава",
  6: "Третья октава",
  7: "Четвертая октава",
  8: "Пятая октава"
};

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
    fullName: name + octaveNumber,
    octaveName: NAMES_OF_OCTAVES[octaveNumber]
  });
}

function getBaseArrayOfNotes(
  start = 0,
  finish = BASE_FINISH_NOTE - BASE_START_NOTE
) {
  return [...baseArrOfNotes].slice(start, finish + 1);
}

function getFullArrayAndMapIndexes(arr) {
  const mapIndex = {};

  const arrOfNotes = [];

  for (let k = 0; k < arr.length; k++) {
    const obj = arr[k];
    const nextObj = arr[k + 1];
    let i = arrOfNotes.length;
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

    arrOfNotes.push(section);
  }

  return { mapIndex, arrOfNotes };
}

function addNewFields(obj) {
  return { ...obj, active: false, wrong: false, right: false };
}

const getIndexes = ({ key, mapIndex }) => {
  const indexesOfNote = mapIndex[key];
  const i = indexesOfNote.i;
  const j = indexesOfNote.j;
  return { i, j };
};

window.getIndexes = getIndexes;

const setVisualEffect = ({ arrOfNotes, sequence, type, active, mapIndex }) => {
  let arr = [...arrOfNotes];

  sequence.forEach(element => {
    const { i, j } = getIndexes({ key: element, mapIndex });
    if (active) {
      arr[i][j][type] = true;
    } else {
      if (!type) {
        arr[i][j].right = false;
        arr[i][j].wrong = false;
      } else {
        arr[i][j][type] = false;
      }
    }
  });

  return arr;
};

export {
  getBaseArrayOfNotes,
  getFullArrayAndMapIndexes,
  getIndexes,
  setVisualEffect
};
