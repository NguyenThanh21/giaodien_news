//Các xử lí cho kịch bản cho index.html -main.js

//Khai báo biến toàn cục global
var def ="--- từ khoá---";
var emp ="";

function setFirstTime(fn){
		// tham chiếu đối tượng nhập từ khoá
		// window.document.frmSearch.txtKeyword.value= def;
		//var fn= window.document.forms[1];
		fn.txtKeyword.value=def;
}
function setKeyword(fn, isClick){
	// Lấy giá trị từ khoá
	var value = fn.txtKeyword.value;
	
	if(isClick){
		//khi kích chuột vào
	
		if (value.trim()== def){
			fn.txtKeyword.value = emp;
		}
	}else{
			//khi thoạt chuột ra
		if(value.trim()== emp){
			fn.txtKeyword.value = def;
		}
	}
}
function checkValidKeyword(fn){
	var value = fn.txtKeyword.value;
	
	value= value.trim();
	
	if((value== def) || (value== emp)){
		var message= " Hãy nhập vào từ khoá tìm kiếm";
		window.alert(message);
		fn.txtKeyword.focus();
		fn.txtKeyword.select();
		return false;
	}
	return true;
}