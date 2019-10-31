export const dataOfIntervals = [
  {
    name: "minorSecond",
    rusName: "Малая Секунда",
    numberOfSemitones: 1,
    chosen: true
  },
  {
    name: "majorSecond",
    rusName: "Большая Секунда",
    numberOfSemitones: 2,
    chosen: true
  },
  {
    name: "minorThird",
    rusName: "Малая Терция",
    numberOfSemitones: 3,
    chosen: true
  },
  {
    name: "majorThird",
    rusName: "Большая Терция",
    numberOfSemitones: 4,
    chosen: true
  },
  {
    name: "perfectFourth",
    rusName: "Чистая Кварта",
    numberOfSemitones: 5,
    chosen: true
  },
  {
    name: "triton",
    rusName: "Тритон",
    numberOfSemitones: 6,
    chosen: true
  },
  {
    name: "perfectFifth",
    rusName: "Чистая Квинта",
    numberOfSemitones: 7,
    chosen: true
  },
  {
    name: "minorSixth",
    rusName: "Малая Секста",
    numberOfSemitones: 8,
    chosen: true
  },
  {
    name: "majorSixth",
    rusName: "Большая Секста",
    numberOfSemitones: 9,
    chosen: true
  },
  {
    name: "minorSeventh",
    rusName: "Малая Септима",
    numberOfSemitones: 10,
    chosen: true
  },
  {
    name: "majorSeventh",
    rusName: "Большая Септима",
    numberOfSemitones: 11,
    chosen: true
  },
  {
    name: "octave",
    rusName: "Октава",
    numberOfSemitones: 12,
    chosen: true
  }
];

export const getChosenIntervals = arr => {
  return arr.filter(elem => {
    return elem.chosen;
  });
};

export const createGroupsOfIntervals = arr => {
  const chunk = 4;
  let i,
    j,
    tmp = [];
  for (i = 0, j = arr.length; i < j; i += chunk) {
    tmp.push(arr.slice(i, i + chunk));
  }
  return tmp;
};

export const getNewInterval = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
};

export const getNewSequenceOfNotes = (sliceArr, activeInterval) => {
  const { numberOfSemitones } = activeInterval;

  const sequence = getBordersOfSequence(sliceArr, numberOfSemitones);

  return sequence;
};

const getBordersOfSequence = (arr, num) => {
  const firstIndex = Math.floor(Math.random() * (arr.length - num));

  let firstNote = arr[firstIndex].key;
  let secondNote = arr[firstIndex + num].key;


  return [firstNote, secondNote];
};
