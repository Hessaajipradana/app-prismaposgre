"use client";
import React from "react";
import { useState, SyntheticEvent } from "react";
import type { Brand } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";

const AddProduct = ({ brands }: { brands: Brand[] }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [brandId, setBrandId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await axios.post("/api/products", {
      title: title,
      price: Number(price),
      brandId: Number(brandId),
    });
    setTitle("");
    setPrice("");
    setBrandId("");
    router.refresh();
    setIsOpen(false);
  };

  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="btn btn-success" onClick={handleModal}>
        add new
      </button>

      <div className={`modal ${isOpen ? "modal-open" : "modal glass"}`}>
        <div className="modal-box">
          <div className="navbar bg-base-100 items-center text-center justify-center">
            <div className="flex">
              <button className="btn btn-success">add new product</button>
            </div>
          </div>
          <form onSubmit={handleSubmit}>
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
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-control w-full">
              <label className="label font-bold">brand</label>
              <select
                className="select select-bordered"
                value={brandId}
                onChange={(e) => setBrandId(e.target.value)}
              >
                <option disabled selected>
                  select brand
                </option>
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
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
