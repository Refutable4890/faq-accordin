import { CSSProperties, ReactNode } from "react";

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
                "--bg-img-mobile": `url(/background-pattern-mobile.svg)`,
                "--bg-img-desktop": `url(/background-pattern-desktop.svg)`,
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
