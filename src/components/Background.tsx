import { CSSProperties, ReactNode } from "react";
import backgroundPatternMobile from "@/assets/background-pattern-mobile.svg";
import backgroundPatternDesktop from "@/assets/background-pattern-desktop.svg";

interface MyCustomCSS extends CSSProperties {
  "--bg-img-mobile": string;
}

export default function Background({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="z-[-1] absolute">
        <div className="h-screen w-screen">
          <div
            className="h-[calc(100%/3)] bg-cover bg-[url:--bg-img-mobile] md:bg-[url:--bg-img-desktop]"
            style={
              {
                "--bg-img-mobile": `url(${backgroundPatternMobile})`,
                "--bg-img-desktop": `url(${backgroundPatternDesktop})`,
              } as MyCustomCSS
            }
          ></div>
          <div className="h-[calc(100%-100%/3)] bg-light-pink"></div>
        </div>
      </div>
      {children}
    </>
  );
}
