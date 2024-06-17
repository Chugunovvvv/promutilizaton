import { ILicenses } from '@/utils/licenses'
import React, { FC } from 'react'
import './SelectedWaster.scss'

interface ISelectedWaster {
	selectedWaster: ILicenses[]
	handleRemoveWaste: (licenseId: number) => void
}

const SelectedWaster: FC<ISelectedWaster> = ({
	selectedWaster,
	handleRemoveWaste,
}) => {
	return (
		<ul className='selectedWaster'>
			{selectedWaster.map(selectedWaste => (
				<li key={selectedWaste.id}>
					<span>{selectedWaste.code}</span>
					<div className='selectedWaster__wrap'>
						<span>{selectedWaste.name}</span>
						<span
							className='selectedWaster__delete'
							onClick={() => handleRemoveWaste(selectedWaste.id)}
						>
							&times;
						</span>
					</div>
				</li>
			))}
		</ul>
	)
}

export default SelectedWaster
