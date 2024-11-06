import React from 'react';

const LoadingState = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8">
      <div className="w-16 h-16 rounded-full border-4 border-spotify-green border-t-transparent animate-spin" />
      <p className="text-lg font-medium animate-pulse">Fetching track information...</p>
    </div>
  );
};

export default LoadingState;