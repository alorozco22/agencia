$(window).on("load", function(){
	// Comentar la siguiente línea si se desea ocultar el loader cuando cargue la página
	const myTimeout = setTimeout(ocultarLoader, 1000);
	//ocultarLoader();


});

function ocultarLoader(){
	$(".loader").fadeOut("slow");
}