$(function() {
$("#submit_form").click(function(e){
var li1a= $("#element_1_1").val();
var li1b= $("#element_1_2").val();
var li2= $("#element_2").val();
var li28= $("#element_28").val();
var li31= $("#element_31").val();
var li43= $("#element_43").val();
var li4= $("#element_4").val();
var li5= $("#element_5").val();
var li44= $("#element_44").val();
var li33a= $("#element_50_1").val();
var li33c= $("#element_50_3").val();
var li33d= $("#element_50_4").val();
var li33e= $("#element_50_5").val();
var li33f= $("#element_50_6").val();
var li45= $("#element_45").val();
var li53= $("#element_53").val();
var li56= $("#element_56").val();
var li55= $("#element_55").val();
var li57= $("#element_57").val();
var li59= $("#element_59").val();
var li60= $("#element_60").val();
var li62= $("#element_62").val();
var li64= $("#element_64").val();
 
var mm58=$("#element_58_1").val();
var dd58=$("#element_58_2").val();
var yy58=$("#element_58_3").val();
var li58=mm58+"/"+dd58+"/"+yy58;
 
var mm8=$("#element_8_1").val();
var dd8=$("#element_8_2").val();
var yy8=$("#element_8_3").val();
var li8=mm8+"/"+dd8+"/"+yy8;
 
var mm9=$("#element_9_1").val();
var dd9=$("#element_9_2").val();
var yy9=$("#element_9_3").val();
var li9=mm9+"/"+dd9+"/"+yy9;
 
var mm7=$("#element_47_1").val();
var dd7=$("#element_47_2").val();
var yy7=$("#element_47_3").val();
var li7=mm7+"/"+dd7+"/"+yy7;
 
var mm10=$("#element_61_1").val();
var dd10=$("#element_61_2").val();
var yy10=$("#element_61_3").val();
var li10=mm10+"/"+dd10+"/"+yy10;
 
var querystring ="&element_1_1="+li1a+"&element_1_2="+li1b+"&element_2="+li2+"&element_28="+li28+"&element_31="+li31+"&element_43="+li43+"&element_4="+li4+"&element_5="+li5+"&element_44="+li44+"&element_33_1="+li33a+"&element_33_3="+li33c+"&element_33_4="+li33d+"&element_33_5="+li33e+"&element_33_6="+li33f+"&element_50="+li8+"&element_51="+li9+"&element_45="+li45+"&element_53="+li7+"&element_59="+li53+"&element_60="+li56+"&element_65="+li55+"&element_62="+li57+"&element_63="+li58+"&element_64="+li59+"&element_66="+li60+"&element_70="+li10+"&element_71="+li62+"&element_72="+li64;
querystring = querystring.replace(/\s/g,'%20');
var url = "https://okstate.forms-db.com/view.php?id=450977"+querystring;
$("#element_46").val(url);
});
});