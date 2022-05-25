import React, {FC} from 'react';
import { SideBarContainer, SubUpImg, Editor } from './SideBar.styles';
import SideBarPages from './SideBarPages/SideBarPages';


const SideBar: FC = () => {
    return (
        <>
            <SideBarContainer>
                <SubUpImg src="/images/svg/subup.svg" />
                <Editor>EDITOR</Editor>
                <SideBarPages/>
            </SideBarContainer>
        </>
    );
}

export default SideBar;
