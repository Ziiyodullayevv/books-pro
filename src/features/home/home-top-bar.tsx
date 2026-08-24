import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

import { HomeBrand } from "./home-brand";
import { HomeNavPill } from "./home-nav-pill";
import { HomeUserMenu } from "./home-user-menu";

export function HomeTopBarView() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 0);
		};

		handleScroll();
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={cn(
				"sticky top-0 z-100 grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 transition-colors duration-200 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:px-10 lg:py-4",
				isScrolled && "bg-[#070C16]/70 backdrop-blur-lg shadow-lg",
			)}
		>
			<HomeBrand />

			<HomeNavPill />

			<HomeUserMenu />
		</header>
	);
}
