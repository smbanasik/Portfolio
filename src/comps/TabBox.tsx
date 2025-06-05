import { useState } from 'react'
import { EducationTab } from './Education';
import { AboutMeTab } from './AboutMe';
import { ProjectsTab } from './Projects';
import styles from './TabBox.module.css';

type Tabs = "AboutMe" | "Education" | "PersonalProjects";

interface TabBarProps {
    selectTab: Function
}

function TabBar({selectTab}: TabBarProps) {
    return (
    <div className={styles.TabBar}>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab("AboutMe")}>About Me</label>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab("Education")}>Education</label>
        <label className={styles.TabBarEntry}
            onClick={() => selectTab("PersonalProjects")}>Personal Projects</label>
    </div>
    )
}


export function TabBox() {

    const [selectedTab, setSelectedTab] = useState<Tabs>("AboutMe");

    function getTabContent(selectedTab: Tabs) {
        switch(selectedTab) {
            case "AboutMe":
                return (<AboutMeTab/>)
            case "Education":
                return (<EducationTab/>)
            case "PersonalProjects":
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