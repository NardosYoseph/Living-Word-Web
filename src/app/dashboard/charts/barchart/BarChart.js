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
        label: 'Events',
        data: dataValues,
        backgroundColor: 'rgba(46, 204, 113, 0.7)', // Translucent green for solved
        borderColor: 'rgba(46, 204, 113, 1)', // Solid green border
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    // ... other chart options
    scales: {
      x: {
        stacked: true, // Enable stacking for bars
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="rounded-lg overflow-hidden h-50 w-96 py-4">
      <Bar data={chartData} options={chartOptions}  />
    </div>
  );
};

export default BarChart;
