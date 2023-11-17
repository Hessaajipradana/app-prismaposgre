import React from "react";

export const metadata = {
  title: "Produk Layout",
  description: "ini home produk",
}


const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      {children}
    </div>
  );
};

export default ProductLayout;

