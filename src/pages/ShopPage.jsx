import React from "react";
import { Link } from "react-router-dom";

const ShopPage = () => {
  return (
    <section className="bg-black h-[100vh] px-10">
      <Link
        to="/"
        className="hover:text-white hover:ease-linear duration-150 btn font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Home
      </Link>
      <div className="flex justify-center py-72">
        <h1 className="text-3xl font-bold text-white">Coming Soon...</h1>
      </div>
    </section>
  );
};

export default ShopPage;
