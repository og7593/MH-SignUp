
//Capitlizes first letter of first name and last name
String.prototype.toCap = function() {
	var string = this.toString();
	if(!string.length) return;
	var lastName = string.split(' ').pop();
	var firstName = string.split(' ')[0];
	lastName = lastName[0].toUpperCase() + lastName.slice(1);
	firstName = firstName[0].toUpperCase() + firstName.slice(1);
	string = firstName + " " + lastName;
	return string;
};

$(document).ready(function() {
	$('#submit').click(function(e) {

		e.preventDefault();

		var userData = {
			interests: []
		};

		userData.name = $('#name').val().toCap();
		userData.email = $('#uniqname').val() + "@umich.edu";;
		userData.year = $('#yearSelect').val();
		userData.major = $('#majorSelect').val();

		$("input:checkbox:checked").each(function() {
       		userData.interests.push($(this).val());
  		});
 		
 		console.log(userData.interests);
		console.log(userData);

	})

});
