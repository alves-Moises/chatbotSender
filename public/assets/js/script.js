function sendCustomADS(){
    let msg = document.getElementById("msg").value
    window.location.href = `${window.location.href}/custom-message/${msg}`;
}

customMessageBtn = document.getElementById("custom_msg_send")
customMessageBtn.addEventListener("click", sendCustomADS)