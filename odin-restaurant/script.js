function getHome(){
	$("#content").empty();
	$("#content").append('<img class="scale" src="http://marcpro-strava.com/wordpress/wp-content/uploads/2012/05/PadThai.jpg">');
	$("#content").append("<p>Come dine with us! We are located in sunny California. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum veritatis hic neque! Illo facilis nobis, nihil, earum, atque sed voluptatum deserunt obcaecati assumenda nulla in, animi autem qui magni saepe.</p>");	
}

function getMenu(){
	$("#content").empty();
	$("#content").append('<img class="scale" src="http://thecandiedviolets.files.wordpress.com/2010/07/mga_1355.jpg">');
	$("#content").append("<h2>menu</h2>");
	$("#content").append("<ul><li>Chicken</li><li>Broccoli</li><li>Beef</li><li>Soup de Jour</li><ul>");	
}

function getAbout(){
	$("#content").empty();
	$("#content").append('<img class="scale" src="http://4.bp.blogspot.com/-YoxdEQVGzEI/T506nRpRhyI/AAAAAAAAA8A/u_C60NIhtOE/s1600/DSC_0779.JPG">');
		$("#content").append("<h2>about</h2>");
	$("#content").append("<p>Founded in 1984, we are founded by a group of lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum veritatis hic neque! Illo facilis nobis, nihil, earum, atque sed voluptatum deserunt obcaecati assumenda nulla in, animi autem qui magni saepe.</p><img class='scale' src='http://www.myzticisle.com/images/lamesa_ca-map.jpg'>");
}

$(document).ready(function() {
	getHome();

	$("#home").click(function() { getHome(); });
	$("#menu").click(function() { getMenu(); });
	$("#about").click(function() { getAbout(); });

	$('ul.nav li').mouseenter(function() {
		$(this).fadeTo('fast','0.5');
	});

	$('ul.nav li').mouseleave(function() {
		$(this).fadeTo('fast','1');
	});	

});
