import React, {FC} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import SectionName from './SectionName/SectionName';
import MainWindow from './MainWindow/MainWindow';
import Button from '../Button/Button';
import { SmallText, BigText } from './Projects.styles';

const Projects: FC = () => {
    return (
        <>
            <div>
                <SmallText>Pages/Projects</SmallText>
                <BigText>Project</BigText>
            </div>
            <SearchBar />
            <div>
                <Button/>
                <SectionName />
                <MainWindow />
            </div>
        </>
    )
}

export default Projects;