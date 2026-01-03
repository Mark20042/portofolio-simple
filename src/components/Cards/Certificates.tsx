import { useState } from "react";
import { certificates } from "../../data/certificates";
import { BadgeCheck, X } from "lucide-react";

const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // 1. Pagination State
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  // 2. Calculate pagination logic
  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentCertificates = certificates.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <>
      {/* Certificates Card */}
      <div className="bg-white shadow-md rounded-lg p-6 mt-6 h-full flex flex-col justify-between">
        <div>
          <h1 className="text-2xl font-bold mb-6 text-gray-700">
            <BadgeCheck className="inline mr-1 mb-0.5" size={22} />
            Recent Certificates
          </h1>

          <div className="flex flex-col gap-5">
            {/* 3. Map through the SLICED list (currentCertificates) */}
            {currentCertificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => cert.image && setSelectedImage(cert.image)}
                className="border border-gray-100 rounded-lg p-4 shadow-sm hover:shadow-lg transition-shadow bg-gray-100 duration-300 cursor-pointer"
              >
                <h3 className="text-md font-bold text-gray-800 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Bullet/Dot Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                // Dynamic class: Darker and wider if active, light gray if inactive
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-3.5 bg-gray-800"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal Overlay (Unchanged) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-2 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 rounded-full p-1 text-gray-700 transition cursor-pointer hover:bg-gray-200"
            >
              <X size={24} />
            </button>
            <img
              src={selectedImage}
              alt="Certificate"
              className="max-w-full max-h-[85vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Certificates;
