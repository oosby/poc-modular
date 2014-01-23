Handlebars.registerHelper('date', function(options) {
	var unixDate = options.fn(this)
		, date = new Date(unixDate  * 1000)
		, monthArr = ['jan', 'feb', 'mar', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'];
	return '<span class="month">' + monthArr[date.getMonth()] + ' ' + date.getDate() + '</span><span class="year">' + date.getFullYear() + '</span>';
});