/**
  * Created by Yasin Sunmaz
  * Date: 02.04.2019
  * Time: 20:07
  */
$(".category").click(function(){
  //First
	var categoryId=$(this).data("category-id");
  //Second
  var categoryIdTwo=$(this).attr("data-category-id");
  alert("Data= "+categoryId+" Attr= "+categoryIdTwo);
});