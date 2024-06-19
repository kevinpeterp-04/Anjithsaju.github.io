
let Chriswin={
    pid:101,
    Anjith:0,
    Adith:0,
    Kevin:0,
    Richol:0,
    Anadhakrishnan:0
};

let Kevin={
    pid:0,
    Anjith:0,
    Adith:0,
    Chriswin:0,
    Richol:0,
    Anadhakrishnan:0
}
let Anjith={
    pid:0,
    Kevin:0,
    Adith:0,
    Chriswin:0,
    Richol:0,
    Anadhakrishnan:0
}
let Adith={
    pid:0,
    Anjith:0,
    Kevin:0,
    Chriswin:0,
    Richol:0,
    Anadhakrishnan:0
}
let Richol={
    pid:0,
    Anjith:0,
    Adith:0,
    Chriswin:0,
    Kevin:0,
    Anadhakrishnan:0
}
let Anadhakrishnan={
    pid:0,
    Anjith:0,
    Adith:0,
    Chriswin:0,
    Richol:0,
    Kevin:0
}

//const data={Chriswin,Kevin,Anjith,Anadhakrishnan,Adith,Richol};
//datapush(data,"https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/memeberdatapush")


https://ap-south-1.aws.data.mongodb-api.com/app/splitapp-pnazqyo/endpoint/membersdataupdate


function tally(person,name)
{
   // console.log(person);

const perkeys=Object.keys(person);
const l=perkeys.length;
//console.log(chriswin);
//console.log(l);
const pay=name;//person
for(i=1;i<l;i++)
    {
        let keys=perkeys[i];//guy
        let keyid=data[keys];
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
            person[keys]=p1newval;
            keyid[pay]=p2newval;



    }
}
console.log("before");
console.log("Adith",Adith);
//console.log("chris",chris);
//console.log("kev",kev);
// console.log("ric",ric);
// console.log("anj",anj);
// console.log("and",and);
tally(Adith,"Adith");
// tally(anj,"anj");
// tally(kev,"kev");
// tally(and,"and");
// tally(ric,"ric");
// tally(chris,"chris");
console.log("after");
console.log("adi",Adith);
// console.log("chris",chris);
// console.log("kev",kev);
// console.log("ric",ric);
// console.log("anj",anj);
// console.log("and",and);
