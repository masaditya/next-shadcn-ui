"use client";
import { Chart68 } from "@/components/custom/Chart68";
import { Chart75 } from "@/components/custom/Chart75";
import Sidebar from "@/components/custom/Sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import CardInformation from "@/components/widget/CardInformation";
import ProfitStatistic from "@/components/widget/ProfitStatistic";
import RatioStatistic from "@/components/widget/RatioStatistic";
import TransactionStatistic from "@/components/widget/TransactionStatistic";
import { BellDot, MessagesSquare } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen">
      {/* sidebar */}
      <Sidebar />

      {/* main */}
      <div className="w-full min-h-screen bg-slate-100">
        <div className="border-b bg-white py-4 px-6 flex justify-between w-full">
          <input
            type="text"
            className="border p-2 w-4/5"
            placeholder="search for anything"
          />
          <div className="flex gap-4 items-center">
            <MessagesSquare />
            <BellDot />
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://github.com/masaditya.png"
                alt="@masaditya"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="p-6">
          <h1 className="text-2xl font-semibold">Hi, welcome back!</h1>
          <p className="text-sm text-slate-500">
            Your finance performance and monitoring dashboard template
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6 px-6">
          <ProfitStatistic
            title="GROSS PROFIT MARGIN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore"
            chart={<Chart75 />}
          />
          <ProfitStatistic
            title="NET PROFIT MARGIN"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore"
            chart={<Chart68 />}
          />
          <CardInformation />
        </div>

        <div className="grid grid-cols-4 gap-6 p-6">
          <RatioStatistic />
          <div className="grid grid-cols-2 col-span-2 gap-6">
            <TransactionStatistic title="TOTAL INCOME" />
            <TransactionStatistic title="TOTAL INCOME" />
            <TransactionStatistic title="TOTAL INCOME" />
            <TransactionStatistic title="TOTAL INCOME" />
          </div>
        </div>
      </div>
    </main>
  );
}
