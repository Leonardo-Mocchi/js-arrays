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

console.log("ESERCIZIO 1");

const reversedTeachers = new Array;

for (let rev = teachers.length - 1; rev >= 0; rev--) {
  const reverse_Teachers = teachers[rev];
  reversedTeachers.push(reverse_Teachers)
  console.log(reverse_Teachers);
}

console.log(reversedTeachers);
console.log(teachers);

console.log();
// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

console.log("ESERCIZIO 2");

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

console.log("ESERCIZIO 3");

console.log(teachers);

const edGo = teachers.indexOf("Ed");
if (edGo > -1) { // only splice array when item is found
  teachers.splice(edGo, 1); // 2nd parameter means remove one item only
}

console.log(teachers);

console.log();
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent

console.log("ESERCIZIO 4");

console.log(teachers);

/* teachers.splice(4, 1);
console.log(teachers); */ //to remove Fabio for a quick check

let isFabioPresent;

if (teachers.includes("Fabio")) {
  isFabioPresent = true;
  console.log("Is Fabio Present? " + isFabioPresent);
} else {
  isFabioPresent = false;
  console.log("Is Fabio Present? " + isFabioPresent);
}

//SECONDO METODO
/* for (let index = 0; index < teachers.length; index++) {
  const teachersList = teachers[index];
  if (teachersList === "Fabio") {
    isFabioPresent = true;
    console.log("Is Fabio Present? " + isFabioPresent);
  } else if (teachersList ===! "Fabio") {
    isFabioPresent = false;
    console.log("Is Fabio Present? " + isFabioPresent);
  }
} */

console.log();
// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

console.log("ESERCIZIO 5")

const teachersString = teachers.toString();
console.log(teachersString);
