import { gridItems } from "@/data";
import React from "react";

interface GridItem {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
}

const Grid = () => {
  return (
      <section id="about" className=" grid md:grid-cols-4 lg:grid-cols-6 grid-cols-1 gap-10 p-4 w-full ">
        {gridItems.map((item) => (
          <div
            key={item.id}
            className={`relative ${item.className}  bg-gray-950 dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg`}
          >
            <img
              src={item.img}
              alt={item.title}
              className={`object-cover hover:scale-105   ${item.imgClassName}`}
            />
            <div
              className={`absolute bottom-0 left-0 p-4 ${item.titleClassName}`}
            >
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </section >
  );
};

export default Grid;
