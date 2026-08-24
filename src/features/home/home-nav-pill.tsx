import { Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import { cn } from "@/lib/utils";

export function HomeNavPill() {
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if (isSearchOpen) {
			inputRef.current?.focus();
		}
	}, [isSearchOpen]);

	return (
		<div
			className={cn(
				"order-3 col-span-2 flex h-11 w-full items-center overflow-hidden rounded-[40px] bg-black p-1 text-white shadow-lg transition-[width] duration-300 ease-out lg:order-none lg:col-span-1 lg:h-12",
				isSearchOpen ? "lg:w-[420px]" : "lg:w-[360px]",
			)}
		>
			<nav
				aria-hidden={isSearchOpen}
				className={cn(
					"flex min-w-0 flex-1 items-center justify-around gap-2 overflow-hidden px-2 text-sm transition-all duration-200 sm:gap-8 sm:px-5 lg:gap-10",
					isSearchOpen && "pointer-events-none max-w-0 -translate-x-3 px-0 opacity-0",
				)}
			>
				<Link to={"#"}>Movies</Link>
				<Link className="opacity-50" to={"#"}>
					Series
				</Link>
				<Link className="opacity-50" to={"#"}>
					Originals
				</Link>
			</nav>

			{isSearchOpen ? (
				<form className="flex min-w-0 flex-1 items-center pl-4" onSubmit={(event) => event.preventDefault()}>
					<Search className="mr-2 size-4 shrink-0 text-white/60" />
					<input
						ref={inputRef}
						type="search"
						placeholder="Search movies..."
						aria-label="Search movies"
						onKeyDown={(event) => {
							if (event.key === "Escape") setIsSearchOpen(false);
						}}
						className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/45 [&::-webkit-search-cancel-button]:hidden"
					/>
					<button
						type="button"
						aria-label="Close search"
						onClick={() => setIsSearchOpen(false)}
						className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30 lg:h-10 lg:w-10"
					>
						<X className="size-4" />
					</button>
				</form>
			) : (
				<button
					type="button"
					aria-label="Search"
					onClick={() => setIsSearchOpen(true)}
					className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 transition hover:bg-white/30 lg:h-10 lg:w-10"
				>
					<Search className="size-4" />
				</button>
			)}
		</div>
	);
}
