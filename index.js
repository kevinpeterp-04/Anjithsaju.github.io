
console.log("hello");
const bt1=document.getElementById("s1");
const bt2=document.getElementById("v1");
let database=null;
const back=document.getElementById("back");
const page1=document.getElementById("page1");
const page2=document.getElementById("page2");
const page3=document.querySelector(".page3");
const wrapper= document.querySelectorAll('.p2');
const pg2=document.querySelector('.pg2');
const split=document.getElementById("split");
page2.style.display="none";
page3.style.display="none";
back.style.display="none";
let bk=1;
bt1.addEventListener("click",trans2);
bt2.addEventListener("click",change);
function change()
{
    location.replace('https://anjithsaju.github.io/Expenses/');
}
back.addEventListener("click",backfn);
let jk=0;
let expensedetails=null;
let individualdetails=null;
const mother=document.getElementById("mother");
const twin=document.querySelectorAll(".twin");
const tbtn=document.getElementById("btwin");
console.log(twin);
tbtn.addEventListener("click",twinftn);
let mani=1;
function twinftn()
{
    
    if(mani==1)
        {
            twin.forEach(element => {
                element.style.display="flex";
            
            });
            page3.classList.add('active');
    mother.style.display="none";
    mani=0;
        }
        else
        {
            mani=1;
            twin.forEach(element => {
                element.style.display="none";
            
            });
            page3.classList.remove('active');
            mother.style.display="";
        }
}

// split.addEventListener("click",()=>
//     {
//         trans1();
//     spliting()});
// console.log(wrapper);


//transitions******************************************************************************************************
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

//***************************************************************************************************************8 */
//mongodb connection



        //fetching current data from database
        async function datafetch(url1){
            try {
                const response = await fetch(url1, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                });
            
                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
                }
                const datathis=await response.json();
                //console.log(datathis);
                          datapush(datathis,"https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/test");
                const dataprev =datathis["DataOF"];
                database=dataprev["Tally"];
                expensedetails=dataprev["Expenses"];
                individualdetails=dataprev["IDetails"];
                console.log(dataprev);
                console.log(database);
            }
            catch (error) {
                alert("Cant connect to Database please Reload :)");
            }
        }


       //pushing data to database
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


        //updating data in database
        async function updateMemberData(newdata,urlu)
        {
            const url = urlu;
            const payload = {
            filter: {
                _id: { $oid: "6673200056ee987ef2a3fc82" }
            },
            update: {
                $set: {
                DataOF:newdata
                }
            }
            };
        
            try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            });
        
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            
            } catch (error) {
                alert("database not connected please refresh");
            console.error('Error:', error);
            }
        };


//******************************************************************************************************** */



datafetch("https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdatapull");



//page2 functions*****************
        let selectedbutton=null;
        let eventname=null//buttonname
        const page2buttons = document.getElementById('page2');
                page2buttons.addEventListener('click', function(event) {
                    selectedbutton = event.target.id;
                     eventname=event.target.innerText;
                    console.log(eventname);
                    const bid=document.getElementById(selectedbutton);
                    trans3();
                    bid.style.background="lightblue";

                });
        
//***************************************************


