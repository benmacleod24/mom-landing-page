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
		title: "Blog",
		href: "https://www.simplifyingthemarket.com/en/?a=1000031878-5b8f2ca811dbf5cd9a1289bc84b55fff",
	},
	{
		title: "Popl",
		href: "https://popl.co/profile/yO4kKAXj/dash",
		_target: "_blank",
	},
];
