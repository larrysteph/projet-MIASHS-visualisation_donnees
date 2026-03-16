const URL_SOCIOLOGIE = 'https://data.enseignementsup-recherche.gouv.fr/api/explore/v2.1/catalog/datasets/fr-esr-principaux-diplomes-et-formations-prepares-etablissements-publics/records/?limit=40&refine=diplom%3A2300018&refine=etablissement_id_uai%3A0311383K&refine=niveau_lib%3A2%C3%A8me+ann%C3%A9e';

const mesAnneesLabels = ['2021-22', '2022-23', '2023-24', '2024-25'];

const configurationData = {
    labels: mesAnneesLabels,
    datasets: [{
        label: 'Inscrits en L2 Sociologie (UT2J)',
        backgroundColor: 'rgba(100, 10, 100, 0.2)',
        borderColor: 'rgb(10, 71, 100)',
        data: [], 
        tension: 0, 
    }]
};

const leGraphique = new Chart(
    document.getElementById('graphiqueSocio'),
    {
        type: 'line',
        data: configurationData,
        options: {
            scales: {
                y: { min: 200, beginAtZero: false } 
            }
        }
    }
);

fetch(URL_SOCIOLOGIE)
    .then(res => res.json())
    .then(api => {
        const dico = {};
        
        api.results.forEach(r => {
            const annee = r.annee_universitaire;
        
            const effectif = Number(r.effectif_total || r.effectif || 0);
            
            dico[annee] = (dico[annee] || 0) + effectif;
        });

        
        console.log("Données triées par année :", dico);

        const effectifsFinaux = mesAnneesLabels.map(a => dico[a] || 0);

        leGraphique.data.datasets[0].data = effectifsFinaux;
        leGraphique.update();
    });