console.log("hello");
const bt1=document.getElementById("s1");
const bt2=document.getElementById("v1");

const back=document.getElementById("back");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.getElementById("page3");
const wrapper= document.querySelectorAll('.p2');
const pg2=document.querySelector('.pg2');
const split=document.getElementById("split");
page2.style.display="none";
page3.style.display="none";
back.style.display="none";
let bk=1;
bt1.addEventListener("click",trans2);
bt2.addEventListener("click",trans2);
back.addEventListener("click",backfn);

split.addEventListener("click",()=>
    {
        trans1();
    spliting()});
console.log(wrapper);

function trans2()
{
    wrapper.forEach(element => {
        element.style.background="";
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
    //bfood1.style.background="white";
    wrapper.forEach(element => {
        element.style.background="white";
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
//fetching current data from database
async function datafetch(url){
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
       
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
        }

        database = await response.json();
        
        console.log(database);
    }
    catch (error) {
        console.error('Error registering user:', error);
    }
}



async function datapush(userData,url) {
    
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
        }

        const result = await response.json();
        
        
    } catch (error) {
        console.error('Error registering user:', error);
    }
}
datafetch("https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdatapull");
//page2
let selectedbutton=null;//buttonname
const page2buttons = document.getElementById('page2');
        page2buttons.addEventListener('click', function(event) {
            selectedbutton = event.target.id;
            const bid=document.getElementById(selectedbutton);
            trans3()
            bid.style.background="lightblue";

        });
   

//page 3

    const namedrop= document.getElementById('nameSelect');//selectdrop down
    let selectedname=null;
    namedrop.addEventListener('change', function(event) {selectedname = event.target.value;});
    //checkbox 
    let members=[];
    document.querySelectorAll('#Members input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function(event) {
            const isChecked = event.target.checked;
            const memberName = event.target.nextElementSibling.innerText;
            isChecked ? members.push(memberName): myArray = members.filter(item => item !== memberName);
        });});
function spliting()
{
    try{

    
    const expense=(document.getElementById("expense")).value;//expense
    const date=(document.getElementById("date")).value;//date
    
    console.log(expense);
    console.log(selectedname);
    console.log(date);
    console.log(members);
    data={
        "expense":expense,
        "date":date,
        "members":members,
        "paidby":selectedname
    };
    console.log(data);
    const url="https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/transactionpush"
    //datapush(data,url);
    console.log(database);
    divide(expense,members,selectedname);
    alert("Data  saved successfully");
}
catch (error) {
    alert('Error occured while talying');
}
}
let database=null;

function divide(amount,people,payee)
{
    let splitamt=amount/people.length;
    let rounded = parseFloat(splitamt.toFixed(2));
    console.log(rounded);
    //console.log(database);
    const dkeys= Object.keys(database);
    //console.log(dkeys);
    people.forEach(name=>{
        if(name!=payee)
            {
                console.log("hi");
            const pdata=database[name];
            pdata[payee]=pdata[payee]+rounded;
           }
    })
    console.log(database);
    const findob=database[payee];
     tally(findob,payee);
}


//tally
//const Chriswin=database[]
//const data={Chriswin,Kevin,Anjith,Anadhakrishnan,Adith,Richol};
function tally(person,name)
{
   //console.log(person);
console.log(name);
const perkeys=Object.keys(person);
const l=perkeys.length;
//console.log(chriswin);
//console.log(l);
const pay=name;//person
for(i=1;i<l;i++)
    {
        let keys=perkeys[i];//guy
        
        let keyid=database[keys];
        let keyowe=keyid[pay];
        //console.log(keys);
        //console.log(keyid);
        //console.log(keyowe);
        let p1val=person[keys];// person owes the guy
        let p2val=keyowe;//guy owes the person
        console.log(p1val);
        console.log(p2val);
        let diff=p1val-p2val;
         if(diff<0)
            {
                p1newval=diff*-1;
                p2newval=0;
            }
            else if(diff==0)
                {
                    p1newval=0;
                p2newval=0;
                }
            else{
                p1newval=0;
                p2newval=diff;
            }
            person[keys]=parseFloat(p2newval.toFixed(2));
            keyid[pay]=parseFloat(p1newval.toFixed(2));



    }
}
