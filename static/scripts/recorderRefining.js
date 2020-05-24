const buttonRecordR = document.getElementById("startR");
const buttonStopR = document.getElementById("stopR");

buttonRecordR.disabled = true;

buttonRecordR.onclick = function () {
    // var url = window.location.href + "record_status";
    buttonRecordR.disabled = true;
    buttonStopR.disabled = false;

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

buttonStopR.onclick = function () {
    buttonRecordR.disabled = false;
    buttonStopR.disabled = true;

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

// const boardButton = document.getElementById('boardB');
const buttonDisableR = document.getElementById('disableR');

// boardButton.onclick = function(){
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//             // alert(xhr.responseText);
//         }
//     };
//     xhr.open("GET", "/clear");
//     xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
//     xhr.send(JSON.stringify({status: "true"}));
// };

buttonDisableR.onclick = function () {
    if (buttonDisableR.classList.contains('btn-success')) {
        buttonDisableR.classList.remove('btn-success');
        buttonDisableR.classList.add('btn-danger');
        buttonDisableR.innerText = "Disable Feature";
    } else {
        buttonDisableR.classList.remove('btn-danger');
        buttonDisableR.classList.add('btn-success');
        buttonDisableR.innerText = "Enable Feature";
    }

};