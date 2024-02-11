function ver1() {
    var xhr = typeof XMLHttpRequest != 'undefined' ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open('get', 'mateiv.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) { 
            document.getElementById("content").innerHTML = xhr.responseText;
        } 
    }
    xhr.send();
}


function ver2() {
    vista.innerHTML ='<p>dooooooooos</p>';
}