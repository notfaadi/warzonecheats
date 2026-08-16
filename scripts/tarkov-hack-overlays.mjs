/**
 * SVG overlay generators for Warzone cheats marketing images.
 * Composited on top of IGN Warzone gameplay screenshots.
 */

const PURPLE = '#c084fc';
const RED = '#f87171';
const GREEN = '#4ade80';
const CYAN = '#22d3ee';

function esc(text) {
	return String(text).replace(/&/g, '&amp;').replace(/</g, '&lt;');
}

/** Player ESP box with optional snapline from bottom center. */
export function espBox(x, y, w, h, label, color = RED, snapFrom = null) {
	const tag = esc(label);
	const snap = snapFrom
		? `<line x1="${snapFrom.x}" y1="${snapFrom.y}" x2="${x + w / 2}" y2="${y + h}" stroke="${color}" stroke-width="1.5" stroke-opacity="0.55"/>`
		: '';
	return `
		${snap}
		<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="${color}" stroke-width="2.5"/>
		<rect x="${x}" y="${y - 24}" width="${Math.max(72, tag.length * 7.5 + 16)}" height="22" fill="rgba(8,4,16,0.78)" rx="3"/>
		<text x="${x + 8}" y="${y - 8}" fill="${color}" font-family="Segoe UI,Arial,sans-serif" font-size="13" font-weight="700">${tag}</text>
	`;
}

/** Aimbot FOV circle + target line + crosshair. */
export function aimbotOverlay(w, h) {
	const cx = Math.round(w * 0.64);
	const cy = Math.round(h * 0.42);
	const mx = Math.round(w / 2);
	const my = Math.round(h / 2);
	const r = Math.round(Math.min(w, h) * 0.11);
	return `
		<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${CYAN}" stroke-width="2" stroke-opacity="0.45"/>
		<line x1="${mx}" y1="${my}" x2="${cx}" y2="${cy}" stroke="${CYAN}" stroke-width="2" stroke-opacity="0.75"/>
		<circle cx="${cx}" cy="${cy}" r="5" fill="${CYAN}"/>
		<line x1="${mx - 18}" y1="${my}" x2="${mx + 18}" y2="${my}" stroke="${CYAN}" stroke-width="2"/>
		<line x1="${mx}" y1="${my - 18}" x2="${mx}" y2="${my + 18}" stroke="${CYAN}" stroke-width="2"/>
		<rect x="${cx - 34}" y="${cy - 48}" width="68" height="20" fill="rgba(8,4,16,0.75)" rx="3"/>
		<text x="${cx - 28}" y="${cy - 34}" fill="${CYAN}" font-family="Segoe UI,Arial,sans-serif" font-size="12" font-weight="700">SOFT AIM</text>
	`;
}

/** 2D radar widget — bottom-left. */
export function radarOverlay(w, h) {
	const size = Math.round(Math.min(w, h) * 0.17);
	const x = Math.round(w * 0.04);
	const y = Math.round(h - size - h * 0.06);
	const cx = x + size / 2;
	const cy = y + size / 2;
	const blips = [
		[cx + size * 0.18, cy - size * 0.22, RED],
		[cx - size * 0.25, cy + size * 0.08, RED],
		[cx + size * 0.05, cy + size * 0.28, RED],
		[cx - size * 0.08, cy - size * 0.32, GREEN],
	];
	const dots = blips
		.map(([bx, by, c]) => `<circle cx="${bx}" cy="${by}" r="4" fill="${c}"/>`)
		.join('');
	return `
		<rect x="${x}" y="${y}" width="${size}" height="${size}" fill="rgba(8,4,16,0.82)" stroke="${PURPLE}" stroke-width="2" rx="6"/>
		<circle cx="${cx}" cy="${cy}" r="${size * 0.38}" fill="none" stroke="rgba(192,132,252,0.35)" stroke-width="1"/>
		<line x1="${cx}" y1="${y + 6}" x2="${cx}" y2="${y + size - 6}" stroke="rgba(192,132,252,0.25)" stroke-width="1"/>
		<line x1="${x + 6}" y1="${cy}" x2="${x + size - 6}" y2="${cy}" stroke="rgba(192,132,252,0.25)" stroke-width="1"/>
		<polygon points="${cx},${cy - 8} ${cx - 6},${cy + 4} ${cx + 6},${cy + 4}" fill="${PURPLE}"/>
		${dots}
		<text x="${x + 8}" y="${y + 16}" fill="${PURPLE}" font-family="Segoe UI,Arial,sans-serif" font-size="11" font-weight="700">RADAR</text>
	`;
}

/** In-game mod menu panel — right side. */
export function modMenuOverlay(w, h) {
	const pw = Math.round(w * 0.26);
	const ph = Math.round(h * 0.72);
	const x = Math.round(w * 0.69);
	const y = Math.round(h * 0.12);
	const rows = [
		['ESP Wallhack', true],
		['Player Boxes', true],
		['Loot ESP', true],
		['2D Radar', true],
		['Soft Aimbot', true],
		['Bone Priority', false],
	];
	const rowSvg = rows
		.map(([label, on], i) => {
			const ry = y + 52 + i * 34;
			const toggleColor = on ? GREEN : '#64748b';
			return `
				<text x="${x + 14}" y="${ry + 14}" fill="#e9d5ff" font-family="Segoe UI,Arial,sans-serif" font-size="13">${esc(label)}</text>
				<rect x="${x + pw - 38}" y="${ry}" width="28" height="16" fill="rgba(0,0,0,0.4)" stroke="${toggleColor}" stroke-width="1.5" rx="8"/>
				<circle cx="${x + pw - (on ? 24 : 32)}" cy="${ry + 8}" r="6" fill="${toggleColor}"/>
			`;
		})
		.join('');
	return `
		<rect x="${x}" y="${y}" width="${pw}" height="${ph}" fill="rgba(10,6,18,0.9)" stroke="${PURPLE}" stroke-width="2" rx="10"/>
		<text x="${x + 14}" y="${y + 28}" fill="${PURPLE}" font-family="Segoe UI,Arial,sans-serif" font-size="15" font-weight="800">WARZONE HACKS</text>
		<text x="${x + 14}" y="${y + 44}" fill="#94a3b8" font-family="Segoe UI,Arial,sans-serif" font-size="11">UNDETECTED · v2026</text>
		<line x1="${x + 10}" y1="${y + 50}" x2="${x + pw - 10}" y2="${y + 50}" stroke="rgba(192,132,252,0.3)" stroke-width="1"/>
		${rowSvg}
	`;
}

