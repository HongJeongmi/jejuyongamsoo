$(function() {
	const $slides = $('.slides-container')
	const $prev = $('#visual > .slides > .page > .prev')
	const $next = $('#visual > .slides > .page > .next')
	let nowIdx = 0

	setInterval(function() {
		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' })
		$('#visual > .slides > .page > strong > span').text(nowIdx + 1)
	}, 5000)

	// 이전
	$prev.on('click', function(evt) {
		evt.preventDefault()

		if (nowIdx > 0) {
			nowIdx--
		} else {
			nowIdx = 3
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' })
		$('#visual > .slides > .page > strong > span').text(nowIdx + 1)
	})
	// 다음
	$next.on('click', function(evt) {
		evt.preventDefault()

		if (nowIdx < 3) {
			nowIdx++
		} else {
			nowIdx = 0
		}
		$slides.stop().animate({ left: -100 * nowIdx + '%' })
		$('#visual > .slides > .page > strong > span').text(nowIdx + 1)
	})
})

$(function() {
	// 도트
	const $bg_1 = $('.bg_1')
	const $bg_2 = $('.bg_2')

	const spreadFn = function() {
		$bg_1.fadeIn(100).fadeOut(1500)
		$bg_2.fadeIn(200).fadeOut(1500)
	}
	spreadFn()

	setInterval(spreadFn, 2000)
})

// top 버튼
$(function() {
	$(window).on('scroll', function() {
		if ($(this).scrollTop() > 450) {
			$('.top').fadeIn()
		} else {
			$('.top').fadeOut()
		}
	})
	$('.top').on('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 400)
		return false
	})
})
