import Link from "next/link";
import SearchInput from "./searchInput";

export default function navbar() {
  return (
    <nav>
      <h1>Selected</h1>
      <Link href="/">Home</Link>
      <Link href="/testing">Testing</Link>

      <div>
        <SearchInput />
        <Link href="/cart">Cart</Link>
      </div>
    </nav>
  );
}
