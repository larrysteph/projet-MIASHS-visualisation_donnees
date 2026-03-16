var labels = ['2021-22', '2022-23', '2023-24', '2024-25'];
var hommes = [90, 76, 85, 85];
var femmes = [58, 44, 50, 45];

var tauxFeminisation = femmes.map(function(f, i) {
  var total = f + hommes[i];
  return parseFloat(((f / total) * 100).toFixed(1));
});

// Graphique 1 : Hommes / Femmes
var dataHF = {
  labels: labels,
  datasets: [
    {
      label: 'Hommes',
      backgroundColor: 'rgb(0, 199, 193)',
      borderColor: 'rgb(0, 199, 193)',
      data: hommes
    },
    {
      label: 'Femmes',
      backgroundColor: 'rgb(255, 159, 64)',
      borderColor: 'rgb(255, 159, 64)',
      data: femmes
    }
  ]
};

new Chart(document.getElementById('chartHF'), {
  type: 'line',
  data: dataHF,
  options: {
    scales: {
      y: { beginAtZero: false }
    }
  }
});

// Graphique 2 : Taux de féminisation (%)
var dataTaux = {
  labels: labels,
  datasets: [
    {
      label: 'Taux de féminisation (%)',
      backgroundColor: 'rgb(255, 159, 64)',
      borderColor: 'rgb(255, 159, 64)',
      data: tauxFeminisation
    }
  ]
};

new Chart(document.getElementById('chartTaux'), {
  type: 'line',
  data: dataTaux,
  options: {
    scales: {
      y: {
        beginAtZero: false,
        ticks: {
          callback: function(value) { return value + ' %'; }
        }
      }
    }
  }
});
