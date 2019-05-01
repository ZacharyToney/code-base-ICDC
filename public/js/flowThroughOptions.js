/*  A $( document ).ready() block.
 $( document ).ready(function() {
 }); */

function flowThroughOptions() {
	var countOfOptions = $('#jsonClassRoomStringsFromDatabase option').length;

	if (countOfOptions == 0) {

	} else {

		$('#jsonClassRoomStringsFromDatabase option:eq(' + (countOfOptions - 1) + ')').prop('selected', true);

		var i;
		for (i = 0; i < (countOfOptions); i++) {





			/**
			 * Create a closure to preserve the value of "i"
			 */
			(function (i) {

				setTimeout(function () {
					$('#jsonClassRoomStringsFromDatabase option:eq(' + i + ')').prop('selected', true);

					var optionSelected = $('#jsonClassRoomStringsFromDatabase').find("option:selected");
					var valueSelected = optionSelected.val();
					loadJsonString(valueSelected);
				}, i * 1500);

			}(i));



		}
	}
}