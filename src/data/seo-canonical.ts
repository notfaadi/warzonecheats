import type { PageId } from './i18n/routing';
import {
	cannibalPageIds,
	cannibalRedirectTargets,
	getCannibalTargetId,
	isCannibalPageId,
	type CannibalPageId,
} from './seo-cannibal-map';

export {
	cannibalPageIds,
	cannibalRedirectTargets,
	isCannibalPageId,
	type CannibalPageId,
};

export const sitemapExcludedPageIds = new Set<PageId>(cannibalPageIds as PageId[]);

/** Primary commercial landing for the head term "warzone cheats". */
export const MONEY_PAGE_ID = 'hacks' as const satisfies PageId;
export const MONEY_PATH = '/warzone-cheats/' as const;

export function getCannibalTarget(pageId: PageId): PageId {
	return getCannibalTargetId(pageId) as PageId;
}
