/*
	WEB 303
	Starting file for Assignment 1 
	{Sanjna Rani}
*/

$(document).ready(function () {
  $("#salary, #percent").keyup(function () {
    let salaryVal = $("#salary").val();
    let percentVal = $("#percent").val();
    if (salaryVal && percentVal) {
		const price = parseFloat(salaryVal) * parseFloat(percentVal) / 100;
		const spendValue = "$" + price.toFixed();
		$("#spend").text(spendValue);
	}
	else{
		$("#spend").text("$0")	
	}
  });
});