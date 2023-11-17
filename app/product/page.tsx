import React from "react";
import { PrismaClient } from "@prisma/client";
import AddProduct from "./addProduct";
import DeleteProduct from "./deleteProduct";
import UpdateProduct from "./updateProduct";

const prisma = new PrismaClient();

const getProducts = async () => {
  const res = await prisma.product.findMany({
    select: {
      id: true,
      title: true,
      brand: true,
      price: true,
      brandId: true,
    },
  });
  return res;
};

const getBrands = async () => {
  const res = await prisma.brand.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return res;
};

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(price);
};

const Product = async () => {
  const [products, brands] = await Promise.all([getProducts(), getBrands()]);

  return (
    <div className="card shadow-lg">
      <div className="card-body">
        <div className="p-5">
          <div className="mb-2">
            <AddProduct brands={brands} />
          </div>
          <table className="table w-full">
            <thead>
              <tr>
                <th>nomor</th>
                <th>Nama Produk</th>
                <th>Harga</th>
                <th>Merek</th>
                <th className="text-center">Lakukan</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.title}</td>
                  <td>{formatPrice(product.price)}</td>
                  <td>{product.brand.name}</td>
                  <td className="flex justify-center space-x-2">
                    <UpdateProduct product={product} brands={brands} />
                    <DeleteProduct product={product} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Product;
