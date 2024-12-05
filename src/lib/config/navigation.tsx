import { HTMLAttributeAnchorTarget } from "react";

export type NavigationOption = {
	title: string;
	href: string;
	_target?: HTMLAttributeAnchorTarget;
};

export const NavigationOptions: NavigationOption[] = [
	{
		title: "About Me",
		href: "#about",
	},
	{
		title: "Testimonials",
		href: "#testimonials",
	},
	{
		title: "Popl",
		href: "https://popl.co/profile/yO4kKAXj/dash",
		_target: "_blank",
	},
];
