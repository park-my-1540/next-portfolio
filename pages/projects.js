import Layout from '../components/layout'
import ProjectItem from '../components/projects/project-item'
import Head from "next/head";
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({projects}){
    const total = projects.results?.length;
    return (
        <>
        <Layout>
            <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10">
                <Head>
                    <title>먕코딩</title>
                </Head>
                <h1 className='text-4xl font-bold sm:text-6xl'>총 프로젝트에요 <span className='pl-4 text-blue-500'>{total}</span></h1>
                

                <div className="grid grid-cols-1 md:grid-cols-2 py-10 m-6 gap-8 sm:w-full">
                {
                    projects.results?.map((aProject, index) => (
                        <ProjectItem key={aProject.id} data={aProject}/>
                    ))
                }
                </div>
            </div>


        </Layout>   
        </>
    )
}

// 빌드 타임에 호출
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Notion-Version': '2022-06-28',
          'content-type': 'application/json',
          Authorization:`Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            page_size:100
        })
      };
      
      const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options)
      const projects = await res.json();
      
      // string 배열로 id 가져오는것.
    // const projectNames = projects.results.map(aProject => aProject.properties.이름.title[0].plain_text)
    // console.log(projectNames); // 서버
    return {
        props : {projects}
    }
}