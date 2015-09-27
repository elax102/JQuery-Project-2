$(".question").click(function(){
	$(this).next().slideToggle("fast");
	$(this).children().toggleClass("collapse");
})