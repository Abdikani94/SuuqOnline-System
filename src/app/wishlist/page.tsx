"use client";

import Link from "next/link";
import { ArrowRight, Heart, ShoppingCart, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";

export default function WishlistPage() {
  const { addToCart } = useCart();
  const { items, removeFromWishlist, clearWishlist, totalItems } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center px-4">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Your wishlist is empty</h1>
          <p className="text-gray-600 mb-6">Save products you love and come back to them anytime.</p>
          <Link
            href="/products"
            className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
          >
            Browse Products
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Wishlist</h1>
              <p className="text-gray-600 mt-1">
                {totalItems} saved {totalItems === 1 ? "item" : "items"}
              </p>
            </div>
            <button
              onClick={clearWishlist}
              className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg font-medium hover:border-red-300 hover:text-red-600 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Clear Wishlist
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {items.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <Link href={`/products/${product.id}`} className="block aspect-square bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-5">
                <p className="text-xs text-primary-600 font-medium mb-1">{product.category}</p>
                <Link
                  href={`/products/${product.id}`}
                  className="block font-semibold text-gray-900 hover:text-primary-600 transition-colors line-clamp-2"
                >
                  {product.name}
                </Link>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-xl font-bold text-gray-900">${product.price}</span>
                  {!product.inStock && (
                    <span className="text-sm font-medium text-red-600">Out of stock</span>
                  )}
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-3 mt-5">
                  <button
                    onClick={() => addToCart(product, 1)}
                    disabled={!product.inStock}
                    className="inline-flex items-center justify-center gap-2 bg-primary-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-primary-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="p-2 border border-gray-300 text-gray-500 rounded-lg hover:border-red-300 hover:text-red-600 transition-colors"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mt-8"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
