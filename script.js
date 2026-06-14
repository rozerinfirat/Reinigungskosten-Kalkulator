function berechnen() {
  const qm = Number(document.getElementById("qm").value);
  const leistung = Number(document.getElementById("leistung").value);
  const verschmutzung = Number(document.getElementById("verschmutzung").value);
  const stundenlohn = Number(document.getElementById("stundenlohn").value);
  const material = Number(document.getElementById("material").value);
  const marge = Number(document.getElementById("marge").value);

  const stunden = (qm / leistung) * verschmutzung;
  const arbeitskosten = stunden * stundenlohn;
  const kosten = arbeitskosten + material;
  const angebot = kosten * (1 + marge / 100);

  document.getElementById("ergebnis").textContent =
    "Angebotspreis: " + angebot.toFixed(2) + " €";

  document.getElementById("details").textContent =
    "Geschätzte Arbeitszeit: " + stunden.toFixed(2) +
    " Stunden | Arbeitskosten: " + arbeitskosten.toFixed(2) + " €";
}
