function berechnen() {
  const objektart = document.getElementById("objektart").value;
  const qm = Number(document.getElementById("qm").value);
  const leistung = Number(document.getElementById("reinigungsart").value);
  const reinigungsartText = document.getElementById("reinigungsart").selectedOptions[0].text;
  const verschmutzung = Number(document.getElementById("verschmutzung").value);
  const verschmutzungText = document.getElementById("verschmutzung").selectedOptions[0].text;
  const mitarbeiter = Number(document.getElementById("mitarbeiter").value);
  const stundenlohn = Number(document.getElementById("stundenlohn").value);
  const materialProQm = Number(document.getElementById("materialProQm").value);
  const km = Number(document.getElementById("km").value);
  const fahrtkostenProKm = Number(document.getElementById("fahrtkostenProKm").value);
  const marge = Number(document.getElementById("marge").value);

  const arbeitsstundenGesamt = (qm / leistung) * verschmutzung;
  const dauerMitTeam = arbeitsstundenGesamt / mitarbeiter;

  const arbeitskosten = arbeitsstundenGesamt * stundenlohn;
  const materialkosten = qm * materialProQm;
  const fahrtkosten = km * 2 * fahrtkostenProKm;

  const gesamtkosten = arbeitskosten + materialkosten + fahrtkosten;
  const gewinn = gesamtkosten * (marge / 100);
  const angebotspreis = gesamtkosten + gewinn;

  document.getElementById("ergebnis").textContent =
    "Angebotspreis: " + angebotspreis.toFixed(2) + " €";

  document.getElementById("details").innerHTML =
    "Objektart: " + objektart + "<br>" +
    "Reinigungsart: " + reinigungsartText + "<br>" +
    "Fläche: " + qm + " qm<br>" +
    "Verschmutzungsgrad: " + verschmutzungText + "<br><br>" +
    "Gesamte Arbeitsstunden: " + arbeitsstundenGesamt.toFixed(2) + " Std.<br>" +
    "Dauer mit Team: " + dauerMitTeam.toFixed(2) + " Std.<br><br>" +
    "Arbeitskosten: " + arbeitskosten.toFixed(2) + " €<br>" +
    "Materialkosten: " + materialkosten.toFixed(2) + " €<br>" +
    "Fahrtkosten: " + fahrtkosten.toFixed(2) + " €<br>" +
    "Gesamtkosten: " + gesamtkosten.toFixed(2) + " €<br>" +
    "Gewinn: " + gewinn.toFixed(2) + " €<br>" +
    "<strong>Angebotspreis: " + angebotspreis.toFixed(2) + " €</strong>";
}
