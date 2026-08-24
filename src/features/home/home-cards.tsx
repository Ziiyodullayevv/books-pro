import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

export function HomeCards() {
	return (
		<section className="mt-3 grid grid-cols-1 gap-4 px-4 sm:mt-5 sm:px-6 lg:mt-6 lg:grid-cols-10 lg:px-10">
			{featuredCards.map((card, index) => (
				<article
					key={card.id}
					className={cn(
						index === 0 ? "lg:col-span-4" : "lg:col-span-6",
						"group relative min-h-[280px] overflow-hidden rounded-3xl shadow-[0_26px_52px_-20px_rgba(7,17,37,0.65)] sm:min-h-[340px] lg:min-h-[390px]",
					)}
				>
					<img
						src={card.background}
						alt={card.title}
						className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
					/>

					<div className={cn("absolute inset-0 rounded-3xl", card.overlayClass)} />

					<div className="relative flex min-h-[280px] flex-col justify-between p-5 sm:min-h-[340px] sm:p-7 lg:min-h-[390px]">
						<div className="flex justify-between gap-4">
							<h3 className="max-w-[15ch] text-3xl font-semibold leading-tight text-white sm:text-4xl lg:max-w-[13ch] lg:text-5xl lg:leading-12">
								{card.title}
							</h3>
						</div>

						<button
							type="button"
							className="mt-8 inline-flex w-fit items-center gap-3 text-[34px] font-medium text-white/90 transition hover:text-white"
						>
							<span className="inline-flex size-8 items-center justify-center rounded-full bg-[#07162E]/95">
								<Play className="ml-0.5 size-3 fill-white text-white" />
							</span>

							<span className="text-base font-normal">{card.playLabel}</span>
						</button>
					</div>
				</article>
			))}
		</section>
	);
}

const featuredCards = [
	{
		id: "blue-sword",
		title: "The Adventure of Blue Sword",
		background: "/background-3.webp",
		overlayClass: "bg-gradient-to-r from-[#0A3769] via-[#0A3769]/50 to-transparent",
		playLabel: "Let Play Moview",
	},
	{
		id: "si-dol",
		title: "Recalling the journey of Dol's exciting story",
		background: "/background-5.webp",
		overlayClass: "bg-gradient-to-r from-[#075757] via-[#0d8065]/50 to-transparent",
		brandLabel: "DisneyPAPIELAR",
		playLabel: "Let Play Moview",
	},
];
