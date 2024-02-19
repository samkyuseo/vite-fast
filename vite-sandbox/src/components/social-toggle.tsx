import { Waypoints, Linkedin, Github } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function SocialToggle() {
  const popupExternal = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="muted-ghost" size="icon">
          <Waypoints className="absolute h-[1.2rem] w-[1.2rem] rotate-90 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem
          className="text-muted-foreground"
          onClick={() => popupExternal("https://linkedin.com/in/samkyuseo")}
        >
          <Linkedin className="mr-2 h-4 w-4" />
          Linkedin
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-muted-foreground"
          onClick={() => popupExternal("https://github.com/samkyuseo")}
        >
          <Github className="mr-2 h-4 w-4" />
          Github
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
