import React from "react";
import { Product, CartItem } from "../types";

interface ProductsProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

function Products({ products, addToCart }: ProductsProps) {
  return (
    <section
      id="products"
      className="py-20 bg-gradient-to-br from-purple-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
          Our Products
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Discover our carefully curated collection of Holi essentials, designed
          to make your celebration more colorful and memorable.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 relative">
                  <div className="absolute -top-8 right-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                      Best Seller
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                      ₹{product.price}
                    </div>
                    <div className="space-x-2 sm:px-3 sm:py-1 sm:text-sm xs:px-2 xs:py-1 xs:text-xs justify:center items:center">
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg sm:px-3 sm:py-1 sm:text-sm xs:px-2 xs:py-1 xs:text-xs"
                      >
                        Add Cart
                      </button>

                      <button className="border-2 border-purple-600 text-purple-600 px-4 py-2 rounded-lg hover:bg-purple-50 transition-colors duration-300 hover:border-pink-600 hover:text-pink-600 sm:px-3 sm:py-1 sm:text-sm xs:px-2 xs:py-1 xs:text-xs">
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Products;
