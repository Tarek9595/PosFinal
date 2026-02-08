import { useParams } from "react-router-dom";
import { products } from "../Store";
import Plate from "../componenets/Plate";

export default function CategoryProducts() {
  const { categoryName } = useParams();

  const currentCategory = categoryName || "mainCourse";

  const filteredProducts = products.filter(
    (product) => product.kind.toLowerCase() === currentCategory.toLowerCase(),
  );
  return (
    <div className="flex flex-col gap-9 p-10.5">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-lexend text-[30px] text-[#0F172B] font-bold capitalize">
          {currentCategory === "mainCourse" ? "Main Course" : currentCategory}
        </h1>
        <div className="flex gap-1.5">
          <button className="py-2 px-4 rounded-xl border border-[#E2E8F0] text-[#45556C] capitalize">
            filter
          </button>
          <button className="py-2 px-4 rounded-xl border border-[#E2E8F0] text-[#45556C] capitalize">
            sort by
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-8">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((el) => (
            <Plate
              key={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
              ingredients={el.ingredients}
            />
          ))
        ) : (
          <div className="w-full text-center py-20 text-gray-400">
            No products found in this category.
          </div>
        )}
      </div>
    </div>
  );
}
