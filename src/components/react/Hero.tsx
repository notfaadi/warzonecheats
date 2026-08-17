import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
	siteName: string;
	checkoutUrl: string;
	monthlyPrice: number;
	heroSrc: string;
	heroSrcSet: string;
	heroSizes: string;
	heroWidth: number;
	heroHeight: number;
	/** When true, use brand EN hero keys; otherwise localized hero.* */
	useBrandHero?: boolean;
};

const chipKeys = [
	{ key: 'chipEsp', icon: 'esp' },
	{ key: 'chipAim', icon: 'aim' },
	{ key: 'chipRadar', icon: 'radar' },
	{ key: 'chipUpdates', icon: 'updates' },
] as const;

function ChipIcon({ icon }: { icon: string }) {
	if (icon === 'esp') {
		return (
			<>
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path d="M12 8.5v3.2L14.2 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
			</>
		);
	}
	if (icon === 'aim') {
		return (
			<path
				d="M12 4.5l1.7 4.8H19l-4 3.1 1.5 4.8L12 14.8 7.5 17.2 9 12.4 5 9.3h5.3L12 4.5z"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		);
	}
	if (icon === 'radar') {
		return (
			<>
				<circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6" />
				<circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="1.6" />
				<path
					d="M12 2.8v2.2M12 19v2.2M2.8 12h2.2M19 12h2.2"
					stroke="currentColor"
					strokeWidth="1.6"
					strokeLinecap="round"
				/>
			</>
		);
	}
	return (
		<path
			d="M5 13.2l4.2 4.2L19 7.6"
			stroke="currentColor"
			strokeWidth="1.8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	);
}

function HeroInner({
	siteName,
	checkoutUrl,
	monthlyPrice,
	heroSrc,
	heroSrcSet,
	heroSizes,
	heroWidth,
	heroHeight,
	useBrandHero = true,
}: Props) {
	const { t } = useTranslation();
	const title = useBrandHero ? siteName : t('hero.accent');
	const subtitle = useBrandHero ? t('hero.subtitle') : t('hero.subtitle');
	const ctaBuy = useBrandHero ? t('cta.buy') : t('hero.buyNow');
	const priceFrom = t('hero.priceFrom');
	const priceLabel = priceFrom ? `${priceFrom} $${monthlyPrice}` : `$${monthlyPrice}`;
	const imageAlt = t('hero.imageAlt', { brand: siteName });

	return (
		<section className="hero" aria-label={title}>
			<div className="hero__media">
				<img
					src={heroSrc}
					srcSet={heroSrcSet}
					sizes={heroSizes}
					alt={imageAlt}
					width={heroWidth}
					height={heroHeight}
					fetchPriority="high"
					loading="eager"
					decoding="async"
				/>
			</div>
			<div className="hero__veil" aria-hidden="true" />
			<div className="shell hero__content">
				<div className="hero__copy">
					<h1 className="hero__brand">
						{useBrandHero ? <span data-edit="name">{title}</span> : title}
					</h1>
					<p className="hero__lede" data-edit={useBrandHero ? 'heroLede' : undefined}>
						{subtitle}
					</p>
					<div className="hero__actions">
						<a className="hero__buy" href={checkoutUrl} rel="noopener noreferrer">
							<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
								<path
									d="M4.5 6.5h2.1l1.2 9.2h9.4l1.8-6.6H8.1M9.2 19.2a.9.9 0 100-1.8.9.9 0 000 1.8zm7.4 0a.9.9 0 100-1.8.9.9 0 000 1.8z"
									stroke="currentColor"
									strokeWidth="1.7"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
							<span className="hero__buy-label" data-edit={useBrandHero ? 'ctaBuy' : undefined}>
								{ctaBuy}
							</span>
							<span className="hero__buy-price">{priceLabel}</span>
						</a>
					</div>
					<ul className="hero__features">
						{chipKeys.map((chip) => (
							<li key={chip.key}>
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
									<ChipIcon icon={chip.icon} />
								</svg>
								<span data-edit={useBrandHero ? chip.key : undefined}>{t(`hero.${chip.key}`)}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</section>
	);
}

export default function HeroApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HeroInner {...props} />
		</I18nProvider>
	);
}
