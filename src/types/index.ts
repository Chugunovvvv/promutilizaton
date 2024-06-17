export interface IInitialState {
	name: string
	phone: string
	email?: string
	commentary?: string
	checked: boolean
	quantity?: string
}

export interface IModal {
	isOpen: boolean
	onClose: () => void
}
