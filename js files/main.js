/////////////ARRAY OF PRODUCTS
var products =[{cat:"coffe" ,name:"Espresso",price:3.000,img:"../photos/coffee/espresso.jpg"},
           {cat:"coffe" ,name:"Direct",price:4.500,img:"../photos/coffee/direct.jpg"},
           {cat:"coffe" ,name:"Cappuccino",price:3.500,img:"../photos/coffee/cappuccino2.jpg"},
           {cat:"juice" ,name:"Orange",price:5.500,img:"../photos/juice/orange.jpg"},
           {cat:"juice" ,name:"Kiwi",price:6.500,img:"../photos/juice/kiwi.jpg"},
           {cat:"juice" ,name:"Cocktail",price:7.000,img:"../photos/juice/cocktail.jpg"},
           {cat:"water" ,name:"Normal Water",price:2.000,img:"../photos/water/normal.jpg"},
           {cat:"water" ,name:"Narbonated Water",price:4.500,img:"../photos/water/carbonated.jpg"},
           {cat:"chicha" ,name:"Chicha Apple",price:10.000,img:"../photos/chicha/apple.png"},
           {cat:"chicha" ,name:"Classic",price:9.000,img:"../photos/chicha/classic.png"},          
          ];
////////ARRAY OF TABELS
var tables =[{table:"One"},{table:"Two"},{table:"Three"},{table:"Four"},{table:"Five"},{table:"Six"},{table:"Seven"},{table:"Eight"},{table:"Nine"},]
//////////////FUNCTION TABELS
function table(tables){
    for (var i=0;i<tables.length; i++){
        $(".cards-list").append('<a href="order.html"><div id='+ i +' class="cardtable" ><div class="card_image"><img src="../photos/table.jpg" /></div><div class="card_title title-white"><p>'+tables[i].table+'</p></div></div>"')
    }
}

table(tables)
/////////////////FUNCTION PRODUCTS
function product(products){  
    for (var i=0;i<products.length; i++){
        $(".prod-list").append('<div id='+ i +' class="card"   ><div class="card_image"><img src="'+products[i].img+'" /></div><div class="card_title title-white"><p></p></div></div>"')
    }
}


product(products)
///////////////TO CLICK AND GIT ORDERS
$('.card').click(function(){
    var selectedProduct = $(this).attr('id');
    console.log(products[selectedProduct]);
    $('#items').append('<span>'+'..................'+products[selectedProduct].name+'   : '+'</span>'+'<span>'+products[selectedProduct].price+'  DT '+'</span>'+'<button id="btn">delete</button>');
    // localStorage.setItem('table',(products[selectedProduct].name,products[selectedProduct].price));

})
/////////////////TO CLICK TO GIT OUR NUMBER OF TABLE
$('.cardtable').click(function(){
    var arrTables=[];
    var selectedTable = $(this).attr('id');
    console.log(tables[selectedTable]);
    localStorage.setItem('tablee',JSON.stringify(tables[selectedTable].table));
   
})
var tableNumber= localStorage.getItem('tablee');
$('#items').append('<span> Table :  '+tableNumber+'</span>')
//////////////////








