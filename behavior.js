document.addEventListener("DOMContentLoaded", function(event) {
    var $smartThumbnail = document.getElementById("smart_thumbnail");
    
    $smartThumbnail.addEventListener("click", function() {
	if ($smartThumbnail.className == "") {
	    $smartThumbnail.className = "small";
	} else {
	    $smartThumbnail.className = "";
	}
    });
});
