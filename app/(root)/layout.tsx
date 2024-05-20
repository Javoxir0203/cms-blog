import { ChildProps } from '@/types';
import Navbar from './-components/navbar';
import Footer from './-components/footer';

function Layout({ children }: ChildProps) {
	return (
		<main>
			<Navbar />
			<div className='container'> {children}</div>
			<Footer />
		</main>
	);
}

export default Layout;
