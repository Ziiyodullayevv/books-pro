import { Search } from "lucide-react";
import { Link } from "react-router";

export function HomeNavPill() {
	return (
		<div className="order-3 col-span-2 flex h-11 w-full items-center rounded-[40px] bg-black p-1 text-white shadow-lg lg:order-none lg:col-span-1 lg:h-12 lg:w-auto">
			<nav className="flex flex-1 items-center justify-around gap-2 px-2 text-sm sm:gap-8 sm:px-5 lg:gap-10">
				<Link to={"#"}>Movies</Link>
				<Link className="opacity-50" to={"#"}>
					Series
				</Link>
				<Link className="opacity-50" to={"#"}>
					Originals
				</Link>
			</nav>
			<button type="button" aria-label="Search" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30 lg:h-10 lg:w-10">
				<Search className="size-4" />
			</button>
		</div>
	);
}
