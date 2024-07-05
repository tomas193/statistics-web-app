$(document).ready(function() {
    var pastDateOption = document.getElementById('past1');
    var currentDateOption = document.getElementById('actual1');
    var pastDateOption2 = document.getElementById('past2');
    var currentDateOption2 = document.getElementById('actual2');

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    var pastDateString = 'YTD '+ (currentYear-1);
    var currentDateString = 'YTD '+ currentYear;

    pastDateOption.textContent = pastDateString;
    currentDateOption.textContent = currentDateString;
    pastDateOption2.textContent = pastDateString;
    currentDateOption2.textContent = currentDateString;

    var an_selector=document.getElementById('analysis_selection').value;
    if (an_selector==1){
        $("#itself_title").show();
        $("#other_title").hide();
        $("#planta2").hide();
        $("#planta2_label").hide();
        $("#site_level").show();
        $("#oth_title1").hide();
        $("#oth_title2").hide();
        prueba(1);
    }else{
        prueba(2);
    }

    function prueba(control){
        const planta_site = document.getElementById('planta1').value;
        const planta2 = document.getElementById('planta2').value;
        if (control==2){
            Promise.all([fetchResults(planta_site), fetchResults2(planta2)])
            .then(([resultsData, targetsData]) => {
              // Compare the values from the two APIs
              const comparedData2 = compareData2(resultsData, targetsData);

            })
            .catch(error => {
              console.error('There was an error!', error);
            });
        }else{
            Promise.all([fetchResults(planta_site), fetchTargets(planta_site)])
            .then(([resultsData, targetsData]) => {
              // Compare the values from the two APIs
              const comparedData = compareData(resultsData, targetsData);

            })
            .catch(error => {
              console.error('There was an error!', error);
            });
        }
    }

    $("#people").hide();
    $("#people1").hide();
    $("#customer1").hide(); 
    $("#customer2").hide(); 
    $("#customer3").hide();   
    $("#cost").hide();
    $("#cost1").hide();
    $("#process1").hide();
    $("#process2").hide();
    $("#process3").hide();
    $("#flow").hide(); 
    $("#flow1").hide();  
    $("#labor").hide();
    $("#labor1").hide();
    $("#environment").hide();
    $("#environment1").hide();
    $("#hide").hide();

    $('#_customer').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").show(); 
        $("#customer2").show(); 
        $("#customer3").show();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })

    $('#_process').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").show();
        $("#process2").show();
        $("#process3").show();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })

    $('#_cost').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").show();
        $("#cost1").show();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })
    
    $('#_flow').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").show(); 
        $("#flow1").show();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })

    $('#_labor').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").show();
        $("#labor1").show();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })

    $('#_people').click(function(){
        $("#people").show();
        $("#people1").show();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").show();
    })
    
    $('#_environment').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").show();
        $("#environment1").show();
        $("#hide").show();
    })

    $('#hide').click(function(){
        $("#people").hide();
        $("#people1").hide();
        $("#customer1").hide(); 
        $("#customer2").hide(); 
        $("#customer3").hide();   
        $("#cost").hide();
        $("#cost1").hide();
        $("#process1").hide();
        $("#process2").hide();
        $("#process3").hide();
        $("#flow").hide(); 
        $("#flow1").hide();  
        $("#labor").hide();
        $("#labor1").hide();
        $("#environment").hide();
        $("#environment1").hide();
        $("#hide").hide();
    })

    const elemento=document.getElementById('planta1'); //selector planta 1
    elemento.addEventListener('change', function() {
        location.reload();
    });

    const elemento2=document.getElementById('planta2'); //selector planta 2
    elemento2.addEventListener('change', function() {
        location.reload();
    });

    const plantas=['ETO','ELM','ECO I','ECO II'];

    $('#itself').click(function(){
      $("#itself_title").show();
      $("#oth_title1").hide();
      $("#oth_title2").hide();
      $("#planta2").hide();
      $("#planta2_label").hide();
      $("#site_level").show();
      location.reload();
    })

    $('#otherbc').click(function(){
        var title1=document.getElementById('oth_title1');
        var title2=document.getElementById('oth_title2');
        var planta1=plantas[parseInt(document.getElementById('planta1').value-1,10)];
        var planta2=plantas[parseInt(document.getElementById('planta2').value-1,10)];
        title1.textContent=planta1;
        title2.textContent=planta2;

        $("#oth_title1").show();
        $("#oth_title2").show();

        $("#itself_title").hide();
        $("#planta2").show();
        $("#planta2_label").show();
        $("#site_level").hide();
        location.reload();
    })

    var planta1Select = document.getElementById('planta1').value;
    var planta2Select = document.getElementById('planta2');
    planta2Select.querySelector('option[value="' + planta1Select + '"]').disabled = true;

    document.getElementById('planta2').addEventListener('change', function() {
        var planta1=document.getElementById('planta1').value;
    });

    document.getElementById('planta1').addEventListener('change', function() {
        var selectedOption = this.value;
        var planta2Select = document.getElementById('planta2');
        
        // Habilitar todas las opciones primero
        for (var i = 0; i < planta2Select.options.length; i++) {
            planta2Select.options[i].disabled = false;
        }
        
        // Deshabilitar la opción seleccionada en el segundo select
        planta2Select.querySelector('option[value="' + selectedOption + '"]').disabled = true;
        
    });

    document.getElementById('date1').addEventListener('change', function() {
        var selectedOption = this.value;
        var planta2Select = document.getElementById('date2');
        planta2Select.value=selectedOption;
        
        for (var i = 0; i < planta2Select.options.length; i++) {
            planta2Select.options[i].disabled = true;
        }

        for (var i = selectedOption; i < planta2Select.options.length; i++) {
            planta2Select.options[i].disabled = false;
        }
        location.relaod();
    });
    document.getElementById('date2').addEventListener('change', function() {
        location.relaod();
    });
});

