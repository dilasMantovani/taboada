function generateValues(){
	var v1 = document.getElementById('v1');
	var v2 = document.getElementById('v2');

	v1.innerHTML = getRndInteger(1, 10);
	if(document.getElementById('radioFixo').checked && document.getElementById('textFixo').value!=""){
		v2.innerHTML = document.getElementById('textFixo').value;
		resetButtons();
	}else{
		v2.innerHTML = getRndInteger(1, 10);
	}

	createButtons();
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}

var correctResult;
function createButtons(){
	correctResult = Number(v1.innerHTML) * Number(v2.innerHTML);
	
	var buttonValues={
		result1: '' ,
		result2: '' ,
		result3: '' ,
		result4: '' 
	};

	var randomNumber = Math.floor(Math.random() * 3);

	if(randomNumber == 0){
		buttonValues.result1 = correctResult;

		buttonValues.result2 = getRndInteger(1, 100);
		buttonValues.result3 = getRndInteger(1, 100);
		buttonValues.result4 = getRndInteger(1, 100);
	}else if(randomNumber == 1){
		buttonValues.result2 = correctResult;

		buttonValues.result1 = getRndInteger(1, 100);
		buttonValues.result3 = getRndInteger(1, 100);
		buttonValues.result4 = getRndInteger(1, 100);
	}else if(randomNumber == 2){
		buttonValues.result3 = correctResult;

		buttonValues.result1 = getRndInteger(1, 100);
		buttonValues.result2 = getRndInteger(1, 100);
		buttonValues.result4 = getRndInteger(1, 100);
	}else if(randomNumber == 3){
		buttonValues.result4 = correctResult;

		buttonValues.result1 = getRndInteger(1, 100);
		buttonValues.result3 = getRndInteger(1, 100);
		buttonValues.result2 = getRndInteger(1, 100);
	}

	document.getElementById('result1').innerHTML = buttonValues.result1;
	document.getElementById('result2').innerHTML = buttonValues.result2;
	document.getElementById('result3').innerHTML = buttonValues.result3;
	document.getElementById('result4').innerHTML = buttonValues.result4;
}

function checkCorrect(control){

	var correctButton = getCorrectButton();

	document.getElementById('result1').className = 'btn btn-danger  btn-lg';
	document.getElementById('result2').className = 'btn btn-danger  btn-lg';
	document.getElementById('result3').className = 'btn btn-danger  btn-lg';
	document.getElementById('result4').className = 'btn btn-danger  btn-lg';

	document.getElementById(correctButton).className = 'btn btn-success  btn-lg';

	setTimeout(function(){
		resetButtons();
		generateValues();
	}, 2000);

}

function getCorrectButton(){
	var result1 = document.getElementById('result1').innerHTML;
	var result2 = document.getElementById('result2').innerHTML;
	var result3 = document.getElementById('result3').innerHTML;
	var result4 = document.getElementById('result4').innerHTML;

	if(result1 == correctResult){
		return 'result1';
	}
	if(result2 == correctResult){
		return 'result2';
	}
	if(result3 == correctResult){
		return 'result3';
	}
	if(result4 == correctResult){
		return 'result4';
	}
}

function resetButtons(){
		document.getElementById('result1').className = 'btn btn-outline-primary btn-lg';
		document.getElementById('result2').className = 'btn btn-outline-primary btn-lg';
		document.getElementById('result3').className = 'btn btn-outline-primary btn-lg';
		document.getElementById('result4').className = 'btn btn-outline-primary btn-lg';

		document.getElementById('result1').blur();
		document.getElementById('result2').blur();
		document.getElementById('result3').blur();
		document.getElementById('result4').blur();

	}

