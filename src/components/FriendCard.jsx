import { Link } from "react-router-dom";

const FriendCard = ({ friend }) => {
  const statusColors = {
    "overdue": "bg-[#EF4444] text-white",
    "almost due": "bg-[#EFAD44] text-white",
    "on-track": "bg-[#244D3F] text-white"
  };

  return (
    <Link to={`/friend/${friend.id}`} className="card bg-white border border-gray-100 shadow-sm hover:-translate-y-2 hover:shadow-md transition-all p-5 text-center">
      <img src={friend.picture} className="w-20 h-20 rounded-full mx-auto drop-shadow-md object-cover mb-4" />
      <h3 className="text-xl font-bold text-gray-800 hover:text-[#244D3F]">{friend.name}</h3>
      <p className="text-sm text-gray-500 mb-2">{friend.days_since_contact}d ago</p>
      <div className="flex flex-wrap justify-center gap-2 mb-4">
        {friend.tags.map(tag => (
          <span key={tag} className="bg-green-50 text-green-700 text-xs px-4 py-1 rounded-2xl uppercase font-bold tracking-wider">{tag}</span>
        ))}
      </div>
      <div className={`py-2 px-4 rounded-full text-xs font-bold capitalize ${statusColors[friend.status]}`}>
        {friend.status}
      </div>
    </Link>
  );
};

export default FriendCard;