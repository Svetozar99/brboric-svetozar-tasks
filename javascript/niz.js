const niz = ["x:1", "y:2", "x:3", "a:15"];

const grupisani = {};

niz.forEach((element) => {
  const [kljuc, vrijednost] = element.split(":");
  // provjera da li vec postoji kljuc i ako postoji povecamo mu vrijednost 
  if (grupisani[kljuc]) {
    grupisani[kljuc] += parseInt(vrijednost);
  } else {
    grupisani[kljuc] = parseInt(vrijednost);
  }
});

// Sortiramo ključeve
const sortiraniKljucevi = Object.keys(grupisani).sort();

// pravimo odgovarajuci format
const rezultat = sortiraniKljucevi.map((kljuc) => `${kljuc}=${grupisani[kljuc]}`);

// Konvertujemo niz u jedan string sa separatorom ", "
const rezultatString = rezultat.join(", ");

// Logujte rezultat u konzolu
console.log(rezultatString);
