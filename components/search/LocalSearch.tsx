"use client";
import Image from "next/image";
import { Input } from "../ui/input";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";
import { formUrlQuery, removeKeysFromUrlQuery } from "@/lib/url";

interface Props {
  route: string;
  placeholder: string;
  otherClasses?: string;
  imgSrc: string;
}
const LocalSearch = ({ route, placeholder, otherClasses, imgSrc }: Props) => {
  const pathName = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);
  const previousSearchRef = useRef(searchQuery);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (previousSearchRef.current === searchQuery) return;
      previousSearchRef.current = searchQuery;

      if (searchQuery) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchQuery,
        });

        router.push(newUrl, { scroll: false });
      } else {
        if (route === pathName) {
          const newUrl = removeKeysFromUrlQuery({
            params: searchParams.toString(),
            keysToRemove: ["query"],
          });
          router.push(newUrl, { scroll: false });
        }
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchQuery, route, pathName, router, searchParams]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-14 grow items-center gap-4 rounded-[10px] px-4 ${otherClasses}`}
    >
      <Image src={imgSrc} alt="search-icon" width={24} height={24} className="cursor-pointer" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        className="paragarph-regular no-focus placeholder text-dark-400_light700 border-none shadow-none outline-none"
      />
    </div>
  );
};

export default LocalSearch;
