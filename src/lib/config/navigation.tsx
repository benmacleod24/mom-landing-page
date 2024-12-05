import { HTMLAttributeAnchorTarget } from "react";

export type NavigationOption = {
	title: string;
	href: string;
	_target?: HTMLAttributeAnchorTarget;
};

export const NavigationOptions = [
	{
		title: "About Me",
		href: "#about",
	},
	{
		title: "About Me",
		href: "#about",
	},
] satisfies NavigationOption[];
