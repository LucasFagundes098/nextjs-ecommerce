"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";

export default function Footer() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <footer className="footer">
      <Collapsible
        open={isOpen}
        onOpenChange={setIsOpen}
        className="w-[350px] space-y-2"
      >
        <div className="flex items-center justify-between space-x-4 px-4">
          <h4 className="text-sm font-semibold">Footer testing</h4>
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm">
              <CaretSortIcon className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        </div>
        <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
          testing 1
        </div>
        <CollapsibleContent className="space-y-2">
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            testing 2
          </div>
          <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
            testing 3
          </div>
        </CollapsibleContent>
      </Collapsible>
    </footer>
  );
}
