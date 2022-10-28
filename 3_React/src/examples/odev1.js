const root = document.getElementById("root");

var red = "red";

function changeColor() {
    red = "blue";
    color()
}
function change() {
    const sb = document.querySelector('#colors');
    const selectedValues = [].filter
        .call(sb.options, option => option.selected)
        .map(option => option.text);
    document.getElementById("asd").innerText = selectedValues;
}

function color() {
    var template =
        <div>
            <h1>Opel Astra</h1>
            <select id="colors" onClick={change}>
                <option >Beyaz</option>
                <option>Mavi</option>
                <option>Turuncu</option>
                <option>Siyah</option>
            </select>
            <div class="row">
                <div class="col-md-auto">
                    <p>Selected color: </p>
                </div>
                <div class="col">
                    <b><p id="asd">{red}</p></b>
                </div>
            </div>

            <button onClick={changeColor}>Change Color</button>
        </div>;
    ReactDOM.render(template, root);
}
color();