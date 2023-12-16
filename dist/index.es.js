var r;
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/r={exports:{}},function(){var t={}.hasOwnProperty;function n(){for(var r=[],e=0;e<arguments.length;e++){var i=arguments[e];if(i){var o=typeof i;if("string"===o||"number"===o)r.push(i);else if(Array.isArray(i)){if(i.length){var a=n.apply(null,i);a&&r.push(a)}}else if("object"===o){if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]")){r.push(i.toString());continue}for(var s in i)t.call(i,s)&&i[s]&&r.push(s)}}}return r.join(" ")}r.exports?(n.default=n,r.exports=n):window.classNames=n}();
