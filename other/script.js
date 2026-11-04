var _____WB$wombat$assign$function_____=function(name){return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name))||globalThis[name];};if(!globalThis.__WB_pmw){globalThis.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");
// popup code
function openWindow(url, name) {
  var l = openWindow.arguments.length;
  var w = "";
  var h = "";
  var features = "";

  for (i=2; i<l; i++) {
    var param = openWindow.arguments[i];
    if ( (parseInt(param) == 0) ||
      (isNaN(parseInt(param))) ) {
      features += param + ',';
    } else {
      (w == "") ? w = "width=" + param + "," :
       h = "height=" + param;
    }
  }

  features += w + h;
  var code = "popupWin = window.open(url, name";
  if (l > 2) code += ", '" + features;
  code += "')";
  eval(code);
  }
  
// drop down menu
function gotosite(site) {            
        if (site != "") {                    
                self.location=site; 
        }
}   

// dhtml Nav
function MM_showHideLayers(object,val) { 
document.getElementById(object).style.visibility = val; 
} 

//hirmes
function newPage()
{
	box = document.pageForm.pageSelect;
	destination = box.options[box.selectedIndex].value;
	if ( destination != "none" ) {
		location.href = destination + ".html";
	}
}

document.write('<style type=\"text/css\">.keyword {width:90px;}</style>')
}

/*
     FILE ARCHIVED ON 06:45:05 Dec 08, 2025 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 17:30:36 Nov 04, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.427
  captures_list: 0.572
  exclusion.robots: 0.052
  exclusion.robots.policy: 0.04
  esindex: 0.009
  cdx.remote: 10.403
  LoadShardBlock: 96.29 (3)
  PetaboxLoader3.datanode: 104.802 (4)
  load_resource: 116.874
  PetaboxLoader3.resolve: 58.757
*/