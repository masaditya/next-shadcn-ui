import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Archive,
  ArrowLeftToLine,
  BarChartBig,
  Calendar,
  File,
  FilePlus,
  HelpCircle,
  HomeIcon,
  LineChart,
  MailPlus,
  Menu,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <nav className="w-[400px] bg-slate-200 min-h-screen">
      <div className="flex justify-between p-4">
        <div className="flex gap-3 items-center">
          <BarChartBig />
          <span className="font-bold text-2xl text-indigo-500">azia</span>
        </div>
        <div>
          <ArrowLeftToLine className="text-slate-400" />
        </div>
      </div>

      <div className="flex p-4 gap-6">
        <div className="grid gap-6">
          <HomeIcon />
          <Calendar />
          <File />
          <FilePlus />
          <LineChart />
          <MailPlus />
          <Menu />
          <Archive />
        </div>
        <div>
          <span className="font-bold text-xl">Dashboard</span>
          <p className="text-xs text-slate-400 py-3">
            Choose between layout to experience different look and feel for your
            project
          </p>
          <div className="border-l pl-4 pr-2 py-4 border-slate-300 ">
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
            <button className="border-b border-slate-300 py-3 block w-full text-left text-xs">
              Web Analytics
            </button>
          </div>
        </div>
      </div>

      <div className="p-4">
        <button className="mb-4">
          <HelpCircle className="text-slate-500 text-sm" />
        </button>
        <Avatar className="w-8 h-8">
          <AvatarImage
            src="https://github.com/masaditya.png"
            alt="@masaditya"
          />
          <AvatarFallback>AE</AvatarFallback>
        </Avatar>
      </div>
    </nav>
  );
};

export default Sidebar;
