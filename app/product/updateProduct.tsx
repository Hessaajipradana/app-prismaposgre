"use client";
import React from "react";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

type Product = {
  id: number;
  title: string;
  price: number;
  brandId: number;
};

const UpdateProduct = ({
  product,
  brands,
}: {
  brands: Brand[];
  product: Product;
}) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [brandId, setBrandId] = useState(product.brandId);
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleUpdate = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.patch(`/api/products/${product.id}`, {
      title: title,
      price: Number(price),
      brandId: Number(brandId),
    });
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-info btn-sm" onClick={handleModal}>
        edit
      </button>

      <div className={`modal ${isOpen ? "modal-open" : "modal glass"}`}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">update {product.title} </h3>
          <form onSubmit={handleUpdate}>
            <div className="form-control w-full">
              <label className="label font-bold">product name</label>
              <input
                type="text"
                placeholder="product name"
                className="input input-bordered w-full"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">price</label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered w-full"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">brand</label>
              <select
                className="select select-bordered"
                value={brandId}
                onChange={(e) => setBrandId(Number(e.target.value))}
              >
                {brands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="modal-action">
              <button
                type="button"
                className="btn btn-error"
                onClick={handleModal}
              >
                close
              </button>
              <button type="submit" className="btn btn-primary">
                update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
