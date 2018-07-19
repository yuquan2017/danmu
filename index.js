(function(){
	var oContent = document.getElementsByClassName('content')[0],
		oInp = document.getElementsByTagName('input')[0],
		oBtn = document.getElementsByTagName('button')[0],
		oContH = oContent.offsetHeight,
		oContW = oContent.offsetWidth,
		value,
		speed = 5;
	init();
	function init() {
		bindEvent();

	}
	function bindEvent () {
		oInp.onblur = function(){
			value = this.value;
		}
		oInp.onfocus = function(){
			oInp.value = '';
		}
		oBtn.onclick = function () {
			oInp.value = '';
			var oText = document.createElement('div');
			oText.innerText = value;
			console.log(oContW, oContH)
			oText.className ='text';
			oText.style.top = Math.floor(Math.random() * (oContH - 80) ) + 'px',
			oText.style.color = randomColor();
			oContent.appendChild(oText);
			animate(oText);
		}
		document.onkeydown = function(e){
			if(e.keyCode == 13){
				if(oInp.value != ''){
					var oText = document.createElement('div');
					oText.innerText = oInp.value;
					oInp.value = '';
					// console.log(oContW, oContH)
					oText.className ='text';
					oText.style.top = Math.floor(Math.random() * oContH ) + 'px',
					oText.style.color = randomColor();
					oContent.appendChild(oText);
					animate(oText);

				}
				
			}	
		}
	}
	function randomColor () {
		console.log('color')
		var arr = [0, 1, 2,3,4,5,6,7,8,9,'a','b','c','d','e','f'],
			len = arr.length,
			str = '#';
		for(var i = 0; i < 6; i++){
			var j = Math.floor(Math.random() * 17);
			str += arr[j];
		}
		if(str == '#ffffff'){
			randomColor();
			return false;
		}
		return str;
	}

	function animate(dom){
		console.log('dom');
		dom.style.left = oContW - 300 + 'px';
		dom.timer = setInterval(function(){
			dom.style.left = parseInt(dom.style.left) - speed + 'px';
			console.log(dom.style.left)
			if(parseInt(dom.style.left) <= -300 ){
				clearInterval(dom.timer);
				oContent.removeChild(dom);
			}
		}, 40)
	}

}())