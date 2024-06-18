import { ILicenses } from '@/utils/licenses'
import './EmailTemplate.scss'

interface EmailTemplateProps {
	name: string
	email?: string
	commentary?: string
	telephone: string
	selectedWaste?: ILicenses[]
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	telephone,
	email,
	commentary,
	selectedWaste,
}) => {
	return (
		<div className='emailTemplate'>
			<h2>Общие данные:</h2>
			<ul className='emailTemplateList'>
				<li>{name} заполнил(а) заявку на сайте</li>
				<li>Номер телефона: {telephone}</li>
				{email && <li>Почта: {email}</li>}
				{commentary && <li>Комментарий: {commentary}.</li>}
			</ul>

			{selectedWaste?.length && (
				<>
					<h3>Выбранные отходы:</h3>
					<ul className='emailTemplateWaste'>
						{selectedWaste?.map(el => (
							<li key={el.id}>
								{el.code} - {el.name}, {el.quantity && <>{el.quantity} т.</>}
							</li>
						))}
					</ul>
				</>
			)}
		</div>
	)
}

export { EmailTemplate }
