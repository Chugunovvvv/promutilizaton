import { useEffect, useState } from 'react'

const useModal = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const handleOpenModal = () => {
		setIsOpen(true)
	}
	const handleCloseModal = () => {
		setIsOpen(false)
	}
	useEffect(() => {
		if (isOpen) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
			document.documentElement.style.overflow = 'auto'
		}
	}, [isOpen])

	useEffect(() => {
		const onCloseToEsc = (e: KeyboardEvent) =>
			isOpen && e.key === 'Escape' && handleCloseModal()

		window.addEventListener('keyup', onCloseToEsc)
		return () => window.removeEventListener('keyup', onCloseToEsc)
	}, [isOpen])
	return {
		isOpen,
		handleCloseModal,
		handleOpenModal,
	}
}

export default useModal
