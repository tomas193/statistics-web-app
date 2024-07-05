function inicio(id_value){
    $(document).ready(function(){
        const valor=id_value
        
      let value; let target;
      $.get('/api/pdca', function(data) {
          const listaDatos = $('#lista-datos');
          // Filtrar los datos para encontrar filas con ID igual a 1
          const filasFiltradas = data.filter(function(item) {
              return item.id === id_value;
          });
    
          const primerFila = filasFiltradas[0];
      if (primerFila) {
          value = (primerFila.value).split(",");
          target = (primerFila.target).split(",");
          bandera = (primerFila.flag);

          if (bandera==1) {
            $("#rd1").hide();
            $("#rd2").show();
          }else{
            $("#rd1").show();
            $("#rd2").hide();
          }
    
          const values = value.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });
          const targets = target.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });
    
          // Configuración de datos para la gráfica
          const ctx = document.getElementById('tabla'+id_value).getContext('2d');
    
          const color=['rgba(0, 143, 57, 0.6)','rgba(255, 0, 0,0.5)']; //verde  -  rojo
          const backgroundColor=['/','/','/','/','/','/'];
    
          
            if(bandera==0){
                for (let i = 0; i < value.length; i++) {
                if (targets[i]>values[i]){
                    backgroundColor[i]=color[1];
                } else{
                    backgroundColor[i]=color[0];
                }}
            }else{
                for (let i = 0; i < value.length; i++) {
                if (targets[i]<=values[i]){
                    backgroundColor[i]=color[1];
                } else{
                    backgroundColor[i]=color[0];
                }}
            }
          
    
          const data = {
              labels: ['diciembre', 'enero', 'febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'], // Etiquetas en el eje X
              datasets: [{
                  label: 'Valor',
                  data: values, // Datos para las barras
                  backgroundColor: backgroundColor, // Color de las barras
                  borderWidth: 0.5,
                  type: 'bar',
              },{
                label: 'Target',
                data: targets, // Datos para las barras
                backgroundColor: 'rgba(0, 0, 0, 0.6)', // Color de las barras
                borderWidth: 2,
                type: 'line',
              }]
          };
    
          const config = {
              data: data};
    
          const myChart = new Chart(ctx, config);
          }

      });
      camps(id_value);
  });
}

function camps(id_value){ /*set values graficas PDCA*/
    $(document).ready(function(){
      let value; let target;
      $.get('/api/pdca', function(data) {
          const listaDatos = $('#lista-datos');
          // Filtrar los datos para encontrar filas con ID igual a 1
          const filasFiltradas = data.filter(function(item) {
              return item.id === id_value;
          });
    
          const primerFila = filasFiltradas[0];
      if (primerFila) {
          value = (primerFila.value).split(",");
          target = (primerFila.target).split(",");
          titulo=primerFila.nombre
          
          document.getElementById('titulo_tabla').textContent=titulo;
          document.getElementById('titulo_ventana').textContent=titulo;
    
          const values = value.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });
          const targets = target.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });

          for (let index = 0; index <= values.length; index++) {
            document.getElementById('val'+(index+1)).setAttribute("value", values[index]);
            document.getElementById('tar'+(index+1)).setAttribute("value", targets[index]);}
          }
      });
    });
}

function campos_target(){ /*no terminada. falta rehacer la tabla de targets*/
    $(document).ready(function(){
      let value; let target;
      $.get('/api/kpis_target', function(data) {
          const listaDatos = $('#lista-datos');
          const filasFiltradas = data.filter(function(item) {
              return item.id === 1; /*aqui va id de tabla para seleccionar planta*/
          });
    
          const primerFila = filasFiltradas[0];
      if (primerFila) {
          value = (primerFila.kpis).split(","); /*aqui va el mes*/
    
          const values = value.map(function(numero) {
              return parseFloat(numero, 10); // Convierte el elemento a entero en base 10
          });

          for (let index = 0; index <= values.length; index++) {
            document.getElementById('target'+(index+1)).setAttribute("value", values[index]);}
          }
      });
    });
}