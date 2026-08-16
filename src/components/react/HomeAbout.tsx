import { useTranslation } from 'react-i18next';
import I18nProvider from './I18nProvider';

type Props = {
	locale: string;
};

function HomeAboutInner() {
	const { t } = useTranslation();

	return (
		<section className="shell home__prose home__prose--en" aria-labelledby="home-about-title">
			<h2 id="home-about-title">{t('home.aboutTitle')}</h2>
			<p>{t('home.aboutP1')}</p>
			<p>
				{t('home.aboutP2Before')}{' '}
				<a href="/warzone-cheats/">{t('home.aboutPillar')}</a>
				{t('home.aboutP2Mid')}
				<a href="/warzone-esp/">{t('home.aboutEsp')}</a>
				{t('home.aboutP2Mid')}
				<a href="/warzone-aimbot/">{t('home.aboutAimbot')}</a>
				{t('home.aboutP2Or')}
				<a href="/updates/">{t('home.aboutUndetected')}</a>
				{t('home.aboutP2After')}
			</p>
		</section>
	);
}

export default function HomeAboutApp(props: Props) {
	return (
		<I18nProvider locale={props.locale}>
			<HomeAboutInner />
		</I18nProvider>
	);
}
