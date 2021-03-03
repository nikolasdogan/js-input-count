	var mesaj = document.getElementById('mesaj');
		var sayi = document.getElementById('sayi');
		
		mesaj.onkeyup = function(){
			sayi.innerHTML = 160 - this.value.length;
		}
