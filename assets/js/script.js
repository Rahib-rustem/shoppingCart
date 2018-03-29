
var cart = [];

  var products = [

    {
        'id': 1,
        'title': 'Product 1',
        'img': '1.jpg',
        'info': 'product description'
    },
    {
        'id': 2,
        'title': 'Product 2',
        'img': '2.jpg',
        'info': 'product description'
    },
    {
        'id': 3,
        'title': 'Product 3',
        'img': '3.jpg',
        'info': 'product description'
    },
    {
        'id': 4,
        'title': 'Product 4',
        'img': '4.jpg',
        'info': 'product description'
    },
    {
        'id': 5,
        'title': 'Product 5',
        'img': '5.jpg',
        'info': 'product description'
    },
    {
        'id': 6,
        'title': 'Product 6',
        'img': '6.jpg',
        'info': 'product description'
    },
    {
        'id': 7,
        'title': 'Product 7',
        'img': '7.jpg',
        'info': 'product description'
    },
    {
        'id': 8,
        'title': 'Product 8',
        'img': '8.jpg',
        'info': 'product description'
    },

];

var items = $('.items');
products.forEach(function(product) {
  
    items.append('<div class="item">'+product.title +'<img class="img" src="assets/img/'+product.img + '">'+
    '<a href="">'+  product.info  +'</a>'+
    '<input type="button" value="add to cart" onclick="addCart('+product.id +')" class="add"/></div>'
  
 

)
});

        // var itemCount = 0;
        function addCart(id){
        for(i = 0; i< products.length; i++){
            if(products[i].id == id){
                // cart.push(products[i]);
                    cart[id] = products[i];
                }
        }
        console.log(cart);
        appendToCart()

        }
      
            function removeCart(id){
              for(j = 0; j < products.length; j++ ){
                  if(products[j].id == id){
                     delete (cart[id])
                  }
              }
              console.log(cart);
              appendToCart()
            }
           

            var cartBox = $('.cartBox');

            function appendToCart(){
            cartBox.empty();
            cart.forEach(element => {
                 cartBox.append( '<div class="item">'+element.title +'<img class="img" src="assets/img/'+element.img + '">'+
                 '<a href="">'+  element.info + '</a>'+
                '<button value="remove" onclick="removeCart('+element.id +')" class="add">remove cart</button></div>'
            

                    )

                });

                if (!$('.cartBox .item').length) $('.itemCount').empty();

                else $('.itemCount').html($('.cartBox .item').length).css('display', 'block');
    
    
            }

            var icon = $('.icon');
            var closeCart = $('.closeCart');
            $(document).ready(function(){
                icon.click(function(){ 
                cartBox.css({'display':'block'})
                closeCart.css({'display':'block'})
                // icon.css({'display':'none'})
                });

                closeCart.click(function(){ 
                cartBox.css({'display':'block'})
                cartBox.css({'display':'none'})
                closeCart.css({'display':'none'})
                // icon.css({'display':'block'})
            });
     
            });
           
              