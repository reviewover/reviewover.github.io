function submitacymailingform(task,formName){var varform=eval("document."+formName);if(!varform.elements)varform=varform[1];if(task!="optout"){nameField=varform.elements["user[name]"];if(nameField&&(typeof acymailing!="undefined"&&nameField.value==acymailing["NAMECAPTION"]||nameField.value.length<2)){if(typeof acymailing!="undefined"){alert(acymailing["NAME_MISSING"])}nameField.className=nameField.className+" invalid";return false}}var emailField=varform.elements["user[email]"];if(emailField){if(typeof acymailing=="undefined"||emailField.value!=acymailing["EMAILCAPTION"])emailField.value=emailField.value.replace(/ /g,"");var filter=/^([a-z0-9_'&\.\-\+])+\@(([a-z0-9\-])+\.)+([a-z0-9]{2,10})+$/i;if(!emailField||typeof acymailing!="undefined"&&emailField.value==acymailing["EMAILCAPTION"]||!filter.test(emailField.value)){if(typeof acymailing!="undefined"){alert(acymailing["VALID_EMAIL"])}emailField.className=emailField.className+" invalid";return false}}if(varform.elements["hiddenlists"].value.length<1){var listschecked=false;var alllists=varform.elements["subscription[]"];if(alllists&&typeof alllists.value=="undefined"){for(b=0;b<alllists.length;b++){if(alllists[b].checked)listschecked=true}if(!listschecked){alert(acymailing["NO_LIST_SELECTED"]);return false}}}if(task!="optout"&&typeof acymailing!="undefined"&&typeof acymailing["reqFields"+formName]!="undefined"&&acymailing["reqFields"+formName].length>0){for(var i=0;i<acymailing["reqFields"+formName].length;i++){elementName="user["+acymailing["reqFields"+formName][i]+"]";elementToCheck=varform.elements[elementName];if(elementToCheck){var isValid=false;if(typeof elementToCheck.value!="undefined"){if(elementToCheck.value==" "&&typeof varform[elementName+"[]"]!="undefined"){if(varform[elementName+"[]"].checked){isValid=true}else{for(var a=0;a<varform[elementName+"[]"].length;a++){if((varform[elementName+"[]"][a].checked||varform[elementName+"[]"][a].selected)&&varform[elementName+"[]"][a].value.length>0)isValid=true}}}else{if(elementToCheck.value.length>0){if(typeof acymailing["excludeValues"+formName]=="undefined"||typeof acymailing["excludeValues"+formName][acymailing["reqFields"+formName][i]]=="undefined"||acymailing["excludeValues"+formName][acymailing["reqFields"+formName][i]]!=elementToCheck.value)isValid=true}}}else{for(var a=0;a<elementToCheck.length;a++){if(elementToCheck[a].checked&&elementToCheck[a].value.length>0)isValid=true}}if(!isValid){elementToCheck.className=elementToCheck.className+" invalid";alert(acymailing["validFields"+formName][i]);return false}}else{if(varform.elements[elementName+"[day]"]&&varform.elements[elementName+"[day]"].value<1||varform.elements[elementName+"[month]"]&&varform.elements[elementName+"[month]"].value<1||varform.elements[elementName+"[year]"]&&varform.elements[elementName+"[year]"].value<1902){if(varform.elements[elementName+"[day]"]&&varform.elements[elementName+"[day]"].value<1)varform.elements[elementName+"[day]"].className=varform.elements[elementName+"[day]"].className+" invalid";if(varform.elements[elementName+"[month]"]&&varform.elements[elementName+"[month]"].value<1)varform.elements[elementName+"[month]"].className=varform.elements[elementName+"[month]"].className+" invalid";if(varform.elements[elementName+"[year]"]&&varform.elements[elementName+"[year]"].value<1902)varform.elements[elementName+"[year]"].className=varform.elements[elementName+"[year]"].className+" invalid";alert(acymailing["validFields"+formName][i]);return false}}}}var captchaField=varform.elements["acycaptcha"];if(captchaField){if(captchaField.value.length<1){if(typeof acymailing!="undefined"){alert(acymailing["CAPTCHA_MISSING"])}captchaField.className=captchaField.className+" invalid";return false}}if(task!="optout"){var termsandconditions=varform.terms;if(termsandconditions&&!termsandconditions.checked){if(typeof acymailing!="undefined"){alert(acymailing["ACCEPT_TERMS"])}termsandconditions.className=termsandconditions.className+" invalid";return false}}taskField=varform.task;taskField.value=task;if(!varform.elements["ajax"]||!varform.elements["ajax"].value||varform.elements["ajax"].value=="0"){varform.submit();return false}if(typeof String.prototype.parseQueryString!="function"){String.prototype.parseQueryString=function(){var e=this.split(/[&;]/),t={};if(e.length)e.each(function(e){var n=e.indexOf("="),r=n<0?[""]:[e.substr(0,n)],i=decodeURIComponent(e.substr(n+1)),s=t;r.each(function(e,t){var n=s[e];if(t<r.length-1)s=s[e]=n||{};else if($type(n)=="array")n.push(i);else s[e]=$defined(n)?[n,i]:i})});return t}}var form=$(formName);data=form.toQueryString().parseQueryString();if(typeof Ajax=="function"){(new Ajax(form.action,{data:data,method:"post",onRequest:function(){form.addClass("acymailing_module_loading");form.setStyle("filter:","alpha(opacity=50)");form.setStyle("-moz-opacity","0.5");form.setStyle("-khtml-opacity","0.5");form.setStyle("opacity","0.5")},onSuccess:function(e){e=Json.evaluate(e);acymailingDisplayAjaxResponse(unescape(e.message),e.type,formName)},onFailure:function(){acymailingDisplayAjaxResponse("Ajax Request Failure","error",formName)}})).request()}else{(new Request.JSON({url:$(formName).action,data:data,method:"post",onRequest:function(){form.addClass("acymailing_module_loading");form.setStyle("filter:","alpha(opacity=50)");form.setStyle("-moz-opacity","0.5");form.setStyle("-khtml-opacity","0.5");form.setStyle("opacity","0.5")},onSuccess:function(e){acymailingDisplayAjaxResponse(unescape(e.message),e.type,formName)},onFailure:function(){acymailingDisplayAjaxResponse("Ajax Request Failure","error",formName)}})).send()}return false}function acymailingDisplayAjaxResponse(e,t,n){var r=$("acymailing_togglemodule_"+n);if(r&&r.hasClass("acyactive")){var i=r.getParent().getParent().getChildren()[1];i.setStyle("height","")}var s=$$("#acymailing_fulldiv_"+n+" .responseContainer")[0];if(typeof s=="undefined"){s=new Element("div");s.inject($("acymailing_fulldiv_"+n),"top");oldContainerHeight="0px"}else{oldContainerHeight=s.getStyle("height")}s.className="responseContainer";$(n).removeClass("acymailing_module_loading");s.innerHTML=e;var o=$(n);if(t=="success"){s.addClass("acymailing_module_success")}else{s.addClass("acymailing_module_error");o.setStyle("filter:","alpha(opacity=100)");o.setStyle("-moz-opacity","1");o.setStyle("-khtml-opacity","1");o.setStyle("opacity","1")}newContainerHeight=s.getStyle("height");if(typeof Ajax=="function"){if(t=="success"){var u=new Fx.Styles(o,{duration:500,transition:Fx.Transitions.linear});u.start({height:[o.getSize().size.y,0],opacity:[1,0]})}try{s.setStyle("height",oldContainerHeight+"px");s.setStyle("filter:","alpha(opacity=0)");s.setStyle("-moz-opacity","0");s.setStyle("-khtml-opacity","0");s.setStyle("opacity","0")}catch(a){}var f=new Fx.Styles(s,{duration:500,transition:Fx.Transitions.linear});f.start({height:[oldContainerHeight,newContainerHeight],opacity:[0,1]})}else{if(t=="success"){o.set("morph");o.morph({height:"0px",opacity:0})}s.setStyles({height:oldContainerHeight,opacity:0});s.set("morph");s.morph({height:newContainerHeight,opacity:1})}}