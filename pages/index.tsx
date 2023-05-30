import { Inter } from "next/font/google";
import Loading from "@/components/Loading";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [pageLoading, setPageLoading] = useState(true);

  setTimeout(() => {
    setPageLoading(false);
  }, 2000);

  return (
    <div>
      {pageLoading ? (
        <Loading />
      ) : (
        <div>
          <h1 className="text-xl font-bold">Welcome, Indra!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            nemo ipsa iste enim earum quis corrupti facilis voluptatem cum
            veniam.
          </p>
        </div>
      )}
    </div>
  );
}
