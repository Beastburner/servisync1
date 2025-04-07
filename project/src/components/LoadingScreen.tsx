import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 h-screen bg-gradient-to-br from-orange-100 to-orange-500 flex flex-col items-center justify-center p-4
      text-center text-gray-800">
      <div className="flex flex-col items-center justify-center gap-4 w-full max-w-xs">
        <Loader2 className="w-16 h-16 text-white animate-spin" />
        <div className="space-y-2 w-full">
          <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-1/2 bg-white rounded-full animate-[loading_1s_ease-in-out_infinite]"></div>
          </div>
          <p className="text-white/80 animate-pulse text-center">Loading amazing services for you...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
