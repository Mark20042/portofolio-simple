import { useState } from "react";
import { galleryItems } from "../../../../data/gallery";
import { X } from "lucide-react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="relative overflow-hidden py-4 sm:py-6">
        <h2 className="text-base sm:text-lg md:text-xl font-bold mb-4 sm:mb-6 text-gray-700 dark:text-gray-100 flex items-center">
          Gallery
        </h2>
        <div className="[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)] sm:[mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
          <div
            className="flex w-max animate-marquee gap-2 sm:gap-4 hover:[animation-play-state:paused]"
            style={{ animationDuration: "45s" }}
          >
            {[...galleryItems, ...galleryItems].map((item, i) => (
              <div
                key={i}
                onClick={() => setSelectedImage(item.image)}
                className="w-36 h-24 sm:w-48 sm:h-32 md:w-64 md:h-52 rounded-lg sm:rounded-xl  dark:bg-gray-700 shrink-0 overflow-hidden cursor-pointer transition-all duration-500 group"
              >
                <img
                  src={item.image}
                  alt={`Gallery item ${i}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 dark:bg-black/50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-2 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto dark:bg-zinc-900 ">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 rounded-full p-1 text-gray-700 dark:text-gray-300 transition cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Gallery"
              className="max-w-full max-h-[85vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
