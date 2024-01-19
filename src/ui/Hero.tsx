import { FunctionComponent } from "react";
import LinkShortener from "../components/LinkShortener";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <div className="relative pb-44 pt-12">
      <section className="flex gap-8 items-center justify-around max-xl:flex-col-reverse max-xl:pl-0 pl-24  overflow-hidden">
        <div className="max-w-[640px] max-xl:flex max-xl:flex-col max-xl:items-center max-sm:px-8">
          <h1 className="font-bold leading-tight max-xl:text-center max-sm:text-5xl">
            More than just shorter links
          </h1>
          <p className="max-w-[560px] max-xl:text-center mt-4">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="mt-8 bg-cyan-primary px-6 py-3 text-white rounded-full  hover:opacity-50 cursor-pointer transition duration-300">
            Get Started
          </button>
        </div>
        <div>
          <img
            src="images/illustration-working.svg"
            alt="hero image"
            className="ml-20 w-[800px] max-xl:w-10/12 max-md:w-full max-md:ml-10"
          />
        </div>
      </section>
      <section>
        <LinkShortener></LinkShortener>
      </section>
    </div>
  );
};

export default Hero;
