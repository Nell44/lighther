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
