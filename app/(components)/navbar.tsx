import Link from "next/link";
import SearchInput from "./searchInput";
import { HoverCardDemo } from "./hoverCard";
import SheetDemo from '../(components)/cartButton'

export default function navbar() {
  return (
    <nav>
      <HoverCardDemo />
      <Link href="/">Home</Link>
      <Link href="/testing">Testing</Link>

      <div className="navbar-search">
        <SearchInput />
        <SheetDemo/>
      </div>
    </nav>
  );
}
