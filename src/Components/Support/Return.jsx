import React, { useEffect, useState } from "react";

const Return = () => {
  const [returnText, setReturnText] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchReturnText = async () => {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/SectionText/STX006`,
        {
          method: "GET",
          headers: {
            APIKey: process.env.REACT_APP_API_KEY,
          },
        }
      );
      const data = await response.json();
      setReturnText(data.data.sectionBodyText);
    };

    fetchReturnText();
  }, []);

  return (
    <div className="bg-white text-black min-h-screen px-6 md:px-20 font-sans pt-[50px]">
      <div className="w-[90%] xl:w-[85%] mx-auto h-[200px] md:h-[200px] flex flex-col justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]">
          Return Policy.{" "}
          <span className="text-gray-500">Extreme Computers</span>
        </h1>
      </div>
      <div className="w-[90%] xl:w-[85%] mx-auto font-overpass">
        <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-4xl font-overpass">
          {returnText}
        </p>
      </div>
    </div>
  );
};

export default Return;
