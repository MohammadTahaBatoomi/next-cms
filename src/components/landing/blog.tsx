import Link from "next/link";
import Image from "next/image";
import { Rating } from "@mui/material";
import { BiSolidBasket } from "react-icons/bi";

const ecoCard = [
  {
    title: "Boat Headphone",
    subheader: "September 14, 2023",
    photo: "/images/landing/p-1.jpg",
    salesPrice: 375,
    price: 285,
    rating: 4,
  },
  {
    title: "MacBook Air Pro",
    subheader: "September 14, 2023",
    photo: "/images/landing/p-2.jpg",
    salesPrice: 650,
    price: 900,
    rating: 5,
  },
  {
    title: "Red Valvet Dress",
    subheader: "September 14, 2023",
    photo: "/images/landing/p-3.jpg",
    salesPrice: 150,
    price: 200,
    rating: 3,
  },
  {
    title: "Cute Soft Teddybear",
    subheader: "September 14, 2023",
    photo: "/images/landing/p-4.jpg",
    salesPrice: 285,
    price: 345,
    rating: 2,
  },
];

const ProductCard = ({ product }: { product: (typeof ecoCard)[0] }) => {
  return (
    <div className="relative rounded-xl overflow-hidden shadow hover:shadow-lg transition-all duration-300">
      <Link href="/" className="block">
        <Image
          src={product.photo}
          alt={product.title}
          width={500}
          height={250}
          className="w-[300px] h-[250px] object-cover"
        />
      </Link>

      <button className="absolute bottom-17 right-4 bg-[#5d87ff] text-white rounded-full p-3 shadow-md">
        <BiSolidBasket size={16} />
      </button>

      <div className="p-4">
        <h3 className="text-base font-medium text-gray-800">{product.title}</h3>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center space-x-2">
            <span className="text-sm font-semibold text-gray-800">
              ${product.price}
            </span>
            <span className="text-sm line-through text-gray-500">
              ${product.salesPrice}
            </span>
          </div>
          <Rating value={product.rating} size="small" readOnly />
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {ecoCard.map((product, index) => (
        <ProductCard product={product} key={index} />
      ))}
    </div>
  );
};

export default Blog;
