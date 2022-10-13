var root = document.getElementById("root");

/* JSX - Javascript XML = JS içindeki etiketleri birer obje gibi yazmamızı sağlıyor */
var productName = "Samsung S10";
var productPrice = 4000;
var productDescription = "bu bir telefon";

var product = {
    name: "Samsung",
    price: 4000,
    description: "bu bir telefon",
    type: ["red", "blue"]
}

function formatPrice2(p) {
    if (p.price > 3000 && p.name.length > 3) {
        return p.name + " " + p.price + " TL";
    }
    else {
        return "Şartlara uymuyor";
    }

}
console.log(formatPrice2(product));

function getDescription(description) {
    return description ? description : "no-description"
}

console.log(getDescription(productDescription));

var sonuc = 0;

function getTopla(x, y) { sonuc = x + y; renderApp(); }
function getCikar(x, y) { sonuc = x - y; renderApp(); }
function getCarp(x, y) { sonuc = x * y; renderApp(); }
function getBol(x, y) { sonuc = x / y; renderApp(); }

function setTopla() { getTopla(3, 2); }
function setCikar() { getCikar(3, 2); }
function setCarp() { getCarp(3, 2); }
function setBol() { getBol(4, 2); }

function renderApp() {
    var template =
        <div id="productDetail">
            <h1>Sonuc: {sonuc}</h1>
            <button id="btnArttir" onClick={setTopla}>+</button>
            <button id="btnAzalt" onClick={setCikar}>-</button>
            <button id="btnAzalt" onClick={setCarp}>*</button>
            <button id="btnAzalt" onClick={setBol}>/</button>
        </div>;
    /* React DOM - 18. Slayt */
    ReactDOM.render(template, root);
    
}

renderApp();