/**
 * Near-duplicate pageIds → stronger pillars.
 * Kept free of routing imports to avoid circular deps with localizeInternalHref.
 */
export const cannibalRedirectTargets = {
	'best-cheats': 'hacks',
	'cheats-2026': 'hacks',
	undetected: 'hacks',
	'mod-menu': 'hacks',
	'unlock-all': 'hacks',
	'aimbot-hack': 'warzone-aimbot',
	'soft-aim': 'warzone-aimbot',
	'esp-hack': 'warzone-esp',
	wallhack: 'warzone-esp',
	'cheat-download': 'setup',
	ricochet: 'updates',
} as const;

export type CannibalPageId = keyof typeof cannibalRedirectTargets;

export const cannibalPageIds = Object.keys(cannibalRedirectTargets) as CannibalPageId[];

export function isCannibalPageId(pageId: string): pageId is CannibalPageId {
	return pageId in cannibalRedirectTargets;
}

export function getCannibalTargetId(pageId: string): string {
	return (cannibalRedirectTargets as Record<string, string>)[pageId] ?? pageId;
}
