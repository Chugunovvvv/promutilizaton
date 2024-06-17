import licenses, { ILicenses } from '@/utils/licenses'
import React, { FC } from 'react'
import './LicensesWaster.scss'
import NotFound from './NotFound/NotFound'

interface ILicensesWaster {
	inputValue: string
	onSelectWaster: (license: ILicenses) => void
	selectedWaste: ILicenses[]
}

const LicensesWaster: FC<ILicensesWaster> = ({
	inputValue,
	onSelectWaster,
	selectedWaste,
}) => {
	const flilteredWaster = licenses.filter(
		license =>
			license.name
				.replace(/\s+/g, '')
				.toLocaleLowerCase()
				.includes(inputValue.toLocaleLowerCase().replace(/\s+/g, '')) ||
			license.code
				.replace(/\s+/g, '')
				.toLocaleLowerCase()
				.includes(inputValue.toLocaleLowerCase().replace(/\s+/g, ''))
	)

	const isSelected = (licensesId: number) => {
		return selectedWaste.some(license => license.id === licensesId)
	}

	return (
		<div className='waster'>
			{flilteredWaster.length ? (
				<ul className='waster__list'>
					{flilteredWaster.map(license => (
						<li
							key={license.id}
							onClick={() => onSelectWaster(license)}
							className={`${isSelected(license.id) ? 'waster__active' : ''}`}
						>
							<span className='waster__code'>{license.code}</span>
							<span className='waster__name'>{license.name}</span>
						</li>
					))}
				</ul>
			) : (
				<NotFound />
			)}
		</div>
	)
}

export default LicensesWaster
