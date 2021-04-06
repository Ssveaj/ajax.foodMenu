$.ajax({  
    headers: {'Access-Control-Allow-Origin': '*' },
    type: 'GET',  
    url: "https://api.rss2json.com/v1/api.json?rss_url=" + 'https://skolmaten.se/tullangsgymnasiet/rss/weeks/?limit=2',
    dataType: 'jsonp',
    success: function(e) {  
            
    let mat = '';   
    let borderBtm = 'style="border-bottom: solid 2px #3D3D3D"';

   

    mat += '    <div class="row">';
    mat += '      <div class="col-md-12 d-flex justify-content-center" style="background-color: #3D3D3D; color: white;"' + borderBtm + '>';
    mat +=           e.feed.title;
    mat += '      </div>';
    mat += '    </div>';

    mat += '    <div class="row">';
    mat += '      <div class="col-md-2"'  + borderBtm + '>';
    mat +=            e.items[0].title;
    mat += '      </div>';
    mat += '      <div class="col-md-10"' + borderBtm + '>';
    mat +=            e.items[0].description;
    mat += '      </div>';
    mat += '    </div>';
   
    mat += '    <div class="row">';
    mat += '      <div class="col-md-2"'  + borderBtm + '>';
    mat +=            e.items[1].title;
    mat += '      </div>';
    mat += '      <div class="col-md-10"' + borderBtm + '>';
    mat +=            e.items[1].description;
    mat += '      </div>';
    mat += '    </div>';

    mat += '    <div class="row">';
    mat += '      <div class="col-md-2"'  + borderBtm + '>';
    mat +=            e.items[2].title;
    mat += '      </div>';
    mat += '      <div class="col-md-10"' + borderBtm + '>';
    mat +=            e.items[2].description;
    mat += '      </div>';
    mat += '    </div>';

    mat += '    <div class="row">';
    mat += '      <div class="col-md-2"'  + borderBtm + '>';
    mat +=            e.items[3].title;
    mat += '      </div>';
    mat += '      <div class="col-md-10"' + borderBtm + '>';
    mat +=            e.items[3].description;
    mat += '      </div>';
    mat += '    </div>';

    mat += '    <div class="row" id="swipeRight">';
    mat += '      <div class="col-md-2" id="swipeRight"'  + borderBtm + '>';
    mat +=            e.items[4].title;
    mat += '      </div>';
    mat += '      <div class="col-md-10" id="swipeRight"' + borderBtm + '>';
    mat +=            e.items[4].description;
    mat += '      </div>';
    mat += '    </div>';


  
$('#showMatSedel').html(mat);

var swiperight = document.getElementById('swipeRight');
swiperight.addEventListener('click', function() {
  document.location.href = '/';
});
 
        
    }  
}); 
