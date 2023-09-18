var url = 'https://my-json-server.typicode.com/typicode/demo/posts';    

var data = {};
data.title = "POST 4";
var json = JSON.stringify(data);

var xhr = new XMLHttpRequest();
xhr.open("PUT", url, true);
xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
xhr.onload = function () {
    var users = JSON.parse(xhr.responseText);
    console.log(users);
    if (xhr.readyState == 4 && xhr.status == "200") {
        console.table(users);
    } else {
        console.error(users);
    }
}
xhr.send(json); 
