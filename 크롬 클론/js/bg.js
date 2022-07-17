// 이미지 변경 함수
const img_url = [
	'img/0.jpg',
	'img/1.jpg',
	'img/2.jpg',
	'img/3.jpg',
	'img/4.jpg'
];


function changeBg() {

					// 0 ~ 2 랜덤값 생성 (이미지 번호)
					let imgNum = Math.floor(Math.random() * 5)
					console.log(imgNum);

					// 이미지 변경
					$('body').css({
							background: `url(img/filter1.png),
							url(${img_url[imgNum]})`
					})

}