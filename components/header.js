import { ImLinkedin, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";

export default function header() {
  return (
    <header >
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py-0">
          <input type="text border border-gray-300" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link href={"/"}>
            <a className="font-bold uppercase text-3xl">Design</a>
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <Link href={"/"}>
              <a>
                <ImLinkedin className="icons linkedin"/>
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImTwitter className="icons twitter" />
              </a>
            </Link>
            <Link href={"/"}>
              <a>
                <ImGithub className="icons github"/>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
