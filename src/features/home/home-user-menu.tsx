import { BellRingIcon } from "lucide-react";

export function HomeUserMenu() {
	return (
		<div className="flex items-center justify-self-end gap-2">
			<button type="button" aria-label="Notifications" className="hidden size-10 items-center justify-center rounded-full bg-white/20 shadow-[4px_4px_3px_rgba(0,0,0,0.1),inset_2px_4px_4px_rgba(0,0,0,0.10)] sm:flex lg:size-12">
				<BellRingIcon className="size-5 text-white" />
			</button>

			<div className="flex items-center gap-2">
				<span className="inline-block size-10 overflow-hidden rounded-full bg-black shadow-[4px_4px_3px_rgba(0,0,0,0.1),inset_2px_4px_4px_rgba(0,0,0,0.10)] lg:size-12">
					<img className="h-full w-full object-cover" src="/avatar-9.webp" alt="avatar" />
				</span>

				<div className="hidden flex-col justify-center xl:flex">
					<span className="text-white text-shadow-lg font-bold">Sarah J</span>
					<span className="text-white text-shadow-lg text-xs">Premium</span>
				</div>
			</div>
		</div>
	);
}
