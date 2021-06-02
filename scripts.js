$(document).ready(()=>{
    $.ajax({
        type: 'GET',
        url: 'https://ocistok.com/pages/json-pssroduk',
        // data: {
        //    format: 'html'
        // },
        error: function() {
           alert('<p>An error has occurred</p>');
        },
        // dataType: 'jsonp',
        success: function(data) {
            // console.log(data);
            // console.log(typeof(data))
            let response = data.replace('<div id="shopify-section-json-produk-template" class="shopify-section">','');
            response = response.replace('</div>','');
            response = response.trim();
            response = response.slice(0,-12);
            response = response + "]}";
            response = JSON.parse(response);

            let items = response.data;
            items.forEach(e => {
                let collection = e.collection.replace('-',' ');
                let item = `
                <div class="card">
                    <img class="card-img-top" src="${e.gambar}" alt="Card image cap">
                    <div class="card-body">
                        <p class="card-text">${collection}</p>
                    </div>
                    <a href="#" class="btn btn-primary">Add cart</a>
                </div>
                `;
                console.log(e);
                $('.main').append(item);
            });
            // console.log(items);
            //    var $title = $('<h1>').text(data.talks[0].talk_title);
        //    var $description = $('<p>').text(data.talks[0].talk_description);
        //    $('#info')
        //       .append($title)
        //       .append($description);
        },
     });
});