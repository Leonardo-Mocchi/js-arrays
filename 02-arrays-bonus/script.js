const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE
console.log(teachers);

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

console.log("EXERCISE 1");

for (let rev = teachers.length - 1; rev >= 0; rev--) {
  const reversedTeachers = teachers[rev];
  console.log(reversedTeachers);
  /* const banana = [reversedTeachers];
  console.log(reversedTeachers);
  console.log(banana); */
}

console.log(teachers);

console.log();
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

console.log("EXERCISE 2");

for (let i = 0; i < teachers.length; i++) {
  const teachersNames = teachers[i];
  let LongNames;
  if (teachersNames.length >= 5) {
    LongNames = teachersNames;
    console.log(LongNames);
  }
}

console.log();
// 3. Rimuovi 'Ed' dall'array teachers

console.log("EXERCISE 3");

console.log(teachers);

const edGo = teachers.indexOf("Ed");
if (edGo > -1) { // only splice array when item is found
  teachers.splice(edGo, 1); // 2nd parameter means remove one item only
}

console.log(teachers);

console.log();
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

console.log("EXERCISE 4");

console.log(teachers);

/* teachers.splice(4, 1);
console.log(teachers); */ //to remove Fabio for a quick check

let isFabioPresent;


if (teachers.includes("Fabio")) {
  isFabioPresent = true;
  console.log(isFabioPresent);
} else {
  isFabioPresent = false;
  console.log(isFabioPresent);
}

//buggy, displays 2 undefined values
/* for (let index = 0; index < teachers.length; index++) {
  const teachersList = teachers[index];
  if (teachersList === "Fabio") {
    isFabioPresent = true;
    console.log(isFabioPresent);
  } else if (teachersList ===! "Fabio") {
    isFabioPresent = false;
    console.log(isFabioPresent);
  }
  console.log(isFabioPresent);
} */
//buggy, displays 2 undefined values

console.log();
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

console.log("EXERCISE 5")

const teachersString = teachers.toString();
console.log(teachersString);
