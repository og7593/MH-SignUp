String.prototype.toCap = function() {
	var string = this.toString();
	if(!string.length) return;
	return string[0].toUpperCase() + string.slice(1);
};

console.log("test".toCap());

$(document).ready(function() {
	$('#submit').click(function(e) {

		e.preventDefault();

		var userData = {};

		userData.name = $('#fname').val().toCap() + " " + $('#lname').val().toCap();
		userData.email = $('#uniqname').val() + "@umich.edu";;
		userData.year = $('#year').val();
		userData.major = $('#major').val();
 
		console.log(userData);

	})

});
