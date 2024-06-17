import { ILicenses } from '@/utils/licenses'

interface EmailTemplateProps {
	name: string
	email?: string
	comment?: string
	telephone: string
	waste?: ILicenses[]
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	telephone,
	email,
	comment,
	waste,
}) => {
	return (
		<div>
			<p style={{ fontSize: '18px', fontWeight: '500' }}>
				{name} заполнил(а) заявку на сайте, номер телефона: {telephone}, почта:{' '}
				{!!email && email}, комментарий: {!!comment && comment}. Выбранные
				отходы:{' '}
				{!!waste &&
					waste?.map(el => (
						<span>
							{el.name} - {el.code}
						</span>
					))}
				{}
			</p>
		</div>
	)
}

export { EmailTemplate }
