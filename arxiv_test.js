document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("btn").addEventListener("click", function () {

        //window.alert("nice click!");

        var request = new XMLHttpRequest();

        request.open('GET', 'https://export.arxiv.org/api/query?search_query=au:"herbelin"&start=0&max_results=1', true);

        request.onreadystatechange = function () {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.responseText);

                /*
                var main = document.getElementById("main");

                var docelem = request.responseXML.documentElement;
                var nodes = docelem.getElementsByTagName("title");
                for (var i = 0; i < nodes.length; i++) {
                    main.innerHTML += nodes[i].tagName + " : " + nodes[i].textContent + "<br/>";
                }
                */

                var list = document.getElementById("list");

                while (list.lastChild) {
                    list.removeChild(list.lastChild);
                }

                var docelem = request.responseXML.documentElement;
                var entries = docelem.getElementsByTagName("entry");


                for (var i = 0; i < entries.length; i++) {
                    var entry = entries.item(i);

                    var id = entry.getElementsByTagName("id");
                    console.log(id.item(0));

                    var anchor = document.createElement("a");
                    anchor.href = entry.getElementsByTagName("id").item(0).textContent;
                    var title = entry.getElementsByTagName("title")[0];
                    anchor.appendChild(document.createTextNode(title.textContent));

                    list.appendChild(anchor);

                    var br = document.createElement("br");
                    list.appendChild(br);

                }
            }
        }

        request.send();

    }, false);

}, false);