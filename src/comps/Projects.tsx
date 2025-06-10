
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
        description="A portfolio website built using TypeScript and React, showcasing my personal projects and 
        skills. The portfolio makes use of AWS Amplify for hosting and deployment. 
        This project helped me improve my proficiency with frontend frameworks and cloud deployment pipelines."
        repoLink="https://github.com/smbanasik/Portfolio"
        techStack={["React", "Typescript", "AWS"]}
        />
        <Project
        title="My Game Engine"
        description="A low-level game engine written in C++ that wraps the Vulkan API with modern 
        RAII-based abstractions. The engine emphasizes ownership and safety patterns, 
        using smart pointers and design principles aligned with modern C++. 
        It serves as a hands-on deep dive into graphics pipelines, memory management, 
        and GPU command recording."
        repoLink="https://github.com/smbanasik/GarFishEngine"
        techStack={["C++", "Vulkan", "CMake"]}
        />
        <Project
        title="DNS Querier and Response Parser"
        description="A network utility that constructs and sends DNS query packets over UDP sockets 
        and decodes the binary response manually. It demonstrates an understanding of 
        protocol-level data structures, bit manipulation, and the WinSock API. 
        The project serves as a practical application of both network programming and binary parsing."
        repoLink="https://github.com/smbanasik/DNS-Query-Reponse"
        techStack={["C++", "WinSock API"]}
        />
        <Project
        title="String Utility Library"
        description="A lightweight, header-only library designed to extend C++ string manipulation 
        capabilities beyond what's available in the standard library. It includes custom functions 
        for case conversion, substring extraction with iterators, trimming, and more. 
        This project focuses on clean, reusable code and header-only design to ease integration."
        repoLink="https://github.com/smbanasik/StringUtilLib"
        techStack={["C++"]}
        />
        <Project
        title="2D Ray caster"
        description="A visualization tool that simulates 2D line-of-sight by casting rays from 
        a central point toward the edges of nearby obstacles. 
        It employs Bresenham’s Line Algorithm for efficient and accurate ray traversal across 
        a discrete grid. This project was inspired by early visibility systems in 2D games 
        and served as a study in both geometry and algorithm optimization."
        repoLink="https://github.com/smbanasik/Line-of-Sight-Algorithm"
        techStack={["C++"]}
        />
        <Project
        title="SBLib"
        description="An experimental C++ library created to replicate and expand upon functionality 
        offered by the standard library. SBLib was a sandbox for learning how containers, 
        iterators, and utilities are implemented from scratch. 
        Through it, I gained a deeper appreciation for STL design decisions and performance 
        considerations."
        repoLink="https://github.com/smbanasik/SBLib"
        techStack={["C++"]}
        />
        <Project
        title="Rule of 5 Automation"
        description="A small utility designed to auto-generate boilerplate code for the Rule of 5 
        in C++—copy constructor, move constructor, copy assignment, move assignment, and destructor. 
        It helps reduce repetitive code and enforces consistency when writing 
        resource-managing classes. It also reflects my understanding of object lifecycle management 
        in modern C++."
        repoLink="https://github.com/smbanasik/RuleOfFiveAutomation"
        techStack={["C++"]}
        />
        <Project
        title="Finite State Machine Operator"
        description="A C++ template-based system for constructing and operating 
        finite state machines (FSMs). The library allows users to define states, transitions, 
        and actions with compile-time type safety. 
        It was developed to explore generic programming and clean state-driven design principles 
        often used in embedded systems and game logic."
        repoLink="https://github.com/smbanasik/FiniteStateMachineOperator"
        techStack={["C++"]}
        />
        <Project
        title="Dungeon Generator"
        description="An early-stage exploration into 2D dungeon generation algorithms that focused 
        on placing rooms and hallways onto a grid. Although development paused due to shifting 
        priorities, the project provided hands-on experimentation with procedural generation, 
        tile systems, and randomness constraints often used in game design."
        repoLink="https://github.com/smbanasik/FiniteStateMachineOperator"
        techStack={["C++"]}
        />
        </>
    )
}