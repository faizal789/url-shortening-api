import { FunctionComponent } from "react";

interface ResultElementProps {
  id: number;
  originalUrl: string;
  shortenedUrl: string;
  isCopied: boolean;
  handleClick: (id: number) => void;
}

const ResultElement: FunctionComponent<ResultElementProps> = ({
  id,
  originalUrl,
  shortenedUrl,
  isCopied,
  handleClick,
}) => {
  return (
    <div className="bg-white flex max-lg:flex-col max-lg:items-start max-lg:gap-4 items-center justify-between p-3 mt-4 rounded-lg shadow-lg ">
      <div className="w-2/3 max-xl:max-w-[480px] max-lg:min-w-full max-lg:border-b max-lg:pb-2">
        <p className="text-black overflow-auto">{originalUrl}</p>
      </div>
      <div className="flex items-center max-lg:flex-col max-lg:items-start gap-4 max-md:w-full">
        <span className="text-cyan-primary">{shortenedUrl}</span>
        <button
          onClick={() => handleClick(id)}
          className={`${
            isCopied ? "bg-very-dark-violet-neutral" : "bg-cyan-primary"
          } max-md:w-full py-2 px-4 rounded-md text-white hover:opacity-50 active:scale-95 cursor-pointer transition duration-300`}
        >
          {isCopied ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default ResultElement;
