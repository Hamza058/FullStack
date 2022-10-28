const root=document.getElementById("root");

class ES6Person{
    constructor(name="Misafir", year=new Date().getFullYear(),month,day){
        this.name=name;
        this.year=year;
        this.day=day;
        this.month=month;
        console.log(this.name,this.year);
    }
    yasHesapla(){
        var hesap=new Date().getFullYear()-this.year;
        return hesap==0||hesap<0 ? `Yaşınız: ${hesap} dünyaya goşgeldiniz` :`Yaşınız: ${hesap}`;
    }
    dogumGunu(){
        var month=new Date().getMonth()-this.month+1;
        var day= new Date().getDate()-this.day;
        return month<=0? `Doğum gününüz ${-1*month} ay ${-1*day} gün sonra`:`Doğum gününüz Geçmiş`;
    }
}

class Student extends ES6Person{
    constructor(name,year,studentNumber){
        super(name,year);
        this.studentNumber=studentNumber;
    }
    greeting(text){
        return `${text} Benim adım ${this.name} yaşım ${this.yasHesapla(this.year)}`
    }
}

const es6p=new ES6Person("Hamza",1234,12,30);
console.log(es6p,es6p.dogumGunu())
const std=new Student("Ali",1993,21);
console.log(std.greeting("Sa"))


class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.clearItems = this.clearItems.bind(this); /* state aracılığıla */
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.state = {
            items: ["item1", "item2", "item3"] /* props aracılığıla */
        };
    }

    clearItems() {
        this.setState({
            items: []
        });
    }

    addItem(item) {
        if (!item) {
            return "boş değer ekleyemezsiniz";
        } else if (this.state.items.includes(item)) {
            return "aynı elemanı ekleyemezsiniz";
        }

        this.setState((prevState) => {
            return { items: prevState.items.concat(item) }
        })
    }

    deleteItem(item) {
        this.setState((prevState) => {
            const arr = prevState.items.filter((i) => {
                return item != i;
            })
            return {
                items: arr
            };
        })
    }

    render() {
        var app = {
            title: "Todo Application BackEnd",
            description: "Lorem, ipsum 2."
        };
        return (
            <>
                <Header title={app.title} description={app.description} />
                <TodoList deleteItem={this.deleteItem} items={this.state.items} clearItems={this.clearItems} />
                <Action addItem={this.addItem} />
            </>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

class TodoList extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.items.map((item, index) =>
                            <TodoItem deleteItem={this.props.deleteItem} key={index} item={item} />
                        )
                    }
                </ul>
                <p>
                    <button onClick={this.props.clearItems}>Clear Items</button>
                </p>
            </div>
        );
    }
}

class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
    }

    deleteItem() {
        console.log("delete")
        this.props.deleteItem(this.props.item)
    }

    render() {
        return (
            <li>
                {this.props.item}
                <button onClick={this.deleteItem}>X</button>
            </li>
        );
    }
}

class Action extends React.Component {
    constructor(props) {
        super(props);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.state = {
            err: ''
        }
    }
    onFormSubmit(e) {
        e.preventDefault();
        const item = e.target.elements.txtItem.value.trim();

        const errr = this.props.addItem(item);
        this.setState({
            err: errr
        })

        e.target.elements.txtItem.value = "";
    }
    render() {
        return (
            <div>
                {this.state.err && <p style={{ color: "red" }}>{this.state.err}</p>}
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="txtItem" id="txtItem" />
                    <button type="submit">Add Item</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<TodoApp />, root);