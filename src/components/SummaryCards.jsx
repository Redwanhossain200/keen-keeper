const SummaryCards = ({ friends }) => {
  const stats = [
    { label: "Total Friends", value: friends.length },
    { label: "On Track", value: friends.filter(f => f.status === "on-track").length },
    { label: "Need Attention", value: friends.filter(f => f.status === "overdue").length },
    { label: "Interactions This Month", value: 12 },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-3 md:mt-4">
      {stats.map((stat, index) => (
        <div key={index} className="bg-white p-7 md:p-8 rounded-xl hover:scale-105 active:scale-95 hover:shadow-md transition-all cursor-pointer border border-gray-100 shadow-sm text-center">
          <h4 className="text-2xl md:text-3xl font-bold text-gray-800">{stat.value}</h4>
          <p className="text-gray-500 text-xs md:text-sm mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
};
export default SummaryCards;