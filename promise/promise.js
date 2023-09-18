const urlBacon = "https://jsonplaceholder.typicode.com/todos";

var fnexe = (succ, fail) => {
    $.ajax({ method: "GET", url: urlBacon, dataType: "json" })
        .done(function (data) { succ(data); })
        .fail(function () { fail(['Error']); });
}

var promise = new Promise(fnexe);

promise.then((data) => {
    console.log(data);
    var span = document.createElement('span');
    span.innerHTML = data.title;
    console.log(span);
    document.body.appendChild(span);
})

