import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, LineElement, PointElement, BarElement, ChartController, LinearScale, CategoryScale, Title, Tooltip, Legend, PolarAreaController, RadarController } from 'chart.js';

const PieChart = ({ EventData }) => {
  const chartData = {
    labels: ['Weekly Events', 'Yearly Events', 'Special Events'],
    datasets: [
      {
        data: EventData, // Ensure data prop contains the corresponding values for each category
        backgroundColor: [
          'rgba(46, 204, 113, 0.7)',
          'rgba(231, 76, 60, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          
        ],
        borderColor: [
          'rgba(46, 204, 113, 1)',
          'rgba(231, 76, 60, 1)',
          'rgba(52, 152, 219, 1)',
        
        ],
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div className="rounded-lg overflow-hidden w-80 h-80 py-4">
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
