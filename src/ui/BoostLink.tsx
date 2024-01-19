import { FunctionComponent } from "react";

interface BoostLinkProps {}

const BoostLink: FunctionComponent<BoostLinkProps> = () => {
  return (
    <section className="flex flex-col gap-4 justify-center items-center h-60 bg-dark-violet-primary bg-boost-desktop bg-cover bg-no-repeat">
      <h2 className="text-white max-sm:text-2xl">Boost your links today</h2>
      <button className="bg-cyan-primary px-6 py-3 text-white rounded-full hover:opacity-50 active:scale-95 cursor-pointer transition duration-300">
        Get started
      </button>
    </section>
  );
};

export default BoostLink;
