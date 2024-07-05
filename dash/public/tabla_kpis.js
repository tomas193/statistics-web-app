function inicio(id_value,bandera){
    $(document).ready(function(){

      const planta_site=document.getElementById('planta1').value;

        Promise.all([fetchResults(planta_site), fetchTargets(planta_site)])
        .then(([resultsData, targetsData]) => {
          // Compare the values from the two APIs
          const comparedData = compareData(resultsData, targetsData,bandera);
        })
        .catch(error => {
          console.error('There was an error!', error);
        });
  });

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

  function compareData(resultsData, targetsData,bandera) {

        var currentDate = new Date();
        var currentYear = currentDate.getFullYear();

              // Configuración de datos para la gráfica
        const ctx = document.getElementById('tabla'+id_value).getContext('2d');
  
        const color=['rgba(0, 143, 57, 0.6)','rgba(255, 0, 0,0.5)','rgba(128, 128, 128,0.5)']; //verde  -  rojo
        const backgroundColor=[color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2],color[2]];
        //const backgroundColor=['/','/','/','/','/','/','/','/','/','/','/','/','/','/'];

        /*for(let i=0;i<backgroundColor.length;i++){
          if(bandera==0){
            if(resultsData[i]<=targetsData[i]){
              backgroundColor[i]=color[0];
            }else{
              backgroundColor[i]=color[1];
            }
          }else{
            if(resultsData[i]<=targetsData[i]){
              backgroundColor[i]=color[1];
            }else{
              backgroundColor[i]=color[0];
            }
          }
        }*/

        const data = {
        labels: ['YTD'+(currentYear-1), 'jan', 'feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec','YTD'+currentYear], // Etiquetas en el eje X
        datasets: [{
            label: 'Value',
            data: resultsData[id_value-1], // Datos para las barras
            backgroundColor: 'rgba(260, 230, 0,0.6)', // Color de las barras
            borderWidth: 0.5,
            type: 'bar',
        },{
          label: 'Target',
          data: targetsData[id_value-1], // Datos para las barras
          backgroundColor: 'rgba(0, 0, 0,0.8)', // Color de las barras
          borderWidth: 2,
          type: 'line',
        }]
    };

    const config = {
        data: data};

    const myChart = new Chart(ctx, config);

  //return comparedData;
}//inconcluso fetch targets. 


}

