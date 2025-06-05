import { useState } from 'react'
import { EducationTab } from './Education';
import { AboutMeTab } from './AboutMe';
import { ProjectsTab } from './Projects';
import styles from './TabBox.module.css';

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
    <div className={styles.TabBar}>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab(Tabs.AboutMe)}>About Me</label>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab(Tabs.Education)}>Education</label>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab(Tabs.PersonalProjects)}>Personal Projects</label>
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
        <>
            <TabBar selectTab={setSelectedTab}/>
            <div className={styles.TabBox}>
                {getTabContent(selectedTab)}
            </div>
        </>
    )

}