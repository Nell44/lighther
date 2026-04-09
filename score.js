// Calcul du Score de Sécurité (SS)
// Formule :
// SS = (eclairage×0.35) + (affluence×0.25) + (absenceIncidents×0.30) + (sentiment×0.10)

function calculerSS(eclairage, affluence, absenceIncidents, sentiment) {
  const ss =
    (eclairage * 0.35) +
    (affluence * 0.25) +
    (absenceIncidents * 0.30) +
    (sentiment * 0.10);

  // Arrondi à 1 décimale
  return Math.round(ss * 10) / 10;
}


// Détermination de la couleur et du label
function getCouleur(ss) {
  if (ss >= 7) {
    return { couleur: "#22c55e", label: "Sûre" };
  } else if (ss >= 4) {
    return { couleur: "#f59e0b", label: "Vigilance" };
  } else {
    return { couleur: "#ef4444", label: "À éviter" };
  }
}


// Export des fonctions
export { calculerSS, getCouleur };


// Tests

console.log("Test 1 :", calculerSS(8, 7, 9, 6), getCouleur(calculerSS(8, 7, 9, 6)));
// attendu ≈ score élevé → vert

console.log("Test 2 :", calculerSS(5, 5, 5, 5), getCouleur(calculerSS(5, 5, 5, 5)));
// attendu ≈ score moyen → orange

console.log("Test 3 :", calculerSS(2, 3, 1, 2), getCouleur(calculerSS(2, 3, 1, 2)));
// attendu ≈ score faible → rouge
