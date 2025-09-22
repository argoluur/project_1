const dateNowFormattedET = function(){	
	let timeNow = new Date();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	const dayNamesET = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];

	return dayNamesET[timeNow.getDay()] + " " + timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeNowFormattedET = function(){
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const partOfDay = function(){
	let dayPart = "suvaline aeg";
	let hourNow = new Date().getHours;
	if(hourNow <= 6){
		dayPart = "varahommik";
	} else if (hourNow < 12){
		dayPart = "hommik";
	} else if (hourNow == 12){
		dayPart = "keskpäev";
	} else if (hourNow <= 15){
		dayPart = "lõuna";
	} else if (hourNow <= 24){
		dayPart = "õhtu";
	}
	return dayPart;
}

module.exports = {fullDate: dateNowFormattedET, fullTime: timeNowFormattedET, dayTime: partOfDay};