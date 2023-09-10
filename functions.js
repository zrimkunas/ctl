function test() {
	alert("hello");
}


function fedpov(house,income) {

	alert(house);
	
	var line = NaN;
	
	if(house==1) {
		line=29160;
	} else if(house==2) {
		line=39440;
	} else if(house==3) {
		line=49720;
	} else if(house==4) {
		line=60000;
	} else if(house==5) {
		line=70280;
	} else if(house==6) {
		line=80560;
	} else if(house==7) {
		line=90840;
	} else if(house==8) {
		line=101120;
	} else if(house>8) {
		line=101120+((house-8)*10280);
	}


	if(income < line) {
		return true;
	} else {
		return false;
	}
}

