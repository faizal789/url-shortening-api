import { FunctionComponent, useContext } from "react";
import UrlContext from "../UrlContext";
import ResultElement from "../components/ResultElement";
import clipboardCopy from "clipboard-copy";

interface AdvancedStatisticProps {}

const AdvancedStatistic: FunctionComponent<AdvancedStatisticProps> = () => {
  const { result, setResult } = useContext(UrlContext);
  let id = 0;

  function handleClick(id: number) {
    setResult((prevValue) => {
      return prevValue.map((element) => {
        if (element.urlId === id) {
          const handleCopyClick = async () => {
            try {
              await clipboardCopy(element.shortenedUrl);
              console.log("successful copying of text");
            } catch (error) {
              console.error("Failed to copy text", error);
            }
          };
          handleCopyClick();
          return {
            ...element,
            isCopied: true,
          };
        }
        return element;
      });
    });
  }

  return (
    <section className="w-full flex flex-col bg-slate-100 justify-center items-center gap-20 px-24 max-sm:px-8 py-28 relative">
      <div className="w-full">
        {result.map((element) => (
          <ResultElement
            key={id++}
            id={element.urlId}
            originalUrl={element.originalUrl}
            shortenedUrl={element.shortenedUrl}
            isCopied={element.isCopied}
            handleClick={handleClick}
          ></ResultElement>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-center text-3xl">Advanced Statistics</h2>
        <p className="text-center max-w-[560px]">
          Track how your links are performing across the web with our advanced
          statistics dasboard.
        </p>
      </div>
      <div className="flex max-lg:flex-col max-lg:gap-16 max-lg:items-center gap-8 relative">
        <div className="bg-cyan-primary w-11/12 h-2 max-lg:w-2 max-lg:h-4/6 max-lg:mx-auto max absolute top-32"></div>
        <div className="h-max bg-white p-8 relative rounded-lg">
          <img
            width={80}
            src="images/icon-brand-recognition.svg"
            className="bg-dark-violet-primary p-3 rounded-full absolute -top-10 left-10 max-md:left-0 max-md:right-0 max-md:mx-auto"
            alt="icon image"
          />
          <h3 className="mt-6 mb-3 max-md:text-center">Brand Recognition</h3>
          <p className="max-md:text-center">
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>
        <div className="h-max bg-white p-8 relative rounded-lg mt-10 max-lg:mt-0">
          <img
            width={80}
            src="images/icon-detailed-records.svg"
            className="bg-dark-violet-primary p-3 rounded-full absolute -top-10 left-10 max-md:left-0 max-md:right-0 max-md:mx-auto"
            alt="icon image"
          />
          <h3 className="mt-6 mb-3 max-md:text-center">Detailed Records</h3>
          <p className="max-md:text-center">
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>
        <div className="h-max bg-white p-8 relative rounded-lg mt-20 max-lg:mt-0">
          <img
            width={80}
            src="images/icon-fully-customizable.svg"
            className="bg-dark-violet-primary p-3 rounded-full absolute -top-10 left-10 max-md:left-0 max-md:right-0 max-md:mx-auto"
            alt="icon image"
          />
          <h3 className="mt-6 mb-3 max-md:text-center">Fully Customizable</h3>
          <p className="max-md:text-center">
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdvancedStatistic;
