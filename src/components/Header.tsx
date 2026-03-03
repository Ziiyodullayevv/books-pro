import { BellRing, Search } from "lucide-react";
import { Link } from "react-router";

export default function Header() {
	return (
		<div className="">
			<h2>Flex.id</h2>

			<div>
				<Link to={"#"}>Movies</Link>
				<Link to={"#"}>Series</Link>
				<Link to={"#"}>Originals</Link>
				<button>
					<Search />
				</button>
			</div>

			<div className="flex items-center gap-2">
				<button className="bg-black/10 shadow-2xl h-15 rounded-full flex justify-center items-center w-15">
					<BellRing className="size-6 text-white" />
				</button>

				<div className="flex items-center gap-2">
					<span className="h-15 w-15 overflow-hidden rounded-full bg-black inline-block">
						<img src="/avatar-9.webp" alt="avatar" />
					</span>

					<div>
						<h4 className="text-white text-lg font-bold">Sarah J</h4>
						<sub className="text-white leading-2">Premium</sub>
					</div>
				</div>
			</div>
		</div>
	);
}
