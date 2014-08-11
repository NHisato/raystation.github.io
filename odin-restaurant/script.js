function getHome(){
	$("#content").empty();
	$("#content").append('<img class="scale" src="http://placekitten.com/800/400">');
	$("#content").append("<h2>Wok the Line</h2>");
	$("#content").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum veritatis hic neque! Illo facilis nobis, nihil, earum, atque sed voluptatum deserunt obcaecati assumenda nulla in, animi autem qui magni saepe.</p>");	
}

$(document).ready(function() {
	getHome();

	$("#home").click(function() {
		getHome();
  });

	$("#about").click(function() {
		$("#content").empty();
		$("#content").append('<img class="scale" src="http://placekitten.com/500/200">');
			$("#content").append("<h2>about</h2>");
		$("#content").append("<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum veritatis hic neque! Illo facilis nobis, nihil, earum, atque sed voluptatum deserunt obcaecati assumenda nulla in, animi autem qui magni saepe.</p>");
  });

	$("#menu").click(function() {
		$("#content").empty();
		$("#content").append('<img class="scale" src="http://placekitten.com/700/200">');
		$("#content").append("<h2>menu</h2>");
		$("#content").append("<ul><li>Chicken</li><li>Broccoli</li><li>Beef</li><li>Soup de Jour</li><ul>");
  });

	$('ul.nav li').mouseenter(function() {
		$(this).fadeTo('fast','0.5');
	});

	$('ul.nav li').mouseleave(function() {
		$(this).fadeTo('fast','1');
	});	

});
