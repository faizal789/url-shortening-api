import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import React, {
  FormEvent,
  FunctionComponent,
  useContext,
  useEffect,
} from "react";
import UrlContext from "../UrlContext";

interface LinkShortenerProps {}

interface Params {
  url: string;
}

const LinkShortener: FunctionComponent<LinkShortenerProps> = () => {
  const { result, setResult } = useContext(UrlContext);
  const [url, setUrl] = React.useState<string>("");

  const mutation = useMutation({
    mutationFn: (params: Params) => {
      return axios.post(
        "https://url-shortening-api-proxy-faizal-raflis-projects.vercel.app/api/proxy",
        params
      );
    },
  });

  useEffect(() => {
    if (mutation.data?.data.result_url !== undefined) {
      setResult((prevValue) => [
        ...prevValue,
        {
          urlId: Date.now(),
          originalUrl: url,
          shortenedUrl: mutation.data?.data.result_url,
          isCopied: false,
        },
      ]);
      setUrl("");
    }
  }, [mutation.data?.data.result_url]);

  useEffect(() => {
    if (result.length !== 0) {
      const data = result.map((element) => ({
        urlId: element.urlId,
        originalUrl: element.originalUrl,
        shortenedUrl: element.shortenedUrl,
      }));
      localStorage.setItem("arrShortenedLink", JSON.stringify(data));
    }
  }, [result]);

  function handleUrlChange(e: React.ChangeEvent<HTMLInputElement>) {
    setUrl(e.target.value);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    mutation.mutate({
      url,
    });
  }

  return (
    <section className="flex justify-center mx-24 max-sm:mx-8 bg-very-dark-violet-neutral items-center bg-shorten-desktop h-48 bg-cover bg-no-repeat rounded-lg absolute -bottom-24 left-0 right-0 z-30">
      <form
        onSubmit={handleSubmit}
        className="w-full flex max-md:flex-col gap-4 p-12 max-sm:p-8"
      >
        <div className="w-10/12 flex flex-col gap-2">
          <input
            type="url"
            required
            placeholder="Shorten a link here..."
            className="w-full h-16 rounded-lg px-8 max-md:w-full"
            value={url}
            onChange={handleUrlChange}
          />
          {mutation.isSuccess ? (
            <div className="text-cyan-primary">A short link has been added</div>
          ) : null}
        </div>
        <button className="w-1/6 h-16 bg-cyan-primary rounded-lg text-white  hover:opacity-75 active:scale-95 cursor-pointer transition duration-300 max-md:w-full">
          Shorten it!
        </button>
      </form>
    </section>
  );
};

export default LinkShortener;
