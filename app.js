const requestOptions = {
  method: 'GET',
  headers: new Headers({
    'Content-Type': 'application/json',
    // Add any other headers if needed
  }),
  mode: 'cors', // Important for cross-origin requests
  cache: 'default',
};


fetch('https://data.nasdaq.com/api/v3/datasets/WIKI/FB/data.json', requestOptions)
  .then((response) => response.json())
  .then((json) => chartDisplay(json));
function chartDisplay(data){
  var options = {
    series: [{
    name: "STOCK ABC",
    data: data.dataset_data.data
  }],
    chart: {
    type: 'area',
    height: 350,
    zoom: {
      enabled: false
    }
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight'
  },

  title: {
    text: 'Fundamental Analysis of Stocks',
    align: 'left'
  },
  subtitle: {
    text: 'Price Movements',
    align: 'left'
  },
  labels: data.dataset_data.data,
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    opposite: true
  },
  legend: {
    horizontalAlign: 'left'
  }
  };

  var chart = new ApexCharts(document.querySelector("#app"), options);
  chart.render();
}

