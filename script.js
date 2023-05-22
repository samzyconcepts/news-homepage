const mobileMenu = document.querySelector('.mobile-menu'),
	openNav = document.querySelector('img.open'),
	closeNav = document.querySelector('img.close')

openNav.addEventListener('click', () => {
	mobileMenu.classList.add('active')
        document.body.classList.add('fixed-position')
})

closeNav.addEventListener('click', () => {
	mobileMenu.classList.remove('active')
        document.body.classList.remove('fixed-position')
})
