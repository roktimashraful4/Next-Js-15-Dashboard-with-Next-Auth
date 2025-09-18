"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import dynamic from "next/dynamic";
const Trend = dynamic(() => import("react-trend"), { ssr: false });

interface DashboardCardProps {
  title: string;
  value: string | number;
  trend: number; // percentage change
  icon?: ReactNode;
  delay?: number;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, trend, icon, delay = 0 }) => {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col justify-between rounded-xl border border-gray-800 p-5 shadow-sm hover:shadow-lg transition"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-slate-200 font-black text-sm">{title}</h3>
        {icon && <span className="text-slate-200 text-xl">{icon}</span>}
      </div>
      <div className="flex justify-between">
        <p className="mt-3 text-3xl font-bold text-white">{value}</p>
        <div>

          <Trend
            smooth
            autoDraw
            autoDrawDuration={3000}
            autoDrawEasing="ease-out"
            data={ isPositive ? [0, 2, 1.5, 3, 2.5, 4, 3.5, 5]: [5, 3.5,4,3,2.5,1.5,2,0]}
            gradient={isPositive ? ['#10b981', '#26d394'] : ['#ef4444', '#f97316']}
            radius={25}
            strokeWidth={3}
            strokeLinecap={'square'}
        />

          <div
            className={`mt-3 w-full rounded-md px-2 py-1 text-xs font-medium text-center ${
              isPositive
                ? "bg-green-300/5 border border-green-500 text-green-500"
                : "bg-red-300/5 border border-red-500 text-red-500"
            }`}
          >
            {isPositive ? `▲ ${trend}%` : `▼ ${Math.abs(trend)}%`}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DashboardCard;
