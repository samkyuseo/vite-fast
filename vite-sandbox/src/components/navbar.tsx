import { SocialToggle } from "./social-toggle";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    // items-center centers vertically
    <header className="flex h-16 items-center justify-between">
      <div className="text-muted-foreground">samkyuseo</div>
      <div className="flex items-center">
        <SocialToggle />
        <ModeToggle />
      </div>
    </header>
  );
}
