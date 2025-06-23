import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Settings } from "lucide-react";
import DialogContent from "./DialogContent";

const Header = () => {
  return (
    <header className="w-full py-4">
      <div className="flex items-center mx-8">
        <h1 className="flex-1 text-xl font-bold">HooTalk</h1>
        <Dialog>
          <DialogTrigger asChild>
            <button className="cursor-pointer" aria-label="Setting" type="button">
              <Settings className="w-6 h-6 hover:opacity-75" />
            </button>
          </DialogTrigger>
          <DialogContent />
        </Dialog>
      </div>
    </header>
  );
};

export default Header; 