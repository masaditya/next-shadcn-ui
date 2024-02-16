type ProfitStatisticPropsType = {
  title: string;
  description: string;
  chart: JSX.Element;
};

const ProfitStatistic = ({
  title,
  description,
  chart,
}: ProfitStatisticPropsType) => {
  return (
    <div className="border shadow-sm p-6 bg-white">
      <h3 className="font-semibold text-sm uppercase">{title}</h3>
      <p className="text-clip overflow-hidden text-xs text-slate-400 mt-2">
        {description}
      </p>
      <div className="w-[150px] m-auto">{chart}</div>
    </div>
  );
};

export default ProfitStatistic;
