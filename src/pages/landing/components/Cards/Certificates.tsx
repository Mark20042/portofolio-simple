import { useState } from "react";
import { certificates } from "../../../../data/certificates";
import { X } from "lucide-react";
const Certificates = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3;

  const totalPages = Math.ceil(certificates.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentCertificates = certificates.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  return (
    <>
      <div className="bg-white dark:bg-[#121212] rounded-lg p-4 sm:p-6 mt-6 h-full flex flex-col justify-between transition-colors duration-300">
        <div>
          <h1 className="text-lg sm:text-xl font-bold mb-6 text-gray-700 dark:text-gray-100 flex items-center">
            Recent Certificates
          </h1>

          <div className="flex flex-col gap-5">
            {currentCertificates.map((cert, index) => (
              <div
                key={index}
                onClick={() => cert.image && setSelectedImage(cert.image)}
                className="border border-gray-100 dark:border-gray-700 rounded-lg p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-800 bg-gray-100 dark:bg-[#2A2A2A] duration-300 cursor-pointer"
              >
                <h3 className="text-sm font-bold text-gray-800 dark:text-gray-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-gray-400 dark:text-gray-400 text-xs mb-1">
                  {cert.issuer}
                </p>
              </div>
            ))}
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentPage === index
                    ? "w-3.5 bg-gray-800 dark:bg-gray-200"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md bg-black/20 dark:bg-black/50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative p-2 rounded-lg shadow-xl max-w-3xl max-h-[90vh] overflow-auto bg-white dark:bg-zinc-900 border dark:border-zinc-800">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 rounded-full p-1 text-gray-700 dark:text-gray-300 transition cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800"
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
