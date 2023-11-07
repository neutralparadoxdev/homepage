import { PageMain } from "./features/page-main/page-main";

export default function Home() {
  return (
    <PageMain>
      <h1 className="text-4xl font-bold pb-2">Welcome to my HomePage</h1>
      <h3 className="text-2xl font-medium pb-2">My corner of the internet</h3>
      <p>This page is meant to provide information regarding projects as I work on them.</p>
      <p>Please head over to the projects tab to see them.</p>
      <p>If you are wondering about me, look at the About me for information regarding me and the site.</p>
    </PageMain>
  )
}
