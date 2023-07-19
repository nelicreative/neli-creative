//This function will be called when user click changing language
function translate(lng, tagAttr){
  var translate = new Translate();
  translate.init(tagAttr, lng);
  translate.process();
  if(lng == 'en'){
    $("#navbarDropdownMenuLang").html("<span class='flag-icon flag-icon-us'></span> EN");
    $("#enTranslator").css('color', '#f4623a');
    $("#viTranslator").css('color', '#212529');
  }
  if(lng == 'vi'){
    $("#navbarDropdownMenuLang").html("<span class='flag-icon flag-icon-vn'></span> VI");
    $("#viTranslator").css('color', '#f4623a');
    $("#viTranslator").css('color', '#212529');
  }
}
$(document).ready(function(){
  //This is id of HTML element (English) with attribute lng-tag
  $("#enTranslator").click(function(){
    translate('en', 'lng-tag');
  });
  //This is id of HTML element (Khmer) with attribute lng-tag
  $("#viTranslator").click(function(){
    translate('vi', 'lng-tag');
  });
});