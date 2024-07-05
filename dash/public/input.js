$(document).ready(function(){
    var selectElement = document.getElementById('month');
    var pastDateOption = document.getElementById('past');
    //var actualDateOption = document.getElementById('actual');

    // Obtén la fecha actual
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();

    var pastDateString = 'YTD '+ (currentYear-1);
    //var currentDateString = 'YTD '+ currentYear;

    pastDateOption.textContent = pastDateString;
    //actualDateOption.textContent = currentDateString;

    var selectedplanta = parseInt(document.getElementById('planta').value,10);
    var selectedmonth = parseInt(document.getElementById('month').value,10);
    campos(selectedplanta,selectedmonth);

    $('#input_values').submit(function(e){
      e.preventDefault();
      const aux=[];
      for (var i = 1; i < 53; i++) {
        aux.push(document.getElementById('par'+i).value);
      }
      const auxString = aux.join(',');

      const months=['past','jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','ytd'];
      $.post('/actualizar', {nombre_tabla:'KPIS_INPUT',col:months[selectedmonth],nuevoValor: auxString, id_val:selectedplanta}, function() {
      });

      $.get('/api/kpis_results', function(data) {
        let value;
        const listaDatos = $('#lista-datos');
        // Filtrar los datos para encontrar filas con ID igual a 1
        const filasFiltradas = data.filter(function(item) {
            return item.id === selectedplanta; /*aqui va id de tabla (seleccion de planta)*/
        });

        const primerFila = filasFiltradas[0];

        const meses=[primerFila.in0,primerFila.in1,primerFila.in2,primerFila.in3,primerFila.in4,primerFila.in5,primerFila.in6,primerFila.in7,primerFila.in8,primerFila.in9,primerFila.in10,
        primerFila.in11,primerFila.in12,primerFila.in13,primerFila.in14,primerFila.in15,primerFila.in16,primerFila.in17,primerFila.in18,primerFila.in19,primerFila.in20,primerFila.in21,
        primerFila.in22,primerFila.in23,primerFila.in24,primerFila.in25,primerFila.in26];

        const nuevos_valores=[];
        const inputs=auxString.split(',');
        const inputs_flotantes = inputs.map(function(numero){
            return parseFloat(numero, 10);
        });

        for (let i=0;i<meses.length;i++){
          const aux=meses[i].split(',');
          const valores = aux.map(function(numero){
              return parseFloat(numero, 10);
          });
          nuevos_valores.push(valores);
        }

      const accidents=inputs[0]; const turnover=inputs[3]; const abs=inputs[2]; const vol=inputs[4]; const d2=inputs[5]; const tlabservice=inputs[6]; 
      const d5=(inputs[7]/inputs[8]); const lrdvi=inputs[9]; const lropti=inputs[10]; const lrtotal=inputs[11];
      const sorders=(inputs[12]/inputs[14]); const mucost=(inputs[15]/inputs[16])+(inputs[17]/inputs[18])+(inputs[19]/inputs[20]); const ucfinishing=mucost+(inputs[22]/inputs[21]); 
      const bhmc=(inputs[23]/(inputs[23]+inputs[24])); const bem=(inputs[26]/(inputs[25]+inputs[26])); const optics=(inputs[27]/(inputs[27]+inputs[24])); 
      const fpysurf=(inputs[28]-inputs[29]-inputs[30])/inputs[28]; const fpyhc=1-(inputs[31]/inputs[32]); const fpyar=1-(inputs[33]/inputs[34]);
      const fpyfin=(inputs[35]-inputs[36]-inputs[37])/inputs[35]; const leadtime=inputs[38]; const wip=inputs[39]; 
      const nlhs=1/((1/(inputs[40]/inputs[44]))+(1/(inputs[41]/inputs[45]))+(1/(inputs[41]/inputs[46]))+(1/(inputs[43]/inputs[47]))); 
      const avgsets=inputs[48]; const avglenses=inputs[49]; const energy=inputs[50]/inputs[24]; const water=(inputs[51]*1000)/inputs[24]; 

      const arreglo=[accidents,turnover,abs,vol,d2,tlabservice,d5,lrdvi,lropti,lrtotal,sorders,mucost,ucfinishing,bhmc,bem,optics,fpysurf,fpyhc,fpyar,fpyfin,leadtime,wip,nlhs,avgsets,
        avglenses,energy,water];

      for (let i=0;i<meses.length;i++){
        nuevos_valores[i][selectedmonth]=arreglo[i];
        nuevos_valores[i][13]=0;
        for(let k=1;k<(nuevos_valores[i].length)-1;k++){ //sumatoria de ytd
          nuevos_valores[i][13]+=parseFloat(nuevos_valores[i][k],10);
        }
      }

      const entradas=['in0','in1','in2','in3','in4','in5','in6','in7','in8','in9','in10','in11','in12','in13','in14','in15','in16','in17','in18','in19',
        'in20','in21','in22','in23','in24','in25','in26'];

      for(let i=0;i<entradas.length;i++){
        $.post('/actualizar', {nombre_tabla:'KPIS_RES',col:entradas[i],nuevoValor: nuevos_valores[i].join(','), id_val:selectedplanta}, function() {});
      }
      alert('Updated');
      })
    });

    const elemento=document.getElementById('planta'); //cambia planta
    elemento.addEventListener('change', function() {
      campos(parseInt(elemento.value,10),selectedmonth);
      location.reload();
    });

    var selectElement = document.getElementById('month'); //cambia mes
    selectElement.addEventListener('change', function() {
      campos(selectedplanta,parseInt(selectElement.value,10));
      location.reload();
    });

    outputs();
});

  function campos(planta_seleccionada,mes_seleccionado){
      $.get('/api/kpis_input', function(data) {
        let value;
        const listaDatos = $('#lista-datos');
        // Filtrar los datos para encontrar filas con ID igual a 1
        const filasFiltradas = data.filter(function(item) {
            return item.id === planta_seleccionada; /*aqui va id de tabla (seleccion de planta)*/
        });

        const primerFila = filasFiltradas[0];
        const meses=[primerFila.past,primerFila.jan,primerFila.feb,primerFila.mar,primerFila.apr,primerFila.may,primerFila.jun,primerFila.jul,primerFila.aug,primerFila.sep,primerFila.oct,primerFila.nov,primerFila.dec,primerFila.ytd];

          value = (meses[mes_seleccionado]).split(","); //aqui va el mes
    
          const values = value.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });

        for (let index = 0; index <= values.length; index++) {
            document.getElementById('par'+(index+1)).setAttribute("value", values[index]);}
      })
    }
