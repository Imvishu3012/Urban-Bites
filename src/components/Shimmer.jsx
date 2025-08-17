const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full min-h-screen py-8 bg-slate-100">
      {Array(8).fill(0).map((_, idx) => (
        <div
          key={idx}
          className="w-64 h-80 m-4 p-4 rounded-lg shadow-lg bg-zinc-100 animate-pulse flex flex-col"
        >
          <div className="w-full h-1/2 bg-gray-300 rounded-lg mb-4"></div>
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;