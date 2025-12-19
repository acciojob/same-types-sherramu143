function isSameType(value1, value2) {
  //your js code here
	if((Number.NaN(value1))&&(Number.NaN(value2))){
	return true;}
	
	else
	      if((typeof(value1)==typeof(value2))){
		return true;
	}else { return false}
}


alert(isSameType(value1, value2));
