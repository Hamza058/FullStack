const root = document.getElementById("root");

var images = {
    img1: "/img/blue1.jpg",
    img2: "/img/blue2.jpg"
}

var template =
    (
        <div class="container border">
            <div class="row">
                <div class="col-lg-8 p-2">
                    <div>
                        <div id="carouselExampleIndicators" class="carousel slide p-3" data-bs-ride="true">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img id="im1" src={images.img1}></img>
                                </div>
                                <div class="carousel-item">
                                    <img id="im2" src={images.img2}></img>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon dark" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 border">
                    <div class="d-flex flex-column-reverse">
                        <div class="p-2">
                            <div class="row">
                                <div class="col">
                                    <button onClick={changeWhite}>Beyaz</button>
                                </div>
                                <div class="col">
                                    <button onClick={changeBlue}>Mavi</button>
                                </div>
                                <div class="col">
                                    <button onClick={changeBlack}>Siyah</button>
                                </div>
                                <div class="col">
                                    <button onClick={changeOrange}>Turuncu</button>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div class="p-2"><h4>Samsung Galaxy A53 5G, 128 GB</h4></div>
                    </div>
                </div>
            </div>
        </div>
    );
function changeWhite() {
    document.getElementById("im1").src = "/img/white1.jpg";
    document.getElementById("im2").src = "/img/white2.jpg";
}
function changeBlue() {
    document.getElementById("im1").src = "/img/blue1.jpg";
    document.getElementById("im2").src = "/img/blue2.jpg";
}
function changeBlack() {
    document.getElementById("im1").src = "/img/black1.jpg";
    document.getElementById("im2").src = "/img/black2.jpg";
}
function changeOrange() {
    document.getElementById("im1").src = "/img/orange1.jpg";
    document.getElementById("im2").src = "/img/orange2.jpg";
}
ReactDOM.render(template, root);