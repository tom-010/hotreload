if (!window.poll_interval) {
    window.poll_interval = 500;
}

current = '';
setInterval(function() {
    console.log('poll')
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                const new_version = xmlhttp.responseText;
                if (new_version != current) {
                    current = new_version;
                    document.getElementsByTagName("html")[0].innerHTML = current;
                }
            }
        }
    };
    xmlhttp.open("GET", window.location.href, true);
    xmlhttp.send();
}, window.poll_interval);