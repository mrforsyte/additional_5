module.exports = function check(str, bracketsConfig) {
	var item = bracketsConfig.toString().split(",");

	var one = 0;

	for(var i = 0; i< item.length; i++){
		for (var j = 0; j<str.length; j++){
			if(str.charAt(j) == item[i]){
				one++;
			}
		}
	}
	if (one%2 == 0){
		return true;
	}
}


