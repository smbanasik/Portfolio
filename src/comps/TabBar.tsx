import { useState } from 'react'
import { EducationTab } from './Education';
import { AboutMeTab } from './AboutMe';
import { ProjectsTab } from './Projects';

enum Tabs {
    AboutMe,
    Education,
    PersonalProjects
}

interface TabBarProps {
    selectTab: Function
}

function TabBar({selectTab}: TabBarProps) {
    return (
    <div>
        <label onClick={() => selectTab(Tabs.AboutMe)}>About Me</label>
        <label onClick={() => selectTab(Tabs.Education)}>Education</label>
        <label onClick={() => selectTab(Tabs.PersonalProjects)}>Personal Projects</label>
    </div>
    )
}


export function TabBox() {

    const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Education);

    function getTabContent(selectedTab: Tabs) {
        switch(selectedTab) {
            case Tabs.AboutMe:
                return (<AboutMeTab/>)
            case Tabs.Education:
                return (<EducationTab/>)
            case Tabs.PersonalProjects:
                return (<ProjectsTab/>)
        }
    };

    return (
        <div>
            <TabBar selectTab={setSelectedTab}/>
            {getTabContent(selectedTab)}
        </div>
    )

}