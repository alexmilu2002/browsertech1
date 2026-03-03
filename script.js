// document.querySelector("input").setAttribute("required", "");


let identificatienummerc1 = document.getElementById("choice1");
let identificatienummerc2 = document.getElementById("choice2");
let identificatienummerc3 = document.getElementById("choice3");

let bsn = document.getElementById("bsn_field");
let becon = document.getElementById("becon_field");
let notary = document.getElementById("notary_field");

identificatienummerc1.onclick = function() {
    bsn.style.display = "block";
    becon.style.display = "none";
    notary.style.display = "none";
};

identificatienummerc2.onclick = function() {
    bsn.style.display = "none";
    becon.style.display = "block";
    notary.style.display = "none";
};

identificatienummerc3.onclick = function() {
    bsn.style.display = "none";
    becon.style.display = "none";
    notary.style.display = "block";
};

let nlyes = document.getElementById("representative_is_established_in_netherlands_yes");
let nlno  = document.getElementById("representative_is_established_in_netherlands_no");

let nl = document.getElementById("nl_fields");
let foreign = document.getElementById("foreign_fields");

nlyes.onclick = function () {
  nl.style.display = "block";
  foreign.style.display = "none";
};

nlno.onclick = function () {
  nl.style.display = "none";
  foreign.style.display = "block";
};



