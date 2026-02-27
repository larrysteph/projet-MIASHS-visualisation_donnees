
const API_URL = "https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=10&offset=0&where=etablissement_lib+%3D+%27Universit%C3%A9+Paris+Nanterre%27+AND+diplome_rgp+%3D+%27Licence%27+AND+niveau+%3D+%2702%27+AND+search%28%27Math%C3%A9matiques+et+Informatique+Appliqu%C3%A9es+aux+Sciences+Humaines+et+Sociales%27%29";

let labelsPerso = [];

const dataPerso = {
  labels: labelsPerso,
  datasets: [
    {
      label: "Hommes",
      backgroundColor: "rgb(0, 199, 193)",
      borderColor: "rgb(0, 199, 193)",
      data: [],
      tension: 0.3 
    },
    {
      label: "Femmes",
      backgroundColor: "rgb(255, 159, 64)",
      borderColor: "rgb(255, 159, 64)",
      data: [],
      tension: 0.3
    }
  ]
};

const configPerso = {
  type: "line",
  data: dataPerso,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Évolution des effectifs Licence 2 MIASHS - Université de Paris Nantere'
      }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
};

const myChartPerso = new Chart(
  document.getElementById("myChartPerso"),
  configPerso
);

fetch(API_URL)
  .then(r => r.json())
  .then(json => {
  
    const rows = json.results || [];
    const group = {};

    rows.forEach(row => {
      const annee = row.annee_universitaire; 
      
      const nbHommes = Number(row.hommes) || 0;
      const nbFemmes = Number(row.femmes) || 0;

      if (!group[annee]) {
        group[annee] = { totalHommes: 0, totalFemmes: 0 };
      }
      
      
      group[annee].totalHommes += nbHommes;
      group[annee].totalFemmes += nbFemmes;
    });

    
    const anneesTriees = Object.keys(group).sort();

    const hommesSerie = anneesTriees.map(a => group[a].totalHommes);
    const femmesSerie = anneesTriees.map(a => group[a].totalFemmes);

    
    myChartPerso.data.labels = anneesTriees;
    myChartPerso.data.datasets[0].data = hommesSerie;
    myChartPerso.data.datasets[1].data = femmesSerie;

    myChartPerso.update();
  })
  .catch(err => console.error("Erreur lors du chargement des données de Paris Nantere :", err));