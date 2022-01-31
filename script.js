/*
	WEB 303 Assignment 1 - jQuery
	{Ved Patil}
*/
$(function(){

	let a = document.getElementById('yearly-salary');
	let b = document.getElementById('percent');

	let z=document.getElementById('amount');

	a.addEventListener('change', function () {
		z.textContent = this.value;
	});
	b.addEventListener('change', function () {
		z.textContent = this.value;
	});

	let x=document.getElementById('yearly-salary').value;
	let y=document.getElementById('percent').value;
	
	
	let result = x * y / 100;
	document.getElementById('amount').value = result;

	result.innerHTML = z;
});