const countries = [
  { code: "AFG", name: "Afghanistan" },
  { code: "ALA", name: "Åland" },
  { code: "ALB", name: "Albanië" },
  { code: "DZA", name: "Algerije" },
  { code: "VIR", name: "Amerikaanse Maagdeneilanden" },
  { code: "ASM", name: "Amerikaans-Samoa" },
  { code: "AND", name: "Andorra" },
  { code: "AGO", name: "Angola" },
  { code: "AIA", name: "Anguilla" },
  { code: "ATA", name: "Antarctica" },
  { code: "ATG", name: "Antigua en Barbuda" },
  { code: "ARG", name: "Argentinië" },
  { code: "ARM", name: "Armenië" },
  { code: "ABW", name: "Aruba" },
  { code: "AUS", name: "Australië" },
  { code: "AZE", name: "Azerbeidzjan" },
  { code: "BHS", name: "Bahama’s" },
  { code: "BHR", name: "Bahrein" },
  { code: "BGD", name: "Bangladesh" },
  { code: "BRB", name: "Barbados" },
  { code: "BLR", name: "Belarus (Wit-Rusland)" },
  { code: "BEL", name: "België" },
  { code: "BLZ", name: "Belize" },
  { code: "BEN", name: "Benin" },
  { code: "BMU", name: "Bermuda" },
  { code: "BTN", name: "Bhutan" },
  { code: "BOL", name: "Bolivia" },
  { code: "BES", name: "Bonaire, St. Eustatius en Saba" },
  { code: "BIH", name: "Bosnië en Herzegovina" },
  { code: "BWA", name: "Botswana" },
  { code: "BVT", name: "Bouveteiland" },
  { code: "BRA", name: "Brazilië" },
  { code: "VGB", name: "Britse Maagdeneilanden" },
  { code: "IOT", name: "Brits Indische Oceaanterritorium" },
  { code: "BRN", name: "Brunei" },
  { code: "BGR", name: "Bulgarije" },
  { code: "BFA", name: "Burkina Faso" },
  { code: "BDI", name: "Burundi" },
  { code: "KHM", name: "Cambodja" },
  { code: "CAN", name: "Canada" },
  { code: "CAF", name: "Centraal-Afrikaanse Republiek" },
  { code: "CHL", name: "Chili" },
  { code: "CHN", name: "China" },
  { code: "COL", name: "Colombia" },
  { code: "COM", name: "Comoren" },
  { code: "COG", name: "Congo-Brazzaville" },
  { code: "COD", name: "Congo-Kinshasa" },
  { code: "CRI", name: "Costa Rica" },
  { code: "CUB", name: "Cuba" },
  { code: "CUW", name: "Curaçao" },
  { code: "CYP", name: "Cyprus" },
  { code: "DNK", name: "Denemarken" },
  { code: "DJI", name: "Djibouti" },
  { code: "DMA", name: "Dominica" },
  { code: "DOM", name: "Dominicaanse Republiek" },
  { code: "DEU", name: "Duitsland" },
  { code: "ECU", name: "Ecuador" },
  { code: "EGY", name: "Egypte" },
  { code: "SLV", name: "El Salvador" },
  { code: "EST", name: "Estland" },
  { code: "ETH", name: "Ethiopië" },
  { code: "FJI", name: "Fiji" },
  { code: "PHL", name: "Filipijnen" },
  { code: "FIN", name: "Finland" },
  { code: "FRA", name: "Frankrijk" },
  { code: "GAB", name: "Gabon" },
  { code: "GMB", name: "Gambia" },
  { code: "GEO", name: "Georgië" },
  { code: "GHA", name: "Ghana" },
  { code: "GRC", name: "Griekenland" },
  { code: "GRL", name: "Groenland" },
  { code: "GTM", name: "Guatemala" },
  { code: "GIN", name: "Guinee" },
  { code: "GUY", name: "Guyana" },
  { code: "HTI", name: "Haïti" },
  { code: "HND", name: "Honduras" },
  { code: "HUN", name: "Hongarije" },
  { code: "HKG", name: "Hongkong" },
  { code: "IRL", name: "Ierland" },
  { code: "ISL", name: "IJsland" },
  { code: "IND", name: "India" },
  { code: "IDN", name: "Indonesië" },
  { code: "IRQ", name: "Irak" },
  { code: "IRN", name: "Iran" },
  { code: "ISR", name: "Israël" },
  { code: "ITA", name: "Italië" },
  { code: "JAM", name: "Jamaica" },
  { code: "JPN", name: "Japan" },
  { code: "JOR", name: "Jordanië" },
  { code: "KAZ", name: "Kazachstan" },
  { code: "KEN", name: "Kenia" },
  { code: "KWT", name: "Koeweit" },
  { code: "HRV", name: "Kroatië" },
  { code: "LAO", name: "Laos" },
  { code: "LVA", name: "Letland" },
  { code: "LBN", name: "Libanon" },
  { code: "LBY", name: "Libië" },
  { code: "LIE", name: "Liechtenstein" },
  { code: "LTU", name: "Litouwen" },
  { code: "LUX", name: "Luxemburg" },
  { code: "MAC", name: "Macau" },
  { code: "MDG", name: "Madagaskar" },
  { code: "MWI", name: "Malawi" },
  { code: "MYS", name: "Maleisië" },
  { code: "MLT", name: "Malta" },
  { code: "MAR", name: "Marokko" },
  { code: "MEX", name: "Mexico" },
  { code: "MDA", name: "Moldavië" },
  { code: "MCO", name: "Monaco" },
  { code: "MNG", name: "Mongolië" },
  { code: "MNE", name: "Montenegro" },
  { code: "MOZ", name: "Mozambique" },
  { code: "MMR", name: "Myanmar" },
  { code: "NAM", name: "Namibië" },
  { code: "NPL", name: "Nepal" },
  { code: "NLD", name: "Nederland" },
  { code: "NZL", name: "Nieuw-Zeeland" },
  { code: "NIC", name: "Nicaragua" },
  { code: "NER", name: "Niger" },
  { code: "NGA", name: "Nigeria" },
  { code: "PRK", name: "Noord-Korea" },
  { code: "NOR", name: "Noorwegen" },
  { code: "OMN", name: "Oman" },
  { code: "AUT", name: "Oostenrijk" },
  { code: "PAK", name: "Pakistan" },
  { code: "PAN", name: "Panama" },
  { code: "PNG", name: "Papoea-Nieuw-Guinea" },
  { code: "PRY", name: "Paraguay" },
  { code: "PER", name: "Peru" },
  { code: "POL", name: "Polen" },
  { code: "PRT", name: "Portugal" },
  { code: "QAT", name: "Qatar" },
  { code: "ROU", name: "Roemenië" },
  { code: "RUS", name: "Rusland" },
  { code: "RWA", name: "Rwanda" },
  { code: "SAU", name: "Saoedi-Arabië" },
  { code: "SRB", name: "Servië" },
  { code: "SGP", name: "Singapore" },
  { code: "SVK", name: "Slowakije" },
  { code: "SVN", name: "Slovenië" },
  { code: "ESP", name: "Spanje" },
  { code: "LKA", name: "Sri Lanka" },
  { code: "SDN", name: "Soedan" },
  { code: "SOM", name: "Somalië" },
  { code: "SUR", name: "Suriname" },
  { code: "SWE", name: "Zweden" },
  { code: "CHE", name: "Zwitserland" },
  { code: "ZAF", name: "Zuid-Afrika" },
  { code: "KOR", name: "Zuid-Korea" },
  { code: "ZWE", name: "Zimbabwe" },
];

// datalist vullen
const datalist = document.getElementById("countries");
countries.forEach((c) => {
  const option = document.createElement("option");
  option.value = c.name;
  datalist.appendChild(option);
});

// mapping maken
const map = Object.fromEntries(countries.map((c) => [c.name, c.code]));

const input = document.getElementById("countryInput");

// zodra gebruiker kiest → tekst vervangen
input.addEventListener("change", function () {
  if (map[input.value]) {
    input.value = map[input.value];
  }
});