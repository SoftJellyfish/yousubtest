import React, {FC} from 'react';
import { ButtonContainer, ButtonText, ButtonImg } from './SideBarPages.styles';


const SideBarPages: FC = () => {

    const Pages = [
        {id: 1, img: 'home.svg', text: 'Dashboard'},
        {id: 2, img: 'project_active.svg', text: 'Projects'},
        {id: 3, img: 'users.svg', text: 'Users'},
        {id: 4, img: 'archive.svg', text: 'Archive'},
        {id: 5, img: 'settings.svg', text: 'Settings'}
    ]
    return (
        <>
            <ButtonContainer>
            {
                    Pages.map((list) => {
                        return (
                            <div style={{ display: 'flex', marginBottom: '24px'}}>
                                <ButtonImg src={`/images/svg/${list.img}`} />
                                <ButtonText>{list.text}</ButtonText>
                            </div>
                        )
                    })
                }
            </ButtonContainer>
        </>
    );

}

export default SideBarPages;