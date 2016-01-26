    function addClass(obj, cls) {
        obj.className += " " + cls;
    }
    function removeClass(obj, cls) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, " ");
    }
document.getElementById("main").offsetParent= document.body;
document.getElementById("introduction").offsetParent= document.body;
document.getElementById("work").offsetParent= document.body;
document.getElementById("blog").offsetParent= document.body;
document.getElementById("contact").offsetParent= document.body;

document.body.onscroll = function(event) {
	if((parseInt(document.body.scrollTop) + 50) > parseInt(document.getElementById("main").offsetTop)){
	addClass(document.getElementById("introductionli"), "active");
	removeClass(document.getElementById("workli"), "active");
	removeClass(document.getElementById("blogli"), "active");
	removeClass(document.getElementById("contactli"), "active");
	}
	if((parseInt(document.body.scrollTop) + 50) > parseInt(document.getElementById("work").offsetTop)){
	removeClass(document.getElementById("introductionli"), "active");
	addClass(document.getElementById("workli"), "active");
	removeClass(document.getElementById("blogli"), "active");
	removeClass(document.getElementById("contactli"), "active");
	}
	if((parseInt(document.body.scrollTop) + 50) > parseInt(document.getElementById("blog").offsetTop)){
	removeClass(document.getElementById("introductionli"), "active");
	removeClass(document.getElementById("workli"), "active");
	addClass(document.getElementById("blogli"), "active");
	removeClass(document.getElementById("contactli"), "active");
	}
	if((parseInt(document.body.scrollTop) + 50) > parseInt(document.getElementById("contact").offsetTop)){
	removeClass(document.getElementById("introductionli"), "active");
	removeClass(document.getElementById("workli"), "active");
	removeClass(document.getElementById("blogli"), "active");
	addClass(document.getElementById("contactli"), "active");
	}
};

