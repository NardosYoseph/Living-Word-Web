import React from 'react';
import { Pie } from 'react-chartjs-2';
import styles from "../chart.module.css";
import { Chart, ArcElement, LineElement, PointElement, BarElement, ChartController, LinearScale, CategoryScale, Title, Tooltip, Legend, PolarAreaController, RadarController } from 'chart.js';

const PieChart = ({ EventData }) => {
  const chartData = {
    labels: ['Regular Attendees', 'New Visitors', 'Online Participants', 'Volunteers', 'Members in Small Groups'],
    datasets: [
      {
        data: EventData, // Ensure data prop contains the corresponding values for each category
        backgroundColor: [
          'rgba(46, 204, 113, 0.7)',
          'rgba(231, 76, 60, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(241, 196, 15, 0.7)',
          'rgba(155, 89, 182, 0.7)'
        ],
        borderColor: [
          'rgba(46, 204, 113, 1)',
          'rgba(231, 76, 60, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(241, 196, 15, 1)',
          'rgba(155, 89, 182, 1)'
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
    <div className={styles.piechartContainer}>
      <Pie data={chartData} options={chartOptions} />
    </div>
  );
};

export default PieChart;
