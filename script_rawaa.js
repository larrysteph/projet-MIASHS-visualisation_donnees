const API_URL = "https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=10&refine=diplome_rgp%3ALicence&refine=etablissement_id_uai%3A0751717J&refine=libelle_intitule_1%3AMathematiques+et+informatique+appliquees+aux+sciences+humaines+et+sociales&refine=niveau_lib%3A2%C3%A8me+ann%C3%A9e";
const API_URL_2 = "https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=10&offset=0&refine=diplom%3A2300031&refine=diplome_rgp%3ALicence&refine=etablissement_lib%3AUniversit%C3%A9+Toulouse+-+Jean+Jaur%C3%A8s&refine=niveau_lib%3A2%C3%A8me+ann%C3%A9e";

const labels = [
'2021-22',
'2022-23',
'2023-24',
'2024-25'
];

const data = {
labels: labels,
datasets: [{
label: 'Les inscrits à la Sorbonne en L2 MIASHS',
backgroundColor: 'rgb(100,10,100)',
borderColor: 'rgb(100,10,100)',
data: []
},
{
label: 'Les inscrits à Toulouse en L2 MIASHS',
backgroundColor: 'rgb(10, 105, 200)',
borderColor: 'rgb(10, 105, 200)',
data: []
}]
};

const config = {
type: 'line',
data: data
};

const myChart = new Chart(
document.querySelector('#monGraphique'),
config
);

fetch(API_URL)
.then(response => response.json())
.then(api => {

const effectifs = [];

api.results.forEach(r => {
effectifs.push(r.effectif_total);
});

myChart.data.datasets[0].data = effectifs;
myChart.update();

});

fetch(API_URL_2)
.then(response => response.json())
.then(api => {

const effectifs = [];

api.results.forEach(r => {
effectifs.push(r.effectif_total);
});

myChart.data.datasets[1].data = effectifs;
myChart.update();

});