"use client";

import { useState, useEffect } from "react";
import { loadingCircle } from "@/graphics/ui";
import ABCollectionsCard from "./ABCollectionsCard";
import { faChevronDown } from "@/graphics/faRegular";

export default function ABSSShoeDisplay({ shoes, title, threshold }) {
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedSize, setSelectedSize] = useState("all");
  const [selectedVendor, setSelectedVendor] = useState(""); 
  const [selectedProductType, setSelectedProductType] = useState("");
  // const { currentUser } = useAuth();

  // Log fetched results and threshold
  // useEffect(() => {
  //   console.log(`Fetched ${title}:`, shoes);
  //   console.log(`Threshold: ${threshold}`);
  // }, [shoes, title, threshold]);

  if (!shoes) return <div className="text-center">{loadingCircle()}</div>;
  if (shoes.length === 0)
    return <div className="text-center">No shoes available.</div>;

  // Toggle gender selection (Single-Select)
  const toggleGender = (gender) => {
    setSelectedGender((prev) => (prev === gender ? null : gender));
  };

  // Vendor List
  const vendorOptions = [
    "On",
    "Saucony",
    "norda",
    "Salomon",
    "The North Face",
    "Asics",
    "PUMA",
    "Altra",
    "Nike",
    "adidas",
  ];

  // Product Type Options
  const productTypeOptions = ["Road Shoes", "Trail Shoes"];

  // Filter shoes based on selected gender, size, vendor, and product type
  const filteredShoes = shoes
    .filter(
      (shoe) => !selectedGender || shoe.gender.toLowerCase() === selectedGender
    )
    .filter(
      (shoe) =>
        selectedSize === "all" ||
        shoe.variants.edges.some(
          (variant) =>
            variant.node.title.includes(selectedSize) &&
            variant.node.availableForSale
        )
    )
    .filter((shoe) => !selectedVendor || shoe.vendor === selectedVendor)
    .filter(
      (shoe) =>
        !selectedProductType || shoe.productType?.includes(selectedProductType)
    )
    .sort((a, b) => (b.availableForSale ? 1 : -1)); // Prioritize in-stock items

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">{title}</h2>

      {/* Filter Section */}
      <div className="flex gap-3 flex-wrap justify-between">
        {/* Gender Filter */}
        <div className="w-full md:w-[29.1875rem] flex gap-[1rem] p-[0.5rem] bg-border-primary rounded-[0.5rem]">
          {[
            { label: "All", value: null },
            { label: "Men", value: "m" },
            { label: "Women", value: "w" },
          ].map(({ label, value }) => (
            <button
              key={value}
              onClick={() => toggleGender(value)}
              className={
                "btn-3 " +
                (selectedGender === value ? "btn-toggle-on" : "btn-toggle-off")
              }
            >
              {label}
            </button>
          ))}
        </div>
        <div className="flex gap-2  items center flex-wrap">
          <div className="relative flex h-[37px] gap-[1rem] !font-secondary border  overflow-hidden">
            <select
              onChange={(e) => setSelectedSize(e.target.value)}
              className="appearance-none p-2 pr-8  w-full"
            >
              <option value="all">All Sizes</option>
              {Array.from({ length: 17 }, (_, i) => 5 + i * 0.5).map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
              {faChevronDown("h-[1rem] ")}
            </span>
          </div>
          {/* Vendor Filter */}
          <div className="relative flex h-[37px] gap-[1rem] !font-secondary border r overflow-hidden">
            <select
              onChange={(e) => setSelectedVendor(e.target.value)}
              className="appearance-none p-2 pr-8 rounded-md w-full"
            >
              <option value="">All Brands</option>
              {vendorOptions.map((vendor) => (
                <option key={vendor} value={vendor}>
                  {vendor}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
              {faChevronDown("h-[1rem] ")}
            </span>
          </div>

          {/* Product Type Filter */}
          <div className="relative flex h-[37px] gap-[1rem] !font-secondary border  overflow-hidden">
            <select
              onChange={(e) => setSelectedProductType(e.target.value)}
              className="appearance-none p-2 pr-8  w-full"
            >
              <option value="">All Types</option>
              {productTypeOptions.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2">
              {faChevronDown("h-[1rem] ]")}
            </span>
          </div>
        </div>
      </div>

      {/* Display Shoes */}
      {filteredShoes.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-[1rem] gap-y-[2rem] ">
          {filteredShoes.map((shoe) => (
            <ABCollectionsCard
              key={shoe.id}
              node={shoe}
              // currentUser={currentUser}
            />
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500">
          No shoes match your filters.
        </div>
      )}
    </div>
  );
}
