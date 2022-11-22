import React from "react";
import { To } from "react-router-dom";

export type Nullable<T> =
	T
	| null
	| undefined;

export type SVG = React.FunctionComponent<React.SVGProps<SVGSVGElement>>

export type SidebarItem = {
	icon: SVG,
	title: string,
	link: string
}

export type ButtonLink = {
	title: string,
	link: To
}