function mayor(entrada,objetivo){
    let aux=[];
    cont=0;
    for(let i=0;i<entrada.length;i++){
        if (entrada[i]>=objetivo[i]){
            aux.push(1);
            cont+=1;
        }
        else{
            aux.push(0);
        }
    }
    if(cont>=(aux.length)/2){
        cont=1;
    }else{
        cont=0;
    }
    return(cont); //regresa lista con 1 y 0 
}
function menor(entrada,objetivo){
    let aux=[];
    let cont=0;
    for(let i=0;i<entrada.length;i++){
        if (entrada[i]>objetivo[i]){
            aux.push(0);
        }
        else{
            aux.push(1);
            cont+=1;
        }
    }
    if(cont>=(aux.length)/2){
        cont=1;
    }else{
        cont=0;
    }
    return(cont);//regresa una lista con 1 y 0 
}

function fetchResults(planta) {
  return axios.get('/api/kpis_results')
    .then(response => {

      const listaDatos = $('#lista-datos');
      const filasFiltradas = response.data.filter(item => item.id === parseInt(planta,10));
      const primerFila = filasFiltradas[0];

      const inputs = [
        primerFila.in0, primerFila.in1, primerFila.in2, primerFila.in3, primerFila.in4, primerFila.in5, primerFila.in6, primerFila.in7, primerFila.in8, primerFila.in9, primerFila.in10,
        primerFila.in11, primerFila.in12, primerFila.in13, primerFila.in14, primerFila.in15, primerFila.in16, primerFila.in17, primerFila.in18, primerFila.in19, primerFila.in20, primerFila.in21,
        primerFila.in22, primerFila.in23, primerFila.in24, primerFila.in25, primerFila.in26
      ];

      const resultados = [];
      for (let i = 0; i < inputs.length; i++) {
        let temporal = inputs[i].split(',');
        resultados.push(temporal);
      }

      return (resultados);
    })
    .catch(error => {
      console.error('There was an error!', error);
      throw error;
    });
}

function fetchResults2(planta) {
  return axios.get('/api/kpis_results')
    .then(response => {

      const listaDatos = $('#lista-datos');
      const filasFiltradas = response.data.filter(item => item.id === parseInt(planta,10));
      const primerFila = filasFiltradas[0];

      const inputs = [
        primerFila.in0, primerFila.in1, primerFila.in2, primerFila.in3, primerFila.in4, primerFila.in5, primerFila.in6, primerFila.in7, primerFila.in8, primerFila.in9, primerFila.in10,
        primerFila.in11, primerFila.in12, primerFila.in13, primerFila.in14, primerFila.in15, primerFila.in16, primerFila.in17, primerFila.in18, primerFila.in19, primerFila.in20, primerFila.in21,
        primerFila.in22, primerFila.in23, primerFila.in24, primerFila.in25, primerFila.in26
      ];

      const resultados = [];
      for (let i = 0; i < inputs.length; i++) {
        let temporal = inputs[i].split(',');
        resultados.push(temporal);
      }

      return (resultados);
    })
    .catch(error => {
      console.error('There was an error!', error);
      throw error;
    });
}

