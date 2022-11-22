import { NavLink, useLocation, useMatch } from "react-router-dom";
import React from "react";
import { SidebarItem } from "../types/util.types";
import classNames from "classnames";

type Props = {
	className?: string,
	item: SidebarItem
}

export default function SidebarItemComponent(props: Props) {

	const {
		icon: Icon,
		title,
		link
	} = props.item;

	return (
		<NavLink
			className={
				({ isActive }) =>
					classNames(
						"sidebar-item",
						{ "sidebar-item--active": isActive }
					)
			}
			to={ link }
		>
			<Icon className="sidebar-item__icon"/>
			<div className="sidebar-item__text">{ title }</div>
</NavLink>
)
	;
}