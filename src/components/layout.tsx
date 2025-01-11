import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout(
	props: React.PropsWithChildren<{ mode?: "light" | "dark" }>
) {
	return (
		<div className="flex flex-col h-dvh">
			<Header mode={props.mode} />
			<main className="mt-[4rem] px-4 lg:px-0 lg:max-w-[80%] mx-auto w-full flex-grow">
				{props.children}
			</main>
			<Footer />
		</div>
	);
}
