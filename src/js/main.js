const reviewItems = document.querySelectorAll('.card__review-item')
const stars = document.querySelector('.card__review')
const submitBtn = document.querySelector('.card__submit')
const span = document.querySelector('.choice')
const reverse = document.querySelector('.reverse-card')
const front = document.querySelector('.front-card')

reviewItems.forEach(el => {
	const programStart = () => {
		let rating = el.textContent
		reviewItems.forEach(el => {
			el.classList.contains('clicked')
			el.classList.remove('clicked')
		})
		el.classList.add('clicked')
		submitBtn.addEventListener('click', () => {
			front.classList.add('not')
			front.classList.remove('card')
			reverse.classList.remove('not')
			reverse.classList.add('card')
			span.textContent = rating
		})
	}

	el.addEventListener('click', programStart)
})
