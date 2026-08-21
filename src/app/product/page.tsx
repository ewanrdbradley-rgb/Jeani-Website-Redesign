import type { Metadata } from "next";
import ProductClient from "@/components/ProductClient";

export const metadata: Metadata = {
  title: "Product",
  description:
    "Set your goal, keep one continuous record, and get a dashboard that rebuilds around you.",
};

export default function ProductPage() {
  return <ProductClient />;
}
