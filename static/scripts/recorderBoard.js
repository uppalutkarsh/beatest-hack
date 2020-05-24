const buttonRecordB = document.getElementById("startB");
const buttonStopB = document.getElementById("stopB");

buttonRecordB.disabled = true;

buttonRecordB.onclick = function () {
    // var url = window.location.href + "record_status";
    buttonRecordB.disabled = true;
    buttonStopB.disabled = false;

    // XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert(xhr.responseText);
        }
    };
    xhr.open("POST", "/record_status");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({status: "true"}));
};

buttonStopB.onclick = function () {
    buttonRecordB.disabled = false;
    buttonStopB.disabled = true;

    // XMLHttpRequest
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert(xhr.responseText);
        }
    };
    xhr.open("POST", "/record_status");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({status: "false"}));
};

const boardButton = document.getElementById('boardB');
const buttonDisableBoard = document.getElementById('disableBoard');

boardButton.onclick = function(){
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // alert(xhr.responseText);
        }
    };
    xhr.open("GET", "/clear");
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify({status: "true"}));
};

buttonDisableBoard.onclick = function () {
    if (boardButton.disabled) {
        boardButton.disabled = false;
        buttonDisableBoard.classList.remove('btn-success');
        buttonDisableBoard.classList.add('btn-danger');
        buttonDisableBoard.innerText = "Disable Feature";

    } else {
        boardButton.disabled = true;
        buttonDisableBoard.classList.remove('btn-danger');
        buttonDisableBoard.classList.add('btn-success');
        buttonDisableBoard.innerText = "Enable Feature";
    }

};