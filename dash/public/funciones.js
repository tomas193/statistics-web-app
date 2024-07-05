
$(document).ready(function(){
    $('#resultado').text(value);
    $("#target_form").hide();
    $("#value_form").hide();
    $("#title_form").hide();
    $("#instructions").hide();
    $("#rd1").hide();
    $("#rd2").hide();
  
    $('#value').click(function(){
      $("#value_form").show();
      $("#instructions").show();
      $("#target_form").hide();
      $("#title_form").hide();
    })
  
    $('#target').click(function(){
      $("#target_form").show();
      $("#instructions").show();
      $("#value_form").hide();
      $("#title_form").hide();
    })

    $('#title').click(function(){
      $("#target_form").hide();
      $("#instructions").hide();
      $("#value_form").hide();
      $("#title_form").show();
    })

    $('#value_form').submit(function(e){
      e.preventDefault();
      
      const valores = [];
      for (let index = 1; index <= 13; index++) {
        const campoTexto = document.getElementById('val' + index);
        const valor = campoTexto.value;
        valores.push(valor);}
      const valoresSeparadosPorComas = valores.join(',');
      
      $.post('/actualizar', {nombre_tabla:'PDCA',col:'value',nuevoValor: valoresSeparadosPorComas, id_val:valor}, function() {
        location.reload();
      });
    });

    $('#target_form').submit(function(e){
      e.preventDefault();
      const objetivos=[];
      for(let index=1;index<=13;index++){
        const objetivo=document.getElementById('tar'+index).value;
        objetivos.push(objetivo);
      }
      const sepvalues=objetivos.join(',');
      $.post('/actualizar', {nombre_tabla:'PDCA',col:'target',nuevoValor: sepvalues, id_val:valor}, function() {
        location.reload();
      });
    });

  $('#title_form').submit(function(e){
      e.preventDefault();
      $.post('/actualizar', {nombre_tabla:'PDCA',col:'nombre',nuevoValor: $('#tit').val(), id_val:valor}, function() {
      location.reload();
      });
  });

  $('#swform').submit(function(e){
      e.preventDefault();
      let nflag;
      if (bandera==1){
          nflag=0;
      }else{nflag=1;}
      $.post('/actualizar', {nombre_tabla:'PDCA',col:'flag',nuevoValor: nflag, id_val:valor}, function() {
      location.reload();
      });
  });
  



  });


