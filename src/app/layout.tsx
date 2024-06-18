import { Inter } from 'next/font/google'
import '../styles/nullstyle.scss'
import '../styles/global.scss'
import Header from '@/components/Header/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<head>
				<link rel='icon' href='./favicon.ico' />
			</head>
			<body className={inter.className}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	)
}
