var request = new XMLHttpRequest();
request.responseType = 'document';

request.onload = function(e){
    var data = this.response;
    window.alert(data);
};

request.open('GET', 'https://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1', true);
request.send();
