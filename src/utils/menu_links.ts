export interface IMenuLinks {
	id: number
	name: string
	href: string
}

const menu_links: IMenuLinks[] = [
	{
		id: 1,
		name: 'Главная',
		href: '#main',
	},
	{
		id: 2,
		name: 'О нас',
		href: '#about',
	},
	{
		id: 3,
		name: 'Преимущества',
		href: '#advantages',
	},
	{
		id: 4,
		name: 'Лицензии',
		href: '#licenses',
	},
	{
		id: 5,
		name: 'Процесс',
		href: '#process',
	},
	{
		id: 6,
		name: 'Контакты',
		href: '#contacts',
	},
]
export default menu_links
