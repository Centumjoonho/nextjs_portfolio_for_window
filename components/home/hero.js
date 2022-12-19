import Anime from "./anime";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col items-center mb-16 text-center lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 md:items-start md:text-left md:mb-0">
        <h1 className="mb-4 text-3xl font-medium text-gray-900 title-font sm:text-4xl">
          Centum 준호입니다.
          <br className="hidden lg:inline-block" />
          <br></br>
          2023년
        </h1>
        <p className="mb-8 leading-relaxed">
          부산 센텀 소프트웨어 개발자
          <br></br>
          Better late than never
          <br></br>
        </p>
        <div className="flex justify-center">
          <Link href="/projects" legacyBehavior>
            <a className="btn-project">My Projects</a>
          </Link>
        </div>
      </div>
      <div className="w-5/6 lg:max-w-lg lg:w-full md:w-1/2">
        <Anime></Anime>
      </div>
    </>
  );
}
