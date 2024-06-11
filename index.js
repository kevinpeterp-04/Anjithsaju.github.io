console.log("hello");
const bt1=document.getElementById("s1");
const bt2=document.getElementById("v1");
const bfood=document.getElementById("b1");
const back=document.getElementById("back");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const wrapper= document.querySelectorAll('.p2');
const pg2=document.querySelector('.pg2');
page2.style.display="none";
page3.style.display="none";
back.style.display="none";
let bk=1;
bt1.addEventListener("click",trans2);
bt2.addEventListener("click",trans2);
back.addEventListener("click",backfn);
bfood.addEventListener("click",trans3);
function trans2()
{
    wrapper.forEach(element => {
        
        element.classList.remove('active');
    });
    pg2.classList.remove('active');
    page3.style.display="none";
    page2.style.display="";
    page1.style.display="none";
    back.style.display="";
    bk=2;
     console.log("going to page 2");
     
}
function trans1()
{
    back.style.display="none";
    page2.style.display="none";
    page1.style.display="";
    page3.style.display="none";

    console.log("going to page 1");
}
function trans3()
{
    bk=3;
    wrapper.forEach(element => {
        
        element.classList.add('active');
    });
    pg2.classList.add('active');
    page3.style.display="";
    console.log("going to page 3");
}
function backfn()
{
    console.log(bk);
    if(bk==3)
        
        trans2();
    else if(bk==2)
        trans1();
    else
    trans1;
}
