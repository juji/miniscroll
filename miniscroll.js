(function(){
	
	//
	var Dev = {};
	(function(a){Dev.pc = !(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)));})(navigator.userAgent || navigator.vendor || window.opera);
	
	if(!Dev.pc) return;
	
	//https://github.com/brandonaaron/jquery-mousewheel/ | Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh) | Licensed under the MIT License (LICENSE.txt)
	(function(e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e}else{e(jQuery)}})(function(e){function a(t){var n=t||window.event,o=r.call(arguments,1),u=0,a=0,c=0,h=0;t=e.event.fix(n);t.type="mousewheel";if("detail"in n){c=n.detail*-1}if("wheelDelta"in n){c=n.wheelDelta}if("wheelDeltaY"in n){c=n.wheelDeltaY}if("wheelDeltaX"in n){a=n.wheelDeltaX*-1}if("axis"in n&&n.axis===n.HORIZONTAL_AXIS){a=c*-1;c=0}u=c===0?a:c;if("deltaY"in n){c=n.deltaY*-1;u=c}if("deltaX"in n){a=n.deltaX;if(c===0){u=a*-1}}if(c===0&&a===0){return}if(n.deltaMode===1){var p=e.data(this,"mousewheel-line-height");u*=p;c*=p;a*=p}else if(n.deltaMode===2){var d=e.data(this,"mousewheel-page-height");u*=d;c*=d;a*=d}h=Math.max(Math.abs(c),Math.abs(a));if(!s||h<s){s=h;if(l(n,h)){s/=40}}if(l(n,h)){u/=40;a/=40;c/=40}u=Math[u>=1?"floor":"ceil"](u/s);a=Math[a>=1?"floor":"ceil"](a/s);c=Math[c>=1?"floor":"ceil"](c/s);t.deltaX=a;t.deltaY=c;t.deltaFactor=s;t.deltaMode=0;o.unshift(t,u,a,c);if(i){clearTimeout(i)}i=setTimeout(f,200);return(e.event.dispatch||e.event.handle).apply(this,o)}function f(){s=null}function l(e,t){return u.settings.adjustOldDeltas&&e.type==="mousewheel"&&t%120===0}var t=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],n="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice,i,s;if(e.event.fixHooks){for(var o=t.length;o;){e.event.fixHooks[t[--o]]=e.event.mouseHooks}}var u=e.event.special.mousewheel={version:"3.1.9",setup:function(){if(this.addEventListener){for(var t=n.length;t;){this.addEventListener(n[--t],a,false)}}else{this.onmousewheel=a}e.data(this,"mousewheel-line-height",u.getLineHeight(this));e.data(this,"mousewheel-page-height",u.getPageHeight(this))},teardown:function(){if(this.removeEventListener){for(var e=n.length;e;){this.removeEventListener(n[--e],a,false)}}else{this.onmousewheel=null}},getLineHeight:function(t){return parseInt(e(t)["offsetParent"in e.fn?"offsetParent":"parent"]().css("fontSize"),10)},getPageHeight:function(t){return e(t).height()},settings:{adjustOldDeltas:true}};e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})})
	
	$.fn.miniscroll = function(opt){
		var o = {
			'delta':41,
			'animate':true
		};
		
		if(opt && typeof opt == 'object') o = $.extend(o,opt);
		if(opt && typeof opt == 'string'){
			
			var odelta = $(this).data('__scrollopt').delta;
			var pos = $('.content',this).position().top;
			var delta = 0;
			
			if(opt=='bottom'){
				var to = $(this).height() - $('.content',this).outerHeight();
				delta = (pos - to) / odelta * -1;
			}
			
			else if(opt=='top'){
				var to = 0;
				delta = (pos - to) / odelta * -1;
			}

			else if(opt=='reset'){
				reset.call(this);
			}
			
			else if(/^\+/.test(opt)){
				opt = opt.replace(/^\+$/,'');
				if(/\%$/.test(opt)){
					opt = opt.replace(/\%$/,'') * 1;
					opt = $('.content',this).outerHeight() * (opt/100);
				}
				else if(/\px$/.test(opt)){opt = opt.replace(/\px$/,'') * 1;}
				delta = opt / odelta * -1;
			}
			
			else if(/^\-/.test(opt)){
				opt = opt.replace(/^\-$/,'');
				if(/\%$/.test(opt)){
					opt = opt.replace(/\%$/,'') * 1;
					opt = $('.content',this).outerHeight() * (opt/100);
				}
				else if(/\px$/.test(opt)){opt = opt.replace(/\px$/,'') * 1;}
				delta = opt / odelta * -1;
			}
			
			else if(/\px$/.test(opt)){
				var to = opt.replace(/\px$/,'')*1;
				delta = (pos + to) / odelta * -1;
			}
			
			else if(/\%$/.test(opt)){
				var to = ((opt.replace(/\%$/,'')*1)/100) * $('.content',this).outerHeight();
				delta = (pos + to) / odelta  * -1;
			}
			
			else if(/^\#/.test(opt)){
				if(!/^\#mscroll_/.test(opt)) opt = opt.replace(/^\#/,'#mscroll_');
				
				var h = opt.replace(/^\#mscroll_/,'#');
				
				if(window.location.hash !== h) window.location.hash = h;
				
				if(!$(opt,this).length) return;
				var to = $(opt,this).position().top;
				delta = (pos + to) / odelta * -1;
			}
			
			
			$(this).trigger('movescroll',delta);
			return;
		}
		
		function reset(){
			$('.content',this).css({'width':$(this).width()-$('.scrollpane',this).width()});
			var h = $(this).height() / $('.content',this).outerHeight();
			if(h>1) h=0;
			h = (h*100)+'%';
			
			$('.scrollindicator',this).css({'height': h });
		}
		
		return $(this).each(function(){
			
			if($(this).data('__scrollopt')){
				reset.call(this);
			}
			
			if(!Dev. pc) return;
			$(this).css({'overflow':'hidden','position':'relative'});
			$(this).append('<div class="scrollpane"><div class="scrollindicator"></div></div>');
			
			var ctop = 0;
			var t = $(this);
			var content = $('.content',this);
			var scroll = $('.scrollindicator',this);
			var pane = $('.scrollpane',this);
			
			$(this).data('__scrollopt',o);
			
			content.css({'position':'absolute','top':'0px','left':'0px'});
			if(o.animate) $(t).addClass('scrollanim');
			
			$(window).on('resize.miniscroll',function(){
				reset.call(t);
				$(this).trigger('movescroll',[1]);
			});
			
			$(this).on('mousewheel',function(e){
				$(this).trigger('movescroll',[e.deltaY]);
			});
			
			$(this).on('movescroll',function(e,delta){

				if(!scroll.height()){
					scroll.css({'top':'0%'});
					content.css({'top':0});
					return;
				}

				ctop += (delta*o.delta);
				var h = $(t).height() - $(content).outerHeight();
				if(ctop>0) ctop=0; if(ctop<h) ctop = h;
				content.css({'top':ctop+'px'});
				
				var sTop = 100 * Math.abs(ctop) / content.outerHeight();
				scroll.css({'top':sTop+'%'});
			});
			
			$(scroll).on('mousedown',function(e){
				var mtop = e.pageY;
				
				$('body').on('mousemove.miniscroll',function(e){
					var deltam = e.pageY - mtop;
					deltam *= content.outerHeight() / pane.height();
					deltam /= o.delta;
					$(t).trigger('movescroll',[-deltam]);
					mtop = e.pageY;
				});
				
				$('body').on('mouseup.miniscroll',function(e){
					$('body').off('mousemove.miniscroll');
					$('body').off('mouseup.miniscroll');
				});
				
				return false;
			});
			
			$('[id]',content).each(function(){
				var id = $(this).attr('id');
				if(/^mscroll_/.test(id)) return;
				$(this).attr('id','mscroll_'+id);
			});
			
			$(document).delegate('a[href^=#]','click.miniscroll',function(e){
				$(t).miniscroll($(this).attr('href'));
			});
			
			reset.call(this);
			
			if(window.location.hash)
			$(t).miniscroll(window.location.hash);
		});
	}
	
	$(function(){
		$('.miniscroll').miniscroll();
	});
	
})(window,jQuery);
