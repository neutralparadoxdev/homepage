import { FC, PropsWithChildren } from "react";
import { Nav } from "../nav/nav";

export const PageMain: FC<PropsWithChildren<{}>> = ({ children } : PropsWithChildren<{}>) => {
    return <>
    <main className="flex flex-row min-h-full">
      <section className="h-screen w-32 pt-10 border-2 border-transparent border-r-black pt-5">
        <Nav />
      </section>
      <section className="h-screen grow pl-5 pt-5">
        {children}
      </section>
    </main>
    </>;

}