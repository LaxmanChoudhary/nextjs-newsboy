"use client";
import React, { useState } from "react";
import FilterBox from "./FilterBox";
import { Button } from "./ui/button";
import { categoryFilterOptions, countryFilterOptions } from "@/lib/constants";
import { usePathname, useRouter } from "next/navigation";

interface filterValues {
  country?: string;
  category?: string;
}

interface filterProps {
  filterValues: filterValues;
}

export default function Filters({
  filterValues: { country="", category = "" },
}: filterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [countryValue, setCountryValue] = useState(country);
  const [categoryValue, setCategoryValue] = useState(category);

  const updateQuery = () => {
    const Qs = new URLSearchParams({
      ...(countryValue && { country: countryValue }),
      ...(categoryValue && { category: categoryValue }),
    });
    router.push(`${pathname}?${Qs}`);
  };

  return (
    <div className="flex gap-4">
      <FilterBox
        filterTitle={"country"}
        options={countryFilterOptions}
        value={countryValue}
        setValue={setCountryValue}
      />
      <FilterBox
        filterTitle={"category"}
        options={categoryFilterOptions}
        value={categoryValue}
        setValue={setCategoryValue}
      />
      <Button onClick={() => updateQuery()}>Apply</Button>
    </div>
  );
}
