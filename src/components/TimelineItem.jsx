import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useTimeline } from "../context/TimelineContext";
import toast from "react-hot-toast";

const TimelineItem = ({ item }) => {
  const { removeInteraction } = useTimeline();

  const handleDelete = () => {
    removeInteraction(item.id);
    toast.error("Deleted!");
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-5 hover:border-green-300 transition-colors">
      <div className="bg-gray-50 w-16 h-16 flex items-center justify-center rounded-xl text-[#244D3F] text-2xl">
        {item.icon}
      </div>
      <div>
        <h3 className="font-bold text-lg text-gray-800">
          {item.type} <span className="font-normal text-gray-500">with {item.friend}</span>
        </h3>
        <p className="text-sm text-gray-400">{item.date}</p>
      </div>

      <button
        onClick={handleDelete}
        className="ml-auto text-2xl text-gray-300 cursor-pointer hover:text-red-400 transition-colors p-2"
        title="Delete"
      >
        <MdOutlineDeleteForever />
      </button>
    </div>
  );
};

export default TimelineItem;