import React, { useState, useEffect } from "react";

export const Count = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    const parsedCount = saved ? Number(saved) : 0;
    if (!saved || isNaN(parsedCount)) {
      return 0;
    }

    return parsedCount >= 100 ? 0 : parsedCount;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div className="card flex flex-col gap-4 justify-center items-center min-h-screen">
      <button
        className=" rounded-2xl px-5 py-3 border bg-rose-400 hover:bg-rose-700 text-white"
        onClick={() => setCount((count) => count + 1)}
      >
        count is {count}
      </button>
      <p className="text-pink-400 text-3xl">
        9インチの棒を24時間だけ肛門の奥深くまで入れてください
      </p>
    </div>
  );
};
