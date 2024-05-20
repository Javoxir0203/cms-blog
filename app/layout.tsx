import type { Metadata } from 'next';
import { Crete_Round, Work_Sans } from 'next/font/google';
import './globals.css';
import { ChildProps } from '@/types';
import { ThemeProvider } from '@/components/providers/theme_provider';
import { Toaster } from '@/components/ui/sonner';
import NextTopLoader from 'nextjs-toploader';

const creteRound = Crete_Round({ weight: ['400'], subsets: ['latin'], variable: '-- font-creteRound' });
const workSans = Work_Sans({ weight: ['500', '600'], subsets: ['latin'], variable: '--font-workSans' });

export const metadata: Metadata = {
	metadataBase: new URL('https://javoxirjon.uz'),
	title: 'Javoxir dasturlashga oid maqolalar',
	description: 'Dasturlash haqida yangliklar, maslahatlar,va dasturlash sohasidagi eng so`nggi  xabarlari.Bizning blogda dasturlashni o`rganish va rivojlantirish uchun qo`llanma topishingiz mumkin',
	authors: [{ name: 'Javoxir Eshquvvatov', url: 'https://javoxirjon.uz' }],
	icons: { icon: '/favicon.png' },
	keywords:
		"Javoxir Eshquvvatov,  dasturlash kurslari, dasturlashga oid darslar, reactjs uzbek tilida, redux uzbek tilida, bepul dasturlash, rezyume yozish, portfolio,  javascript,  raqamli avlod, javascript, reactjs, vuejs, javascript darslari, reactjs darslari,  dasturlash darslari,typescript o'zbek tilida, o'zbek tilida dasturlash, reactjs o'zbek tilida, reactjs darslari o'zbek tilida, javascript darslari, javascript darslari o'zbek tilida, dasturash darslari o'zbek tilida, dasturlashni o'rganish, dasturlash, IT loyihalar o'zbek tilida",
	openGraph: {
		title: 'Javoxir dasturlashga oid maqolalar',
		description: 'Dasturlash haqida yangliklar, maslahatlar,va dasturlash sohasidagi eng so`nggi  xabarlari.Bizning blogda dasturlashni o`rganish va rivojlantirish uchun qo`llanma topishingiz mumkin',
		type: 'website',
		url: 'https://Javoxirjon.uz',
		locale: 'en_EN',
		images: 'https://media.graphassets.com/kXL006lyRnW46IKTHdHs',
		countryName: 'Uzbekistan',
		siteName: 'Javoxir',
		emails: 'javoxireshquvvatovv@gmail.com',
	},
};

function RootLayout({ children }: ChildProps) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={`${creteRound.variable} ${workSans.variable} overflow-x-hidden`}>
				<ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
					<NextTopLoader showSpinner={false} />
					{children}
					<Toaster position='top-center' />
				</ThemeProvider>
			</body>
		</html>
	);
}
export default RootLayout;
