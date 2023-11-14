"use client";

import { useRouter, useState, Input } from "@/app/utils/utils";

function removeAccent(str: string) {
  const normalizedTerm = str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const encodedTerm = encodeURIComponent(normalizedTerm);

  return encodedTerm;
}
export default function SearchInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
    const term = removeAccent(searchTerm);
    router.push(`/search?q=${term}`);
  };

  const handleBlur = () => {
    setSearchTerm("");
  };

  return (
    <>
      <form onSubmit={onSearch} className="searchInput">
        <Input
          type="text"
          placeholder="What are you looking for ?"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
          onBlur={handleBlur}
        />
      </form>
    </>
  );
}
