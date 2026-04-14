import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useTimeline } from '../context/TimelineContext';

const Stats = () => {
  const { interactions } = useTimeline();

  const statsData = [
    { name: 'Text', value: interactions.filter(i => i.type === 'Text').length, color: '#8b5cf6' },
    { name: 'Call', value: interactions.filter(i => i.type === 'Call').length, color: '#244D3F' },
    { name: 'Video', value: interactions.filter(i => i.type === 'Video').length, color: '#22c55e' },
  ];

  return (
    <div className="max-w-6xl mx-auto py-8 text-center md:text-left md:py-12 px-4 ">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-[#1a332a] text-center md:text-left">Friendship Analytics</h1>

      <div className="bg-white p-6 md:p-10 rounded-2xl border border-gray-100 shadow-md">
        <h2 className="text-xl font-semibold mb-6 opacity-80 text-[#1a332a]">By Interaction Type</h2>

        <div className="h-75 md:h-100 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={statsData}
                cx="50%"
                cy="50%"
                innerRadius="60%"
                outerRadius="80%"
                paddingAngle={8}
                cornerRadius={10}
                dataKey="value"
                stroke="none"
              >
                {statsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
              />
              <Legend
                verticalAlign="bottom"
                align="center"
                iconType="circle"
                iconSize={10}
                wrapperStyle={{ paddingTop: '20px' }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Stats;