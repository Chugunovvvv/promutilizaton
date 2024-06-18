import React, { FC } from 'react'
import './InputAgree.scss'

interface IInputAgree {
	name: string
	value?: boolean
	onChange: (e: any) => void
}

const InputAgree: FC<IInputAgree> = ({ name, value = true, onChange }) => {
	return (
		<div className='inputAgree'>
			<label>
				<input
					required={true}
					type='checkbox'
					name={name}
					checked={value}
					onChange={onChange}
				/>
				<span>Согласие на обработку персональных данных</span>
			</label>
		</div>
	)
}

export default InputAgree
