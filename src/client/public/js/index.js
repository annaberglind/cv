(function () {
	$('.toggle-nav').click(function() {
		$('.navbar').toggleClass('nav-hidden');
	});
	$('.chart').easyPieChart({
        size:170,
        animate: 2000,
        lineCap:'round',
        scaleColor: false,
        scaleLength: 0,
        barColor: '#ccc',
        trackColor: '#fff',
        lineWidth: 15
    });
})();