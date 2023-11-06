// Primo esercizio (Termometro):

function termometro (temperature) 
if (temperature >= 30) {
  return "Caldo";
} else if (temperature < 30 && temperature >= 16) {
  return "Mite";
} else if (temperature < 16) {
  return "Freddo";
} else if (temperature < 0) {
  return "gelo";
} else {
  return "Valore non corretto";
}
console.log(termometro(18)); //


// Secondo esercizio (profilo personale):

const Gabriele_Cavaliere = {
  name: "Gabriele",
  surname: "Cavaliere",
  nickname: "GabeLogan"
  age: 32,
  height: 183 + "cm",
  dateOfBirth: 01/07/1991,
  job: "Software Enginer",
  nationality: "Italian"
  city: "Palermo",
  eyecolor: ["Blue", "Gren", "Grey"],
  haircolor: "Red",


  ageStatus: function ageRange (age) {
    if (age >= 0 && age < 1) {
      return "Neonato";
    } else if (age >= 1 && age < 11) {
      return "Bambino";
    } else if (age >= 11 && age < 18) {
      return "Adolescente";
    } else if (age >= 18) {
      return "Adulto";
    } else {
      return "Parametro non corretto";
    }
  },
};

console.log(Gabriele_Cavaliere.ageStatus(32)); //