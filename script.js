const labels = [
  '2021-22',
  '2022-23',
  '2023-24',
  '2024-25'
];

const data = {
  labels: labels,
  datasets: [{
    label: 'Les inscrits à l’UT2J en L2 MIASHS',
    backgroundColor: 'rgb(0, 199, 193)',
    borderColor: 'rgb(0, 199, 193)',
    data: [148, 120, 135, 130]
  }]
};

const config = {
  type: 'line',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
};

new Chart(document.getElementById('myChart'), config);


const labels2 = [
  '2021-22',
  '2022-23',
  '2023-24',
  '2024-25'
];


const data2 = {
  labels: labels2,
  datasets: [
    {
      label: 'Hommes',
      backgroundColor: 'rgb(0, 199, 193)',
      borderColor: 'rgb(0, 199, 193)',
      data: [90, 76, 85, 85]
    },
    {
      label: 'Femmes',
      backgroundColor: 'rgb(255, 159, 64)',
      borderColor: 'rgb(255, 159, 64)',
      data: [58, 44, 50, 45]
    }
  ]
};


const config2 = {
  type: 'line',
  data: data2,
  options: {
    scales: {
      y: {
        beginAtZero: false
      }
    }
  }
};
new Chart(document.getElementById('myChart2'), config2);

