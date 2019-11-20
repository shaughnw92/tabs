// JavaScript Document

$(document).ready(function() {

	$(".tabs--list .tabs__item").click(function(e) { // When .tab in .tab-list is clicked… event or E is the variable used in the function
		e.preventDefault(); // preventDefault(); stops the default action from occuring, so in this situation preventDefault() is stopping the href from reloading the page

		$(".tabs__item").removeClass("tabs__active"); // .tab has to lose active class in order to not be active
		$(".tabs--content").removeClass("tabs--content__show"); // the content for the tab is hidden
		$(this).addClass("tabs__active"); // the clicked on tab will become active
		$($(this).attr("href")).addClass("tabs--content__show"); // the "href" clicked on is used to decide which '.tab-content' will be opened
	});
});
