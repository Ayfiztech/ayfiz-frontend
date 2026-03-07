import React, { useEffect, useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const GallerySection = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch(
          "https://demo.ayfiz.com/ayfiz/api/gallery-images"
        );

        const data = await res.json();

        const apiImages = data.gallery_images[0].images;
        console.log('apiImages', apiImages);
        setImages(apiImages);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  const layoutStructure = [
    { colSpan: 6, rowSpan: 3 },
    { colSpan: 3, rowSpan: 1 },
    { colSpan: 3, rowSpan: 3 },
    { colSpan: 3, rowSpan: 2 },
    { colSpan: 3, rowSpan: 1 },
    { colSpan: 3, rowSpan: 1 },
  ];
  const colSpanClasses = {
    3: "md:col-span-3",
    6: "md:col-span-6",
  };

  const rowSpanClasses = {
    1: "md:row-span-1",
    2: "md:row-span-2",
    3: "md:row-span-3",
  };

  const galleryItems = layoutStructure.map((layout, index) => ({
    ...layout,
    src: images[index] || "",
  }));

  if (loading) return <p className="text-white text-center">Loading...</p>;

  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16">
          Candid. Unfiltered. Just another day at Ayfiz.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px] md:auto-rows-[150px]">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${colSpanClasses[item.colSpan]} ${rowSpanClasses[item.rowSpan]} overflow-hidden`}            >
              <img
                src={item.src}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}

          {/* Explore Card */}
          {/* <div className="md:col-span-3 md:row-span-1 bg-[#1A1A1A] p-6 flex flex-col justify-end group cursor-pointer hover:bg-[#252525] transition-colors">
            <p className="text-gray-300 text-sm mb-2">Explore more</p>
            <HiOutlineArrowNarrowRight className="text-2xl transition-transform group-hover:translate-x-2" />
          </div> */}
        </div>
      </div>
    </section>
  );  
};

export default GallerySection;