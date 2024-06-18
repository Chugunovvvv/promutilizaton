'use client'
import { IInitialState } from '@/types'
import { FC, FormEvent, useState } from 'react'

const useForm = ({ initialState }) => {
	const [formData, setFormData] = useState<IInitialState>(initialState)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, type, value, checked } = e.target
		setFormData(prevState => ({
			...prevState,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		console.log(formData)
	}
	const resetForm = () => {
		setFormData(initialState)
	}
	return {
		handleChange,
		formData,
		handleSubmit,
		resetForm,
	}
}

export default useForm
