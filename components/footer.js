import { ImLinkedin, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";
import Newslatter from "./_child/newsletter";

export default function footer() {
  

  return (
    <footer className="bg-gray-50">
      <Newslatter></Newslatter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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

          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved
          </p>
          <p className="text-gray-400 text-center">
            Terms & Condition | Privacy Policy
          </p>
        </div>
      </div>
    </footer>
  );
}