function fetchTargets(planta) {
  return axios.get('/api/kpis_target')
    .then(response => {
      const listaDatos = $('#lista-datos');
      const filasFiltradas = response.data.filter(item => item.id === parseInt(planta,10));
      const primerFila = filasFiltradas[0];

      const inputs = [
        primerFila.in0, primerFila.in1, primerFila.in2, primerFila.in3, primerFila.in4, primerFila.in5, primerFila.in6, primerFila.in7, primerFila.in8, primerFila.in9, primerFila.in10,
        primerFila.in11, primerFila.in12, primerFila.in13, primerFila.in14, primerFila.in15, primerFila.in16, primerFila.in17, primerFila.in18, primerFila.in19, primerFila.in20, primerFila.in21,
        primerFila.in22, primerFila.in23, primerFila.in24, primerFila.in25, primerFila.in26
      ];

      const targetData = [];
      for (let i = 0; i < inputs.length; i++) {
        let temporal = inputs[i].split(',');
        targetData.push(temporal);
      }

      return (targetData);
    })
    .catch(error => {
      console.error('There was an error!', error);
      throw error;
    });
}

function compareData(resultsData, targetsData) { //en esta funcion se hace todo lo de site level (asignar colores a los triangulos y sacar porcentajes)
  var date1=parseInt(document.getElementById('date1').value,10);
  var date2=parseInt(document.getElementById('date2').value,10);
  var auxresults=[];
  var auxtargets=[];
  var val_proms=[];
  var tar_proms=[];

  for(let i=0;i<resultsData.length;i++){ //agarrar los datos entre las 2 fechas
    var auxres=[];
    var auxtar=[];
    var promval=0;
    var promtar=0; 
    for(let k=date1;k<=date2;k++){
        auxres.push(resultsData[i][k]);
        auxtar.push(targetsData[i][k]);
        promtar+=parseFloat(targetsData[i][k],10);
        promval+=parseFloat(resultsData[i][k],10);
    }
    val_proms.push(promval/((date2+1)-date1)); 
    tar_proms.push(promtar/((date2+1)-date1));
    auxresults.push(auxres);
    auxtargets.push(auxtar);
  }
  for (let i=0;i<val_proms.length;i++){ //sacar porcentajes
    if(tar_proms[i]==0){
        val_proms[i]=(val_proms[i]*100).toFixed(2);
    }else{
        val_proms[i]=((val_proms[i]-tar_proms[i])/(tar_proms[i])*100).toFixed(2);
    }
  }
  var porcentajes=[[val_proms[0],val_proms[1],val_proms[2]],
    [val_proms[3],val_proms[4],val_proms[5],val_proms[6],val_proms[7],val_proms[8],val_proms[9],val_proms[10]],
    [val_proms[11],val_proms[12]],
    [val_proms[13],val_proms[14],val_proms[15],val_proms[16],val_proms[17],val_proms[18],val_proms[19]],
    [val_proms[20],val_proms[21]],
    [val_proms[22],val_proms[23],val_proms[24]],
    [val_proms[25],val_proms[26]]];
  for (let i=0;i<porcentajes.length;i++){
    var aux=0;
    for(let k=0;k<porcentajes[i].length;k++){
        aux+=parseFloat(porcentajes[i][k],10);
    }
    porcentajes[i]=aux.toFixed(2);
  }
  
  for(let i=0;i<porcentajes.length;i++){
    document.getElementById('t_'+i).textContent=porcentajes[i]+'%';
  }


  let people=[menor(auxresults[0],auxtargets[0]),menor(auxresults[1],auxtargets[1]),menor(auxresults[2],auxtargets[2])];
  let customer=[mayor(auxresults[3],auxtargets[3]),mayor(auxresults[4],auxtargets[4]),mayor(auxresults[5],auxtargets[5]),menor(auxresults[6],auxtargets[6]),menor(auxresults[7],auxtargets[7]),
    menor(auxresults[8],auxtargets[8]),menor(auxresults[9],auxtargets[9]),menor(auxresults[10],auxtargets[10])];
  let cost=[menor(auxresults[11],auxtargets[11]),menor(auxresults[12],auxtargets[12])];
  let process_=[menor(auxresults[13],auxtargets[13]),menor(auxresults[14],auxtargets[14]),menor(auxresults[15],auxtargets[15]),menor(auxresults[16],auxtargets[16]),menor(auxresults[17],auxtargets[17]),
    menor(auxresults[18],auxtargets[18]),menor(auxresults[19],auxtargets[19])];
  let flow=[menor(auxresults[20],auxtargets[20]),menor(auxresults[21],auxtargets[21])];
  let labor=[mayor(auxresults[22],auxtargets[22]),mayor(auxresults[23],auxtargets[23]),mayor(auxresults[24],auxtargets[24])];
  let environment=[menor(auxresults[25],auxtargets[25]),menor(auxresults[26],auxtargets[26])];

  let kpis=[people,customer,cost,process_,flow,labor,environment];
  
  var t8=document.getElementById('t8');
  var t1=document.getElementById('t1');
  var t4=document.getElementById('t4');
  var t2=document.getElementById('t2');
  var t5=document.getElementById('t5');
  var t6=document.getElementById('t6');
  var t10=document.getElementById('t10');
  
  let figuras=[t8,t1,t4,t2,t5,t6,t10];

  for(let i=0; i<kpis.length;i++){
    var contador=0;
    for (let k=0; k<kpis[i].length;k++){
        contador+=kpis[i][k];
    }
    if(contador>(kpis[i].length)/2){
        figuras[i].style.borderBottomColor='green';
        figuras[i].style.borderTopColor='green';
    }else{
        figuras[i].style.borderBottomColor='red';
        figuras[i].style.borderTopColor='red';
    }
  }

  //return comparedData;
}

