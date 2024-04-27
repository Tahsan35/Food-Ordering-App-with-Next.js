import Image from "next/image";

export default function MenuItem(menuItem) {
  const { image, name, description, basePrice, sizes, extraIngredientPrices } =
    menuItem;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
        <div className="my-8 bg-white p-2 rounded-lg max-w-md">
          <div
            className="overflow-y-scroll p-2"
            style={{ maxHeight: "calc(100vh - 100px)" }}
          >
            <Image
              src={image}
              alt={name}
              width={300}
              height={200}
              className="mx-auto"
            />
            <h2 className="text-lg font-bold text-center mb-2">{name}</h2>
            <p className="text-center text-gray-500 text-sm mb-2"></p>
            <div className="py-2">
              <h3 className="text-center text-gray-700">Pick your size</h3>
              <button className="mt-2">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
