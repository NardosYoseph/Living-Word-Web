import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const BarChart = ({ userData }) => {
  // Extract month labels and data values from userData
  const labels = userData.map(({ month }) => month);
  const dataValues = userData.map(({ data }) => data);

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: 'Users',
        data: dataValues,
        backgroundColor: 'rgba(46, 204, 113, 0.7)', // Translucent green
        borderColor: 'white', // Solid white border
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        stacked: true, // Enable stacking for bars
        ticks: {
          color: 'white', // Set x-axis tick text color to white
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Set y-axis tick text color to white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white', // Set legend label text color to white
        },
      },

    },
  };

  return (
    <div className="rounded-lg overflow-hidden h-50 w-96 py-4">
      <Bar data={chartData} options={chartOptions} />
    </div>
  );
};

export default BarChart;
