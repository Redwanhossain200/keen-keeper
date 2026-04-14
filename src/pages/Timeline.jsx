import { useState } from "react";
import { useTimeline } from "../context/TimelineContext";
import TimelineItem from "../components/TimelineItem";

const Timeline = () => {
  const [filter, setFilter] = useState("All");
  const { interactions } = useTimeline();

  const filtered = filter === "All" ? interactions : interactions.filter(i => i.type === filter);

  return (
    <div className="bg-base-200 min-h-[calc(100vh-400px)]">
      <div className="max-w-6xl mx-auto py-8 px-4 md:py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-6 text-[#244D3F]">
          Timeline
        </h1>

        <div className="flex justify-center md:justify-start mb-6">
          <select
            className="select select-bordered border border-gray-300 outline-none w-full max-w-xs rounded-xl bg-white"
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All Interactions</option>
            <option value="Call">Call</option>
            <option value="Text">Text</option>
            <option value="Video">Video</option>
          </select>
        </div>

        <div className="space-y-6 bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
          {filtered.length > 0 ? (
            filtered.map(item => <TimelineItem key={item.id} item={item} />)
          ) : (
            <div className="text-center py-24">
              <p className="text-gray-400 font-medium">No history found for {filter} .</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline;