import React from "react";
import "./SidebarOption.css";

type SidebarOptionProps = {
    text: string;
    Icon: React.ElementType;
    active?: boolean;
};

function SidebarOption({ text, Icon, active = false }: SidebarOptionProps) {
    return (
        <div className={`sidebarOption ${active && "sidebarOption__active"}`}>
            <Icon />
            <h2>{text}</h2>
        </div>
    );
}

export default SidebarOption;
