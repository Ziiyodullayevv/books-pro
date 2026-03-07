import { useQuery } from "@tanstack/react-query";
import { Funnel, SlidersHorizontal, Star } from "lucide-react";

import { Skeleton } from "@/components/ui/skeleton";

interface MovieProps {
	id: string;
	title: string;
	img_url: string;
	rating: number;
	year: number;
}

const TRENDING_GRID_SKELETON_ITEMS = 6;

function HomeTrendingGridSkeleton() {
	return (
		<section className="px-10">
			<header className="mb-5 flex items-center justify-between gap-4">
				<Skeleton className="h-9 w-64 bg-white/15" />

				<div className="inline-flex h-10 items-center rounded-full border border-white/10 bg-[#011B36] px-1 shadow-[0_12px_28px_-16px_rgba(1,10,22,0.8)]">
					<Skeleton className="size-8 rounded-full bg-white/15" />
					<span className="mx-2 h-5 w-px bg-white/18" />
					<Skeleton className="size-8 rounded-full bg-white/15" />
				</div>
			</header>

			<div className="grid grid-cols-6 gap-4">
				{Array.from({ length: TRENDING_GRID_SKELETON_ITEMS }).map((_, idx) => (
					<article key={idx} className="space-y-2.5">
						<Skeleton className="aspect-3/4 rounded-[24px] bg-white/10 shadow-[0_24px_40px_-18px_rgba(8,16,32,0.75)]" />

						<div className="space-y-1.5">
							<Skeleton className="h-6 w-10/12 bg-white/15" />

							<div className="flex items-center gap-3">
								<Skeleton className="h-5 w-16 bg-white/15" />
								<span className="h-4 w-px bg-white/30" />
								<Skeleton className="h-5 w-12 bg-white/15" />
							</div>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export function HomeTrendingGrid() {
	const url = "https://673841334eb22e24fca75190.mockapi.io/api/v1/products";

	const {
		data = [],
		isLoading,
		error,
	} = useQuery<MovieProps[], Error>({
		queryKey: ["movies"],
		queryFn: async () => {
			const response = await fetch(url);
			const data = await response.json();
			return data;
		},
	});

	if (isLoading) {
		return <HomeTrendingGridSkeleton />;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	return (
		<section className="px-10">
			<header className="mb-5 flex items-center justify-between gap-4">
				<h2 className="text-2xl font-normal tracking-tight text-white md:text-3xl">
					Trending in Animation
				</h2>

				<div className="inline-flex h-10 items-center rounded-full border border-white/10 bg-[#011B36] px-1 shadow-[0_12px_28px_-16px_rgba(1,10,22,0.8)]">
					<button
						type="button"
						className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/12 hover:text-white"
					>
						<SlidersHorizontal className="size-3.5" />
					</button>

					<span className="mx-2 h-5 w-px bg-white/18" />

					<button
						type="button"
						className="inline-flex size-8 items-center justify-center rounded-full text-white/80 transition hover:bg-white/12 hover:text-white"
					>
						<Funnel className="size-3.5" />
					</button>
				</div>
			</header>

			<div>
				<div className="grid grid-cols-6 gap-4">
					{data.map((movie: MovieProps) => (
						<article key={movie.id} className="space-y-2.5">
							<div className="aspect-3/4 overflow-hidden rounded-[24px] bg-white/8 shadow-[0_24px_40px_-18px_rgba(8,16,32,0.75)]">
								<img
									src={movie.img_url}
									alt={movie.title}
									className="h-full w-full object-cover transition duration-500 hover:scale-[1.03]"
								/>
							</div>

							<div className="space-y-1.5">
								<h3 className="truncate text-base font-semibold leading-tight text-white">
									{movie.title}
								</h3>

								<div className="flex items-center gap-3 text-sm text-white/78 md:text-base">
									<span className="inline-flex items-center gap-1.5">
										<Star className="size-3.5 fill-[#FF9F1A] text-[#FF9F1A]" />
										{movie.rating.toFixed(1)}
									</span>

									<span className="h-4 w-px bg-white/30" />

									<span>{movie.year}</span>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