//page 3 functions

                const namedrop= document.getElementById('nameSelect');//selectdrop down normal
                let selectedname=null;
                namedrop.addEventListener('change', function(event) {selectedname = event.target.value;});
                const twin1= document.getElementById('nameSelecttwin1');//selectdrop down twin 1
                let twin1name=null;
                twin1.addEventListener('change', function(event) {twin1name = event.target.value;});
                const twin2= document.getElementById('nameSelecttwin2');//selectdrop down twin 2
                let twin2name=null;
                twin2.addEventListener('change', function(event) {twin2name = event.target.value;});
                //checkbox 
                let members=[];
                
                document.querySelectorAll('#Members input[type="checkbox"]').forEach(checkbox => {
                    checkbox.addEventListener('change', function(event) {
                        const isChecked = event.target.checked;
                        const memberName = event.target.nextElementSibling.innerText;
                        isChecked ? members.push(memberName): members = members.filter(item => item !== memberName);
                        console.log(members);
                    });});


            //fucntion for splitting bills --step1
            function spliting()
            {
                try{
                  
                    const url="https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/transactionpush";
                const expense=(document.getElementById("expense")).value;//expense
                const date=(document.getElementById("date")).value;//date
                console.log(expense);
                console.log(selectedname);
                console.log(date);
                console.log(members);
                
                if(mani==0)//case when there is 2 payers
                    {
                        console.log("worked");
                        const twin1amount=document.getElementById("twin1").value;
                        const twin2amount=document.getElementById("twin2").value; 
                        console.log(twin1amount);

                        if (twin1amount==null ||twin2amount==null ||twin1name==null ||twin2name==null ||members.length==0  ||date==null ) 
                            {
                            alert("Enter all details");
                            }
                        else{
                            console.log("worked");
                        data={
                            "Expense":expense,
                            "Date":date,
                            "Members":members,
                            "Event":eventname,
                            "person1":twin1name,
                            "person1amt":twin1amount,
                            "person2":twin2name,
                            "person2amt":twin2amount
                        }
                        
                        divide(twin1amount,members,twin1name);
                        divide(twin2amount,members,twin2name);
                        datapush(data,url);
                        console.log(database);
                        expenseadd(expense,eventname);
                        const newdata=
                {
                    Tally:database,
            Expenses:expensedetails,
            IDetails:individualdetails
                }
                        updateMemberData(newdata,'https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate');
                
                        alert("Data  saved successfully");
                            
                        jk=1;
                        trans1();
                        mani=0;
                        twinftn();
                }
            }
                else//case when there is 1 payer
                {
                    if(selectedname==null ||members.length==0 ||date==null) 
                        alert("Enter all details"); 
                    else{

                    
                data={
                    "Expense":expense,
                    "Date":date,
                    "Members":members,
                    "Paidby":selectedname,
                    "Event":eventname
                };
                console.log(data);
                
                divide(expense,members,selectedname);
                datapush(data,url);
                console.log(database);
                expenseadd(expense,eventname);
                const newdata=
                {
                    Tally:database,
            Expenses:expensedetails,
            IDetails:individualdetails
                }
                updateMemberData(newdata,'https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate');
                alert("Data  saved successfully");
                jk=1;
                members=[];
                trans1();
            }
        }
        }
            catch (error) {
                alert('Error occured while saving');
            }
            }

            //fucntion for adding money to memeber list  --step 2
            function divide(amount,people,payee)
            {
                let splitamt=amount/people.length;
                let rounded = parseFloat(splitamt.toFixed(2));
                console.log(rounded);
                //console.log(database);
                const dkeys= Object.keys(database);
                //console.log(dkeys);
                people.forEach(name=>{
                    individualdetails[name]=parseFloat((individualdetails[name]+rounded).toFixed(2));
                })
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


            //tally  function --step 3

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
                    //console.log(p1val);
                    //console.log(p2val);
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

//******************************************************************************************
document.getElementById('myForm').addEventListener("submit", function(event) {
    console.log(event);
    if(event.getElementById!==tbtn)
    event.preventDefault();
    console.log("hello thin swork") ;
   
   spliting();
    // console.log(wrapper)// Prevent the default form submission
    // Your form submission code here (e.g., AJAX request)
    // After processing the form, clear the inputs
    if(jk==1)
    this.reset();
});

//expense adder
function expenseadd(exp,event)
{
    console.log(exp);
let ithu=parseFloat(expensedetails[event]);
console.log(ithu);
ithu=ithu+parseFloat(exp);
expensedetails[event]=ithu;
console.log(ithu);
let ithutot=parseFloat(expensedetails["Total"]);
ithutot=ithutot+parseFloat(exp);
expensedetails["Total"]=ithutot;
console.log(ithutot);
}

