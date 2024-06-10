interface IAdvantages {
	id: number
	title: string
	subtitle: string
}

const advantages: IAdvantages[] = [
	{
		id: 1,
		title: 'Близко',
		subtitle: 'Находимся в черте города, экономим ваш бюджет на логистику',
	},
	{
		id: 2,
		title: 'Безопасно',
		subtitle: 'Предоставляем полный пакет документов для прозрачности процесса',
	},
	{
		id: 3,
		title: 'Профессионально',
		subtitle:
			'Сортируем, перерабатываем и готовим отчетные документы точно в срок ',
	},
	{
		id: 4,
		title: 'Экологично',
		subtitle:
			'Дарим переработанным отходам вторую жизнь, превращая их в новые материалы',
	},
]

export default advantages
