import NotFoundError from '@/components/NotFoundError/NotFoundError'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'ПРОМУТИЛИЗАЦИЯ | Страница не найдена',
}

export default function NotFound() {
	return <NotFoundError />
}
