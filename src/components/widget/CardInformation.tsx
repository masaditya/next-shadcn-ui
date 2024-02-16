const CardInformation = () => {
  return (
    <div className="border shadow-sm p-6 bg-white col-span-2">
      <div className="w-4/5">
        <span className="font-semibold text-xs text-slate-500">
          YOUR BALANCE
        </span>
        <h3 className="text-3xl font-semibold">
          <span className="text-slate-500">$</span>
          780,560<span className="text-2xl font">.00</span>
        </h3>
        <p className="text-slate-500 font-semibold text-xs mt-4">
          YOUR ACCOUNT NUMBER
        </p>
        <div className="grid grid-cols-4 gap-8 font-bold text-lg">
          <span className="tracking-[3px]">••••</span>
          <span className="tracking-[3px]">••••</span>
          <span className="tracking-[3px]">••••</span>
          <span>5673</span>
        </div>
        <div className="grid grid-cols-2 gap-8 mt-8">
          <div className="grid gap-1">
            <span className="text-xs font-semibold text-slate-500">
              ACCOUNT HOLDER
            </span>
            <p>Alicia Christensen</p>
          </div>
          <div className="grid gap-1">
            <span className="text-xs font-semibold text-slate-500">
              ACCOUNT TYPE
            </span>
            <p>Savings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardInformation;
