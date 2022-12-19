import Layout from "../components/layout";
import Head from "next/head";
import { TOKEN, DATABASE_ID_PROJECTS } from "../config/index";
import ProjectItem from "../components/projects/project-item";

export default function Projects({ projects }) {
  console.log("projects", projects);
  return (
    <>
      <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen px-6 py-10 mb-10">
          <Head>
            <title>Centum_Joonho_Portfolio</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <h1>
            Total Projects:
            <span className="pl-4 text-blue-500">
              {projects.results.length}
            </span>
          </h1>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.results &&
              projects.results.map((aProject) => (
                <ProjectItem key={aProject.id} data={aProject} />
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
}
//빌드 타임에 호출 !  딱 1번
export async function getStaticProps() {
  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Notion-Version": "2022-06-28",
      "content-type": "application/json",
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: "Name",
          direction: "ascending",
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID_PROJECTS}/query`,
    options
  );
  const projects = await res.json();
  // const projectIds = projects.results.map((project) => project.id);
  // console.log("project.id", projectIds);

  // const projectNames = projects.results.map(
  //   (project) => project.properties.Name.title[0]?.plain_text
  // );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
