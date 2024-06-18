import { ILicenses } from '@/utils/licenses'

export interface IInitialState {
	name: string
	phone: string
	email?: string
	commentary?: string
	checked: boolean
	quantity?: string
	waste?: ILicenses[]
}

export interface IModal {
	isOpen: boolean
	onClose: () => void
}
