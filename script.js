var exp="";

var display=document.getElementById("display") ;
display.innerHTML=exp;

function buttonPress(e){
    if(e.target.innerText=="=")
    {
        exp=Math.floor(eval(exp)*100)/100 ;

        if(exp=="Infinity"||k=="NaN")
        {
            exp="Error" ;
        }
    }

    else if(e.target.innerText=="AC")
    {
        exp="" ;
    }

    else if(e.target.innerText=="+/-")
    {
        var k=eval(exp) ;

        if(k=="Infinity"||k=="NaN")
        {
            k="Error" ;
        }

        else{
            k=k*(-1) ;
        }

        exp=k.toString();
    }

    else
    {
        exp=exp+e.target.innerText ;
    }

    if(exp=="Infinity"||exp=="NaN")
    {
        exp="Error";
    }

    display.innerText=exp;
}

function colorHandlerAdderWhiteMouseOver(e){
    e.target.classList.add("darken-white") ;
}

function colorHandlerAdderWhiteMouseOut(e){
    e.target.classList.remove("darken-white") ;
}

function colorHandlerAdderRedMouseOver(e){
    e.target.classList.add("darken-red") ;
}

function colorHandlerAdderRedMouseOut(e){
    e.target.classList.remove("darken-red") ;
}

var white_buttons=document.getElementsByClassName("white-background") ;
var red_buttons=document.getElementsByClassName("red-background") ;

var ac=document.getElementById("ac") ;

for(var i=0;i<white_buttons.length;i++)
{
    white_buttons[i].addEventListener('mouseover',colorHandlerAdderWhiteMouseOver) ;
    white_buttons[i].addEventListener('mouseout',colorHandlerAdderWhiteMouseOut) ;
    white_buttons[i].addEventListener('click',buttonPress) ;
}

for(var i=0;i<red_buttons.length;i++)
{
    red_buttons[i].addEventListener('mouseover',colorHandlerAdderRedMouseOver) ;
    red_buttons[i].addEventListener('mouseout',colorHandlerAdderRedMouseOut) ;
    red_buttons[i].addEventListener('click',buttonPress) ;
}