function compareData2(resultsData, targetsData) { //esta funcion es para sacar los porcentajes del otro grafico que se compara con el grafico 1. no esta concluido lo de aqui. posiblemente es mejor rehacerlo.

  var date1=parseInt(document.getElementById('date1').value,10);
  var date2=parseInt(document.getElementById('date2').value,10);
  var auxresults=[];
  var auxtargets=[];

  for(let i=0;i<resultsData.length;i++){ //agarrar los datos entre las 2 fechas
    var auxres=[];
    var auxtar=[];
    for(let k=date1;k<=date2;k++){
        auxres.push(resultsData[i][k]);
        auxtar.push(targetsData[i][k]);
    }
    auxresults.push(auxres);
    auxtargets.push(auxtar);
  }

  let people=[menor(auxresults[0],auxtargets[0]),menor(auxresults[1],auxtargets[1]),menor(auxresults[2],auxtargets[2])];
  let customer=[mayor(auxresults[3],auxtargets[3]),mayor(auxresults[4],auxtargets[4]),mayor(auxresults[5],auxtargets[5]),menor(auxresults[6],auxtargets[6]),menor(auxresults[7],auxtargets[7]),
    menor(auxresults[8],auxtargets[8]),menor(auxresults[9],auxtargets[9]),menor(auxresults[10],auxtargets[10])];
  let cost=[menor(auxresults[11],auxtargets[11]),menor(auxresults[12],auxtargets[12])];
  let process_=[menor(auxresults[13],auxtargets[13]),menor(auxresults[14],auxtargets[14]),menor(auxresults[15],auxtargets[15]),menor(auxresults[16],auxtargets[16]),menor(auxresults[17],auxtargets[17]),
    menor(auxresults[18],auxtargets[18]),menor(auxresults[19],auxtargets[19])];
  let flow=[menor(auxresults[20],auxtargets[20]),menor(auxresults[21],auxtargets[21])];
  let labor=[mayor(auxresults[22],auxtargets[22]),mayor(auxresults[23],auxtargets[23]),mayor(auxresults[24],auxtargets[24])];
  let environment=[menor(auxresults[25],auxtargets[25]),menor(auxresults[26],auxtargets[26])];

  let kpis=[people,customer,cost,process_,flow,labor,environment];
  
  var t8=document.getElementById('t8');
  var t1=document.getElementById('t1');
  var t4=document.getElementById('t4');
  var t2=document.getElementById('t2');
  var t5=document.getElementById('t5');
  var t6=document.getElementById('t6');
  var t10=document.getElementById('t10');
  
  var t11=document.getElementById('t11');
  var t3=document.getElementById('t3');
  var t14=document.getElementById('t14');
  var t15=document.getElementById('t15');
  var t16=document.getElementById('t16');
  var t18=document.getElementById('t18');
  var t20=document.getElementById('t20');

  let figuras2=[t11,t3,t14,t15,t16,t18,t20];
  let figuras=[t8,t1,t4,t2,t5,t6,t10];

  for(let i=0; i<kpis.length;i++){
    var contador=0;
    for (let k=0; k<kpis[i].length;k++){
        contador+=kpis[i][k];
    }
    if(contador>(kpis[i].length)/2){
        figuras[i].style.borderBottomColor='green';
        figuras[i].style.borderTopColor='green';
        figuras2[i].style.borderBottomColor='red';
        figuras2[i].style.borderTopColor='red';
    }
    else{
        figuras[i].style.borderBottomColor='red';
        figuras[i].style.borderTopColor='red';
        figuras2[i].style.borderBottomColor='green';
        figuras2[i].style.borderTopColor='green';
    }
  }

  //return comparedData2;
}

