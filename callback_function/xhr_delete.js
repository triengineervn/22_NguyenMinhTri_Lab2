var url = 'https://my-json-server.typicode.com/typicode/demo/posts';
      
var xhr = new XMLHttpRequest();
xhr.open("DELETE", url + '/12', true);
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(null);
