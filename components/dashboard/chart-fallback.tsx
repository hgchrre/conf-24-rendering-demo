import React from 'react';

interface ChartFallbackProps {
  height: string;
}

export const ChartFallback: React.FC<ChartFallbackProps> = ({ height }) => {
  return (
    <div
      className={`h-[${height}] w-full bg-gray-100 animate-pulse rounded-lg`}
    ></div>
  );
};
