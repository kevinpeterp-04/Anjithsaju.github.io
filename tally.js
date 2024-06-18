let chris={
    pid:101,
    anj:800,
    adi:100,
    kev:70,
    ric:300,
    and:55
};

let kev={
    pid:102,
    anj:90,
    adi:500,
    chris:80,
    ric:30,
    and:90
}
let anj={
    pid:103,
    kev:20,
    adi:900,
    chris:9,
    ric:500,
    and:22
}
let adi={
    pid:104,
    anj:988,
    kev:300,
    chris:700,
    ric:80,
    and:22
}
let ric={
    pid:105,
    anj:80,
    adi:30,
    chris:800,
    kev:330,
    and:234
}
let and={
    pid:106,
    anj:987,
    adi:90,
    chris:348,
    ric:233,
    kev:2000
}

const data={chris,kev,anj,and,adi,ric};
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
console.log("adi",adi);
console.log("chris",chris);
console.log("kev",kev);
console.log("ric",ric);
console.log("anj",anj);
console.log("and",and);
tally(adi,"adi");
tally(anj,"anj");
tally(kev,"kev");
tally(and,"and");
tally(ric,"ric");
tally(chris,"chris");
console.log("after");
console.log("adi",adi);
console.log("chris",chris);
console.log("kev",kev);
console.log("ric",ric);
console.log("anj",anj);
console.log("and",and);
