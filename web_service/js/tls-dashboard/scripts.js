$(function () {
  $('#created_date').html(run_date);
  
  var sorted_certificates = Object.keys(cert_info)
    .sort(function( a, b ) {
      return cert_info[a].info.days_left - cert_info[b].info.days_left;
    }).map(function(sortedKey) {
      return cert_info[sortedKey];
  });
  
  var card_html = String()
    +'<div class="col-xs-12 col-md-6 col-xl-4">'
    +'  <div class="card text-xs-center" style="border-color:#333;">'
    +'    <div class="card-header" style="overflow:hidden;">'
    +'      <h4 class="text-muted" style="margin-bottom:0;">{{server}}</h4>'
    +'    </div>'
    +'    <div class="card-block {{background}}">'
    +'      <h1 class="card-text display-4" style="margin-top:0;margin-bottom:-1rem;">{{days_left}}</h1>'
    +'      <p class="card-text" style="margin-bottom:.75rem;"><small>days left</small></p>'
    +'    </div>'
    +'    <div class="card-footer">'
    +'      <h6 class="text-muted" style="margin-bottom:.5rem;">Issued by: {{issuer}}</h6>'
    +'      <h6 class="text-muted" style=""><small>{{issuer_cn}}</small></h6>'
    +'      <h6 class="text-muted" style="margin-bottom:0;"><small>{{common_name}}</small></h6>'
    +'    </div>'
    +'  </div>'
    +'</div>';
  
  function insert_card(json) {
    var card_template = Handlebars.compile(card_html),
      html = card_template(json);
    $('#panel').append(html);
  };

  sorted_certificates.forEach(function(element, index, array){
    var json = {
      'server': element.server,
      'days_left': element.info.days_left,
      'issuer': element.issuer.org,
      'common_name': element.subject.common_name,
      'issuer_cn': element.issuer.common_name
    }
    if (element.info.days_left <= 30 ){
      json.background = 'card-inverse card-danger';
    } else if (element.info.days_left  > 30 && element.info.days_left <= 60 ) {
      json.background = 'card-inverse card-warning';
    } else if (element.info.days_left  === "??") {
      json.background = 'card-inverse card-info';
    } else {
      json.background = 'card-inverse card-success';
    }
    insert_card(json);

  });
});