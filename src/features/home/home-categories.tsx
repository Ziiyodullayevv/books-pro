import {
	Clapperboard,
	Flame,
	Ghost,
	Heart,
	type LucideIcon,
	MoonStar,
	Star,
	Swords,
} from "lucide-react";

import { cn } from "@/lib/utils";

const categories: { id: string; label: string; icon: LucideIcon; isActive?: boolean }[] = [
	{ id: "trending", label: "Trending", icon: Flame },
	{ id: "action", label: "Action", icon: Swords },
	{ id: "romance", label: "Romance", icon: Heart },
	{ id: "animation", label: "Animation", icon: Clapperboard, isActive: true },
	{ id: "horror", label: "Horror", icon: Ghost },
	{ id: "special", label: "Special", icon: Star },
	{ id: "drakor", label: "Drakor", icon: MoonStar },
	{ id: "drako", label: "Drakor", icon: MoonStar },
];

export function HomeCategories() {
	return (
		<section>
			<div className="flex gap-2 overflow-x-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
				{categories.map((category) => {
					const Icon = category.icon;

					return (
						<button
							key={category.id}
							type="button"
							className={cn(
								"inline-flex min-h-14 shrink-0 items-center gap-2.5 rounded-[20px] border border-transparent bg-black/5 px-5 text-white backdrop-blur-3xl transition hover:border-black/10 hover:bg-black/10 sm:min-h-16 sm:px-7 lg:min-h-20 lg:gap-3 lg:rounded-[26px] lg:px-10",
								category.isActive &&
									"border-black/10 bg-black/10 font-semibold text-white shadow-[0_16px_30px_-14px_rgba(8,14,26,0.3)]",
							)}
						>
							<Icon className="size-5 lg:size-6" />
							<span className="text-base leading-none">{category.label}</span>
						</button>
					);
				})}
			</div>
		</section>
	);
}
