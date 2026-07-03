import PharmaProducts from "@/components/products/PharmaProducts";
import ProjectHome from "@/components/products/ProjectHome";
import ProjectLast from "@/components/products/ProjectLast";
import { createPageMetadata } from "@/lib/seo";
import React from "react";

const page = () => {
  return (
    <>
      <ProjectHome />
      <PharmaProducts />
      <ProjectLast />
    </>
  );
};

export default page;

export async function generateMetadata() {
  return createPageMetadata("/products");
}
