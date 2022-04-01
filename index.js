//$ is a querySelector sign which is same as document.querySelector
//this is shorthand method of queryselector
/*
$('snap').css('color','green');
$('snap').css('font-size','20px');
$('snap').css('font-weight','bold');
*/
//instead of above perticular declaration for each element we 
//can make class of css and use this 
$('snap').addClass('text-decorate');//add css from style.css class
$('snap').text('Namaste Nepal');//to change text
$('h3').addClass('text-decorate');//
//to remove we can use 
//$('snap').removeClass('text-decorate')
$('button').addClass('butn margin');//multiple classes added
$('button').html('<em>click me</em>')
$('button.btn1').text('fade(I/O)');
$('a').attr('href','https://www.linkedin.com/');
//we get the value of this property
console.log($('snap').css('color'));
console.log($('snap').css('font-size'));
$('snap').click(function(){
    $('snap').css('color','purple');
})
//instead of  above we can use which has same op
$('snap').on('click', function(){
    $('snap').css('color','violet');
})
$('button').click(function(){
    $('snap').css('color','blue');
})
$('input').keypress(function(event){
    console.log(event.key);
})
$('snap').on('mouseover',function(){
    $('snap').css('color','red');
})
$('snap').on('mouseout',function(){
    $('snap').css('color',' rgb(1, 97, 68)');
})
//creating buttons before 
//we can create html element before after prepend and append
$('p').prepend('<button type="button" class="okk">Up/Down</button>');
$('button').addClass('butn margin');

//$('button').remove(); this will remove all the button

//$('button').hide();//hide all the buttons
$('button').show();//show
$('a').fadeOut('slow');
$('a').fadeIn('slow');
$('button').slideUp('slow');
$('button').slideDown('slow');
//this is for toggle mode
$('button.okk').on('click',function(){
    $('section').slideToggle();
    $('a').fadeToggle('slow'); 
});
$('button.btn1').on('click',function(){
    $('snap').fadeOut('slow').fadeIn('slow');
})
$('h3').on('mouseover',function(){
    $('h3').animate({
        opacity:0.4,
        marginLeft:"10%",
        fontSize:"45px"
    })
})
//in case of animate we can use any numeric value properties
$('h3').on('mouseout',function(){
    $('h3').animate({
        opacity:1.0,
        fontSize:"30px"
    })
})

//$('snap').slideToggle();
//other properties are toggle mode can be used in any of them
$('div.dd').hide();//intially hide the content hide(500) in miliseconds
$('h2').addClass('headbox');
$('div.dd').addClass('ddbox');

$('div.nv').css('display','inline');
$('div.nv ').on('mouseenter', function(){
    $('div.dd').slideDown(600);  
})
$('div.nv').on('mouseleave', function(){
   $('div.dd').slideUp(500);
})