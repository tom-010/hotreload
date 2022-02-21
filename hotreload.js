var poll_interval = 1000;

current = '';
setInterval(function() {
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
}, poll_interval);