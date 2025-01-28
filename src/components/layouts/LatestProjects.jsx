import React, { useState } from "react";
import asset1 from "../../assets/asset1.png";
import asset2 from "../../assets/asset2.png";
import asset3 from "../../assets/asset3.png";
import asset4 from "../../assets/asset7.png";
import asset5 from "../../assets/asset5.png";
import asset6 from "../../assets/asset6.png";


function ImageEnlargable({ src, alt }) {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleClick = () => setIsZoomed(true);
  const handleClose = () => setIsZoomed(false);

  return (
    <>
      <img
        data-enlargable
        src={src}
        alt={alt}
        className="cursor-zoom-in h-48 w-96 object-top object-cover"
        onClick={handleClick}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      {isZoomed && (
        <div
          onClick={handleClose}
          style={{
            background: `rgba(0, 0, 0, 0.5) url(${src}) no-repeat center`,
            backgroundSize: "contain",
            width: "100%",
            height: "100%",
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 10000,
            cursor: "zoom-out",
          }}
        />
      )}
    </>
  );
}

function LatestProjects() {
  return (
    <div>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden antialiased">
        <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col justify-center divide-slate-200 [&>*]:py-16">
            <h2 className="text-2xl text-gray-600 text-center">
              My Work Experience
            </h2>

            <div className="w-full mx-auto grid grid-cols-3 gap-4">
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top object-cover"
                  src={asset1}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    Zotify
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is about the stock market.

                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stockmarket
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #currency
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top object-cover"
                  src={asset2}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    Aire
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is about the stock market.








                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stockmarket
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #currency
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top object-cover"
                  src={asset3}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    Ifcontech
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is for a Malaysian company.















                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #companyprofile
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #landingpage
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top"
                  src={asset4}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    Zoomrah
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is for a umrah travel.








                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #umrah
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #travel
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top object-cover"
                  src={asset5}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    RHB Islamic Bank
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is for a Malaysian islamic bank.








                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #bank
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #currency
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                </div>
              </div>
              <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <ImageEnlargable
                  className="h-48 w-96 object-top object-cover"
                  src={asset6}
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-secondary text-xl mb-2">
                    Tokenify
                  </div>
                  <p className="text-gray-700 text-base">
                  This project is for a stock market.








                  </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #stockmarket
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #currency
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #malaysia
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LatestProjects;
