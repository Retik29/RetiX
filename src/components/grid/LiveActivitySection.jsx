import React from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Activity, BookOpen, GitCommit, Coffee } from 'lucide-react';

const LiveActivitySection = () => {
  return (
    <GridItem className="col-span-1 md:col-span-1 row-span-1 overflow-hidden group/activity">
      <div className="flex items-center gap-2 mb-4">
        <Activity className="w-5 h-5 text-red-500 animate-pulse" />
        <h3 className="text-sm font-bold uppercase tracking-widest text-red-500">Live Status</h3>
      </div>
      
      <div className="flex flex-col gap-3 h-full">
        {/* Currently Learning */}
        <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group-hover/activity:border-[#009A8D]/30 transition-colors">
          <BookOpen className="w-4 h-4 text-[#009A8D] mt-0.5" />
          <div>
            <p className="text-[10px] text-gray-500 font-mono uppercase">Learning</p>
            <p className="text-sm font-medium text-gray-200">System Design & Scalability</p>
          </div>
        </div>

        {/* Current Project */}
        <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group-hover/activity:border-[#009A8D]/30 transition-colors">
          <Coffee className="w-4 h-4 text-yellow-500 mt-0.5" />
          <div>
            <p className="text-[10px] text-gray-500 font-mono uppercase">Building</p>
            <p className="text-sm font-medium text-gray-200">FixEasy Platform</p>
          </div>
        </div>

        {/* Recent Commit */}
        <div className="flex items-start gap-3 bg-white/5 p-3 rounded-xl border border-white/5 group-hover/activity:border-[#009A8D]/30 transition-colors">
          <GitCommit className="w-4 h-4 text-green-500 mt-0.5" />
          <div className="w-full">
            <div className="flex justify-between items-center w-full">
              <p className="text-[10px] text-gray-500 font-mono uppercase">Practicing</p>
              <span className="text-[9px] text-[#009A8D] font-mono">Daily</span>
            </div>
            <p className="text-sm font-medium text-gray-200 truncate pr-2">Data Structures & Algorithms</p>
          </div>
        </div>
      </div>
    </GridItem>
  );
};

export default LiveActivitySection;
