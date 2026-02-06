import { CgMathPlus } from "react-icons/cg";
import imgOne from "../assets/imgOne.png";
import imgTwo from "../assets/imgTwo.png";
import imgThree from "../assets/imgThree.png";
import imgFour from "../assets/imgFour.png";

export default function CategoryProducts() {
  const products = [
    {
      id: 1,
      name: "Classic Wagyu Burger",
      ingredients: "Organic beef, cheddar, truffle mayo",
      price: 18.5,
      img: imgOne,
    },
    {
      id: 2,
      name: "Truffle Margherita",
      ingredients: "Buffalo mozzarella, fresh basil",
      price: 22.0,
      img: imgTwo,
    },
    {
      id: 3,
      name: "Avocado Power Bowl",
      ingredients: "Quinoa, baby spinach, citrus dressing",
      price: 14.2,
      img: imgThree,
    },
    {
      id: 4,
      name: "crispy calamari",
      ingredients: "Zesty lemon, homemade tartare",
      price: 12.5,
      img: imgFour,
    },
  ];

  return (
    <div className="flex flex-col gap-9 p-10.5">
      <div className="w-full flex justify-between items-center">
        <h1 className="font-lexend text-[30px] text-[#0F172B] font-bold capitalize">
          main course
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
        {products.map((el) => (
          <div
            key={el.id}
            className="p-4 flex flex-col gap-5 rounded-4xl w-68.25 shadow-[0px_-1px_2px_-1px_#0000001A,0px_1px_3px_0px_#0000001A] border border-[#F1F5F9]"
          >
            <div className="w-full h-68.25">
              <img
                src={el.img}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="flex flex-col gap-1 w-full ">
              <h1 className="font-lexend font-bold text-[18px] text-[#0F172B] capitalize">
                {el.name}
              </h1>
              <p className="text-[12px] text-[#90A1B9]">{el.ingredients}</p>
              <div className="w-full flex justify-between items-center py-3 px-1">
                <span className="text-mainGreen text-[20px] font-bold">
                  ${el.price}
                </span>
                <button className="bg-mainGreen h-10 w-10 rounded-xl flex justify-center items-center text-white text-[20px]">
                  <CgMathPlus />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
