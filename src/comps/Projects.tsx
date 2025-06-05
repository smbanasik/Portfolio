
interface ProjectProps {
    title: string,
    description: string,
    repoLink: string,
    techStack: Array<string>
}


// TODO: Key features or challenges overcome (bullet points)
// What makes it interesting, what hurdles did you solve, what did you learn?
// TODO: dates
// TODO: optional: future plans
// TODO: reflections

function Project({title, description, repoLink, techStack}:  ProjectProps) {

    let techStackFormatted = techStack.slice(0, -1);
    techStackFormatted = techStackFormatted.map(elem =>
        elem + ", "
    )
    techStackFormatted.push(techStack[techStack.length - 1])

    return (
        <>
        <h3><a href={repoLink}>{title}</a></h3>
        <p>{description}</p>
        <p>Tech Stack: {techStackFormatted}</p>
        </>
    )
}

export function ProjectsTab() {
    return (
        <>
        <h2>Projects</h2>
        <Project
        title={"This Portfolio"}
        description={"A portfolio website created using typescript and react, and hosted on AWS."}
        repoLink={"https://github.com/smbanasik/Portfolio"}
        techStack={["React", "Typescript", "AWS"]}
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