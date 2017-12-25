var Persons[];
var p1= {id="p1";name="name1";family="family1"};
var p1= {id="p2";name="name2";family="family2"};
var p1= {id="p3";name="name3";family="family3"};
Persons.Push(p1);Persons.Push(p2);Persons.Push(p3);

document.getElementById("demo").innerHTML = Get();

function Get(){
	return Persons;
}
function Get(int personid){
	for(i=0;i<Persons.length;i++)
	{
		if(Persons[i].id==personid) return Persons[i];
	}
	return null;
} 
function Add(p){
             if(p=null && Get(p.id)==null) Persons.push(p);
}
function Delete(p){
            for(i=0;i<Persons.length;i++)
            {
		if(personid!=null && Persons[i].id==personid)  Persons.Splice(i,1);
            }
}