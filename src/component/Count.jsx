import React, { useState, useEffect } from "react";

export const Count = () => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    const parsedCount = saved ? Number(saved) : 0;
    return isNaN(parsedCount) || parsedCount >= 50 ? 0 : parsedCount;
  });

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  const incrementCount = () => {
    setCount((c) => {
      const next = c + 1;
      return next >= 50 ? 0 : next;
    });
  };

  return (
    <div className="card flex flex-col gap-4 justify-center items-center min-h-screen">
      <button
        className="rounded-2xl px-5 py-3 border bg-rose-400 hover:bg-rose-700 text-white"
        onClick={incrementCount}
      >
        count is {count}
      </button>
      <p className="text-pink-400 text-3xl">
        9インチの棒を24時間だけ肛門の奥深くまで入れてください
      </p>
    </div>
  );
};

