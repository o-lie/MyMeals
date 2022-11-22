import React from "react";
import {ReactComponent as Logo} from "../../assets/images/logo.svg";
import { sidebarItems } from "../utils/constants/constants";
import SidebarItemComponent from "../components/SidebarItem.component";

export default function SidebarComponent() {
	return (
		<>
			<section className="sidebar">
				<div className="sidebar__wrapper">
					<div className="sidebar__top">
						<Logo className="sidebar__logo"/>
					</div>
					<div className="sidebar__navigation">
						{
							sidebarItems.map(item =>
							<SidebarItemComponent key={ item.title } item={ item }/>
							)
						}
					</div>
				</div>
			</section>
		</>
	);
}