import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";

const SearchMotal = ({
  open,
  onSetSearchOpen,
}: {
  open: boolean;
  onSetSearchOpen: (open: boolean) => void;
}) => {
  const data = [
    "apple",
    "banana",
    "orange",
    "grape",
    "watermelon",
    "kiwi",
    "mango",
    "pineapple",
    "peach",
    "pear",
  ];
  const [query, setQuery] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [results, setResults] = useState<string[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
    } else {
      const filtered = data.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setResults(filtered);
      console.log("Search results:", filtered);
    }
  };

  return (
    <section>
      <div className="search-motal container mx-auto px-4">
        <AlertDialog open={open} onOpenChange={onSetSearchOpen}>
          <AlertDialogContent>
            <AlertDialogHeader className="flex gap-3">
              <Input
                type="text"
                placeholder="Search"
                name="search"
                value={query}
                onChange={handleSearch}
              />
              <Button
                className="ml-2  cursor-pointer"
                onClick={() => console.log(results)}
              >
                Search
              </Button>

              <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogHeader>
            <AlertDialogFooter>
              {results.length > 0 && (
                <div className="search-results mt-4">
                  <h3 className="text-lg font-semibold mb-2">
                    Search Results:
                  </h3>
                  <ul className="list-disc list-inside">
                    {results.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </section>
  );
};

export default SearchMotal;
