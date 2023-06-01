import Link from "next/link";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";

export default function Home() {
  return (
    <>
      <div>
        <p className="font-light">
          Hey, I am <span className="font-bold">Yasya Indra.</span> I work as
          software engineer who actively build project that might fit to any
          business.
        </p>
      </div>
      <div className="flex mt-5">
        <div className="flex flex-row items-center">
          <AiOutlineInstagram />
          <Link href="https://www.instagram.com/yasyaindra/" className="ml-2">
            Instagram
          </Link>
        </div>
        <div className="flex flex-row items-center mx-5">
          <AiOutlineGithub />
          <Link href="https://www.instagram.com/yasyaindra/" className="ml-2">
            Github
          </Link>
        </div>
      </div>
    </>
  );
}
