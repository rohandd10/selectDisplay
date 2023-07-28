const showItem = () => {
    let select = document.getElementById("item").value;
    let pen = document.querySelector('img[alt="pen"]');
    let car = document.querySelector('img[alt="car"]');

    if (select == "PEN") {
        pen.style.display = "block";
        car.style.display = "none";
    } else if (select == "CAR") {
        pen.style.display = "none";
        car.style.display = "block";
    }
}