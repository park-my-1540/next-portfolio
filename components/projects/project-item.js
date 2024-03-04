import Image from "next/image";

export default function ProjectItem({data}){
    const title = data.properties.이름.title[0].plain_text;
    const githunLink = data.properties.Github.url;
    const desc = data.properties.Desc.rich_text[0].plain_text;
    const imgSrc = data.cover.file?.url || data.cover.external.url;
    const tags = data.properties.태그.multi_select;
    const startString = data.properties.WorkPeriod.date.start;
    const endString = data.properties.WorkPeriod.date.end;

    const calculatedPeriod = (start, end) => {
        const startDateStringArr = start.split('-');
        const endDateStringArr = end.split('-');

        let startDate = new Date(startDateStringArr[0], startDateStringArr[1], startDateStringArr[2]);
        let endDate = new Date(endDateStringArr[0], endDateStringArr[1], endDateStringArr[2]);

        const diffInMs = Math.abs(endDate - startDate); // 절대값
        const result = diffInMs / (1000*60*60*24);

        return result;
    }


    return (
        <div className="project-card">
            <Image
                className="rounded-t-xl"
                src = {imgSrc}
                width="100"
                height="60"
                layout="responsive"
                objectFit="none"
                quality={100}
                alt="converImage"
            />
            <div className="p-4 flex flex-col w-full">
                <h1 className="text-2xl font-bold">{title}</h1>
                <h3 className="mt-4 text-xl">{desc}</h3>
                <a href={githunLink} target="_blank">깃허브 바로가기</a>
                <p className="my-1">
                    작업기간 : {startString} ~ {endString} {calculatedPeriod(startString, endString)}일
                </p>
                <div className="flex items-start mt-2">
                    {tags.map((aTag) => (
                        <h1 key={aTag.id} className="px-2 py-1 mr-2 rounded-md bg-sky-300 dark:bg-sky-700 w-30">{aTag.name}</h1>
                    ))}
                </div>
            </div>
        </div>
    )
}