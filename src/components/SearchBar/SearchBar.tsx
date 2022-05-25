import React, {FC} from 'react';
import { SearchBarContainer, InputField, Bell, Kodori } from './SearchBar.styles';

const SearchBar: FC = () => {
    return (
        <>
            <SearchBarContainer>
                <InputField placeholder={"Search Query"}/>
                <Bell src={"/images/svg/bell.svg"} />
                <Kodori src={"/images/svg/kodori.svg"}/>
            </SearchBarContainer>
        </>
    );

}

export default SearchBar;
