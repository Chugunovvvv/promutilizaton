import { useEffect, useState } from 'react'

const useMobileButton = () => {
	const [active, setIsActive] = useState<boolean>(false)

	const handleToggleOpenMenu = () => {
		setIsActive(!active)
	}
	const handleCloseMenu = () => {
		setIsActive(false)
	}

	useEffect(() => {
		if (active) {
			document.documentElement.style.overflow = 'hidden'
			document.body.style.overflow = 'hidden'
		} else {
			document.documentElement.style.overflow = 'auto'
			document.body.style.overflow = 'auto'
		}
	}, [active])

	return { active, handleToggleOpenMenu, handleCloseMenu }
}

export default useMobileButton
