const colorCard = document.querySelector(".color");
const colorValue = document.querySelector("h4");
const generateBtn = document.querySelector("button");

let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let colorArray = [];
let objects = {};

function refreshPage(){
    window.location.reload();
}

window.onload = function () {
    let clr = "";
    for(let i=0; i<12; i++) {
        for(let j=0; j<6; j++) {
            clr = clr + arr[randm()];
        }
    }
    colorArray.push(clr);
    let text = colorArray.toString();

    let result = []
    for(let i=0; i<text.length; i += 6) {
        result.push(text.substring(i, i+6));
    }

    let tableData = "";
    result.map((value) => {
        tableData += `<div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="card shadow-lg border-0" style="width: 18rem;">
                            <div class="color" style=" background: #${value}"></div>
                            <div class="card-body">
                            <h4 class="card-title text-center">#${value}</h4>
                            </div>
                        </div>
                    </div>`;
    })
    document.getElementById('list').innerHTML = tableData;
       return result.pop();
}

function randm() {
    return Math.floor(Math.random()*arr.length);
}

generateBtn.addEventListener("click", refreshPage);
