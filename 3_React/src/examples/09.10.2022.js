const root = document.getElementById("root");

var admin = {
    name: "Techcareer",
    pass: "123",
    items: [
        "Lorem.",
        "Lorem, ipsum.",
        "Lorem, ipsum dolor."
    ]
};

function onFormSubmit(event) {
    event.preventDefault();
    /* document.getElementById("txtItem").value; 
       console.log(event);
     */
    var itemName = event.target.elements.txtName.value;
    var itemPass = event.target.elements.txtPass.value;
    if (itemName != '') {
        if(admin.name==itemName && admin.pass==itemPass){
            event.target.elements.txtName.value = "";
            show()
        }
        else{
            alert("Girdiginiz bilgiler yanlış");
        }
    } 
    else {
        alert("Lütfen tüm bilgileri doldurunuz");
    }
}

function show(){
    var info=(
        <div>
            <ul>
                {
                    admin.items.map((item, index) =>
                            <li key={index}>{item}</li>
                        )
                }
            </ul>
        </div>
    )
}

function render() {
    var template =
        (
            <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name="txtItem1" id="txtName" />
                    <br />
                    <input type="text" name="txtItem2" id="txtPass" />
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        );
        ReactDOM.render(template, root);
}

render();

let buyuk=(arr)=>{
    var max=0
    for(var i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    console.log("Dizinin en büyük elemanı: ",max)
}
buyuk([3,2,4,6,1])

var Asal = function (x) {
    var sayac=0
    for (var i=1;i<x;i++){
        if(x%i==0){
            sayac++;
        }
    }
    sayac>=2?console.log("Sayı asal değil"):console.log("Sayı asal");
}
Asal(1021)

class Try{
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    getAgeOfYear() {
        return this.greeting(this.year);
    }

    greeting(text) {
        return `${text}, Benim adım ${this.name}`;
    }
}

// nesne - object
var classtry = new Try();
classtry.name="asd";
classtry.year=new Date().getFullYear()
console.log(classtry.name,classtry.year)

var classtry2=new Try("qwe",new Date().getFullYear())
console.log(classtry2.getAgeOfYear())