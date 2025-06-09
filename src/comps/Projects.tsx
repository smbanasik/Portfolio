
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
        <h3><a href={repoLink}>{title}</a></h3>
        <p>{description}</p>
        <p><strong>Tech Stack:</strong> {techStackFormatted}</p>
        </>
    )
}

export function ProjectsTab() {
    return (
        <>
        <h2>Projects</h2>
        <Project
        title="This Portfolio"
        description="A portfolio website created using typescript and react, hosted on AWS."
        repoLink="https://github.com/smbanasik/Portfolio"
        techStack={["React", "Typescript", "AWS"]}
        />
        <Project
        title="My Game Engine"
        description="A low level engine that can render graphics. Makes use of wrapping the C Vulkan API
        with logical abstractions that follow RAII."
        repoLink="https://github.com/smbanasik/GarFishEngine"
        techStack={["C++", "Vulkan", "CMake"]}
        />
        <Project
        title="DNS Querier and Response Parser"
        description="A program that sends DNS query packets over a UDP socket and parses the binary data
        into a response."
        repoLink="https://github.com/smbanasik/DNS-Query-Reponse"
        techStack={["C++", "WinSock API"]}
        />
        <Project
        title="String Utility Library"
        description="A header only library meant to provide functions that modify strings in ways the standard 
        library does not."
        repoLink="https://github.com/smbanasik/StringUtilLib"
        techStack={["C++"]}
        />
        <Project
        title="2D Ray caster"
        description="A program that calculates the 'line of sight' around a point by casting rays to edges 
        of a plane. Uses Bresenham's line algoirhtm for efficiency."
        repoLink="https://github.com/smbanasik/Line-of-Sight-Algorithm"
        techStack={["C++"]}
        />
        <Project
        title="SBLib"
        description="A library originally meant to compete with the standard library. Served as a great 
        exploratory work in understanding the rationale behind the standard library's structure."
        repoLink="https://github.com/smbanasik/SBLib"
        techStack={["C++"]}
        />
        <Project
        title="Rule of 5 Automation"
        description="A quick tool written to generate code for when I am writing copy and move constructors."
        repoLink="https://github.com/smbanasik/RuleOfFiveAutomation"
        techStack={["C++"]}
        />
        <Project
        title="Finite State Machine Operator"
        description="A program written to construct and operate a FSM graph, makes use of templates."
        repoLink="https://github.com/smbanasik/FiniteStateMachineOperator"
        techStack={["C++"]}
        />
        <Project
        title="Dungeon Generator"
        description="An incomplete program that explored generating 2d shapes on a plane. Work was stopped as 
        priorities shifted."
        repoLink="https://github.com/smbanasik/FiniteStateMachineOperator"
        techStack={["C++"]}
        />
        </>
    )
}