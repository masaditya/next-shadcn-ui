"use client";

import { BarChart } from "../custom/Bar";

type TransactionStatisticPropsType = {
  title: string;
};

const TransactionStatistic = ({ title }: TransactionStatisticPropsType) => {
  return (
    <div className="border shadow-sm p-4 bg-white">
      <p className="text-sm font-semibold mb-3 uppercase">{title}</p>
      <div className="h-16">
        <BarChart />
      </div>
      <h3 className="text-xl font-semibold">
        <span className="text-slate-500">$ </span>
        780,560<span className="text-lg font">.00</span>
      </h3>
      <p className="text-xs">
        <span className="text-green-500 font-semibold">18.2%</span> Higher vs
        previous month
      </p>
    </div>
  );
};

export default TransactionStatistic;
