import React, {FC} from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { SmallText, BigText } from './Projects.styles';

const Projects: FC = () => {
    return (
        <>
            <div>
                <SmallText>Pages/Projects</SmallText>
                <BigText>Project</BigText>
            </div>
            <SearchBar />
        </>
    )
}

export default Projects;