/** Brand watermark — bottom-right. */
export function hacksBadge(w, h) {
	return `
		<rect x="${w - 168}" y="${h - 36}" width="158" height="26" fill="rgba(10,6,18,0.78)" rx="4"/>
		<text x="${w - 160}" y="${h - 18}" fill="${PURPLE}" font-family="Segoe UI,Arial,sans-serif" font-size="12" font-weight="700">WARZONE HACKS</text>
	`;
}

/** Build full SVG for a given overlay preset. */
export function buildOverlaySvg(width, height, preset) {
	const snap = { x: Math.round(width / 2), y: height - 20 };
	let body = '';

	switch (preset) {
		case 'hero':
			body += espBox(width * 0.52, height * 0.22, width * 0.12, height * 0.28, 'Enemy · 47m', RED, snap);
			body += espBox(width * 0.28, height * 0.35, width * 0.09, height * 0.22, 'Enemy · 82m', RED, snap);
			body += espBox(width * 0.71, height * 0.38, width * 0.08, height * 0.2, 'Loadout · 31m', GREEN);
			body += aimbotOverlay(width, height);
			body += radarOverlay(width, height);
			break;
		case 'esp':
			body += espBox(width * 0.18, height * 0.25, width * 0.11, height * 0.32, 'Operator · 56m', RED, snap);
			body += espBox(width * 0.45, height * 0.18, width * 0.1, height * 0.28, 'Operator · 112m', RED, snap);
			body += espBox(width * 0.62, height * 0.32, width * 0.09, height * 0.24, 'Operator · 74m', RED, snap);
			body += espBox(width * 0.78, height * 0.4, width * 0.07, height * 0.18, 'Vehicle · 95m', '#fbbf24');
			body += espBox(width * 0.35, height * 0.55, width * 0.06, height * 0.1, 'Contract · 41m', GREEN);
			break;
		case 'aimbot':
			body += espBox(width * 0.58, height * 0.28, width * 0.1, height * 0.26, 'Target · 38m', RED);
			body += aimbotOverlay(width, height);
			break;
		case 'wallhack':
			body += espBox(width * 0.22, height * 0.3, width * 0.1, height * 0.28, 'THRU WALL · 64m', PURPLE, snap);
			body += espBox(width * 0.55, height * 0.2, width * 0.11, height * 0.3, 'THRU WALL · 89m', PURPLE, snap);
			body += `<line x1="${width * 0.32}" y1="${height * 0.44}" x2="${width * 0.6}" y2="${height * 0.35}" stroke="${PURPLE}" stroke-width="1.5" stroke-dasharray="6 4" stroke-opacity="0.6"/>`;
			break;
		case 'radar':
			body += espBox(width * 0.48, height * 0.26, width * 0.1, height * 0.26, 'Operator · 52m', RED, snap);
			body += radarOverlay(width, height);
			break;
		case 'menu':
			body += espBox(width * 0.2, height * 0.32, width * 0.09, height * 0.24, 'Enemy · 67m', RED, snap);
			body += modMenuOverlay(width, height);
			break;
		case 'gulag':
			body += espBox(width * 0.42, height * 0.28, width * 0.14, height * 0.38, 'Gulag · 12m', RED, snap);
			body += aimbotOverlay(width, height);
			break;
		case 'Resurgence':
			body += espBox(width * 0.25, height * 0.3, width * 0.1, height * 0.26, 'Squad · 44m', RED, snap);
			body += espBox(width * 0.58, height * 0.35, width * 0.09, height * 0.22, 'Squad · 71m', RED, snap);
			body += radarOverlay(width, height);
			break;
		case 'loot':
			body += espBox(width * 0.3, height * 0.45, width * 0.07, height * 0.09, 'Loadout · 28m', GREEN);
			body += espBox(width * 0.55, height * 0.38, width * 0.06, height * 0.08, 'Contract · 55m', GREEN);
			body += espBox(width * 0.68, height * 0.52, width * 0.06, height * 0.08, 'gulag timer · 103m', '#fbbf24');
			body += espBox(width * 0.44, height * 0.22, width * 0.09, height * 0.24, 'Operator · 88m', RED, snap);
			break;
		case 'map':
			body += espBox(width * 0.35, height * 0.4, width * 0.08, height * 0.12, 'Hot Zone', RED);
			body += espBox(width * 0.55, height * 0.32, width * 0.07, height * 0.1, 'Loadout', GREEN);
			body += espBox(width * 0.62, height * 0.55, width * 0.09, height * 0.11, 'Contract', GREEN);
			break;
		default:
			body += espBox(width * 0.4, height * 0.3, width * 0.1, height * 0.26, 'Enemy · 60m', RED, snap);
	}

	body += hacksBadge(width, height);

	return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
}
