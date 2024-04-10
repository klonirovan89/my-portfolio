import React from 'react';

import {Menu} from "../menu/Menu";
import {S} from '../HeaderMenu_Styles'

export const DesktopMenu: React.FC<{ menuItems: string[] }> = (props: { menuItems: string[] }) => {
    return (
        <S.DesktopMenu>
            <Menu menuItems={props.menuItems}/>
        </S.DesktopMenu>
    );
};




