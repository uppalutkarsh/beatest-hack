const buttonRecordA = document.getElementById("startA");
const buttonStopA = document.getElementById("stopA");

buttonRecordA.disabled = true;

buttonRecordA.onclick = function () {
    // var url = window.location.href + "record_status";
    buttonRecordA.disabled = true;
    buttonStopA.disabled = false;

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

buttonStopA.onclick = function () {
    buttonRecordA.disabled = false;
    buttonStopA.disabled = true;

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

const applauseButton = document.getElementById('applauseA');
let applause = new Audio("/static/applause.mp3");

applauseButton.onclick = function () {
    applause.play();
};

const disableApplauseButton = document.getElementById('disableApplause');

disableApplauseButton.onclick = function () {
    if (applauseButton.disabled) {
        applauseButton.disabled = false;
        disableApplauseButton.classList.remove('btn-success');
        disableApplauseButton.classList.add('btn-danger');
        disableApplauseButton.innerText = "Disable Feature";

    } else {
        applauseButton.disabled = true;
        disableApplauseButton.classList.remove('btn-danger');
        disableApplauseButton.classList.add('btn-success');
        disableApplauseButton.innerText = "Enable Feature";
    }
};