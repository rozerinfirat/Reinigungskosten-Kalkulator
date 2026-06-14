function berechnen() {
  const stunden = Number(document.getElementById("stunden").value);
  const stundenlohn = Number(document.getElementById("stundenlohn").value);
  const material = Number(document.getElementById("material").value);
  const marge = Number(document.getElementById("marge").value);

  const kosten = stunden * stundenlohn + material;
  const angebot = kosten * (1 + marge / 100);

  document.getElementById("ergebnis").textContent =
    "Angebotspreis: " + angebot.toFixed(2) + " €";
}
