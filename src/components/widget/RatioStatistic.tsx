import { BarChart3, LineChart } from "lucide-react";
import React from "react";
import { Progress } from "../ui/progress";

const RatioStatistic = () => {
  return (
    <div className="border shadow-sm p-6 bg-white col-span-2">
      <div className="grid grid-cols-3 gap-4">
        <div className="p-2">
          <LineChart className="w-full h-full text-slate-300" />
        </div>
        <div className="col-span-2">
          <p className="text-sm font-semibold mb-3">QUICK RATIO</p>
          <span className="text-2xl font-semibold">0.9:8</span>
          <Progress
            value={80}
            className="rounded-none h-2 bg-slate-200"
            indicatorClassNames="bg-yellow-500"
          />
          <span className="text-xs text-slate-400">
            Quick Ratio Goal: 1.0 or Higher
          </span>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            nostrum quo mollitia officiis
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="p-2">
          <BarChart3 className="w-full h-full text-slate-300" />
        </div>
        <div className="col-span-2">
          <p className="text-sm font-semibold mb-3">CURRENT RATIO</p>
          <span className="text-2xl font-semibold">2:8</span>
          <Progress
            value={60}
            className="rounded-none h-2 bg-slate-200"
            indicatorClassNames="bg-green-500"
          />
          <span className="text-xs text-slate-400">
            Quick Ratio Goal: 1.0 or Higher
          </span>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            nostrum quo mollitia officiis
          </p>
        </div>
      </div>
    </div>
  );
};

export default RatioStatistic;
