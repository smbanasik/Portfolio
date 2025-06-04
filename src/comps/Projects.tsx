
interface ProjectProps {
    title: string,
    description: string,
    repoLink: string,
    techStack: Array<string>
}

function Project({title, description, repoLink, techStack}:  ProjectProps) {

    let techStackFormatted = techStack.slice(0, -1);
    techStackFormatted = techStackFormatted.map(elem =>
        elem + ", "
    )
    techStackFormatted.push(techStack[techStack.length - 1])

    return (
        <>
        <a href={repoLink}>
        <h2>{title}</h2>
        </a>
        <p>{description}</p>
        <p>Notable Tech: {techStackFormatted}</p>
        </>
    )
}

export function ProjectsTab() {
    return (
        <>
        <h1>Projects</h1>
        <Project
        title={"Test"}
        description={"Testing hard"}
        repoLink={"https://github.com/smbanasik/GarFishEngine"}
        techStack={["apple", "banana"]}
        />
        <Project
        title="TestTwo"
        description="Describing"
        repoLink="github"
        techStack={["appleTwo", "bannanaTwo"]}
        />
        </>
    )
}