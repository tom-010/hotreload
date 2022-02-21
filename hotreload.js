if (!window.poll_interval) {
    window.poll_interval = 2000;
}

observe(window.location.href, function(new_version) {
    document.getElementsByTagName("html")[0].innerHTML = new_version;
})

for (url of reloadableCssFiles()) {
    observe(url, (content) => {
        const link = findStylesheetByUrl(url)
        if (!link) return
        link.href = link.href.replace(/\?.*|$/, "?" + Date.now())
    });
}

////////////////////////////


function reloadableCssFiles() {
    const stylesheetsRefs = document.getElementsByTagName('link');
    var res = []
    for (var i = 0; i < stylesheetsRefs.length; i++) {
        const ref = stylesheetsRefs[i];
        if (ref.getAttribute('reload')) {
            res.push(ref.getAttribute('href'))
        }
    }
    return res;
}

function findStylesheetByUrl(url) {
    const elements = document.getElementsByTagName('link');
    for (var i = 0; i < elements.length; i++) {
        const ref = elements[i];
        if (ref.href.includes(url)) {
            return ref
        }
    }
}


var cache = {}

function observe(url, cb) {
    setInterval(function() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == XMLHttpRequest.DONE) {
                if (xmlhttp.status == 200) {
                    const content = xmlhttp.responseText
                    if (cache[url] == content) {
                        return
                    }
                    cache[url] = content
                    cb(content)
                }
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();
    }, window.poll_interval);
}