//Programa Desarrollado por Jorge Tomás Araujo González
var express=require('express');
const multer = require('multer'); //carga de archivos
const sqlite3 = require('sqlite3'); //libreria base de datos
var server=express()

server.use(express.urlencoded({ extended: true })) //procesar correctamente los datos codificados en URL
server.use(express.static('public')); //carpeta principal: public

// Configura la conexión a la base de datos
const db = new sqlite3.Database('enterprise2.db');

// Configura rutas para tu API
server.get('/api/pdca', (req, res) => {
  // Ejecuta una consulta SQL para obtener datos de la tabla chart
  db.all('SELECT * FROM PDCA', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }
    res.send(rows);
  });
});

server.get('/api/kpis_input', (req, res) => {
  // Ejecuta una consulta SQL para obtener datos de la tabla chart
  db.all('SELECT * FROM KPIS_INPUT', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }
    res.send(rows);
  });
});

server.get('/api/kpis_target', (req, res) => {
  // Ejecuta una consulta SQL para obtener datos de la tabla chart
  db.all('SELECT * FROM KPIS_TAR', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }
    res.send(rows);
  });
});

server.get('/api/kpis_results', (req, res) => {
  // Ejecuta una consulta SQL para obtener datos de la tabla chart
  db.all('SELECT * FROM KPIS_RES', (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Error en la base de datos' });
      return;
    }
    res.send(rows);
  });
});

server.post('/actualizar', (req, res) => {
  const nombre_tabla=req.body.nombre_tabla;
  const col = req.body.col; 
  const nuevoValor = req.body.nuevoValor;
  const id_val = req.body.id_val;
  const consql=`UPDATE ${nombre_tabla} SET ${col} = ? WHERE id = ?`;

  // Realiza la actualización en la base de datos
  db.run(consql, [nuevoValor, id_val], (err) => { //recibe parametros que se mandan desde el html con jquery 
    if (err) {
      return console.error(err.message);
    }
    console.log(`Registro actualizado con éxito. Nuevo valor: ${nuevoValor}`);
    res.redirect('/');
  });
});

const var_fotos=['storage_surf','storage_coat','storage_edg','storage_wh','storage_main','storage_quality','profile_pictures'];
const direcciones=['sf/','ct/','edg/','wh/','maint/','qty/','profiles/'];

// Objeto para almacenar las variables con los nombres de var_fotos como propiedades
const storageVariables = {};

for (let i = 0; i < var_fotos.length; i++) {
  storageVariables[var_fotos[i]] = multer.diskStorage({//se crean variables con los nombres contenidos en var_fotos, que se insertan en el objeto storagevariables
    destination: (req, file, cb) => {
      cb(null, 'public/'+direcciones[i]);//se guardan las fotos en las direcciones de la lista direcciones
  },
  filename: (req, file, cb) => {
      cb(null, file.fieldname + '.' + 'jpg');//se guardan en formato jpg
  }
  });
}

const upload_picture = multer({ storage: storageVariables['profile_picture'] }); //configurar carga de archivos
const upload_surf = multer({ storage: storageVariables['storage_surf'] });
const upload_coat = multer({ storage: storageVariables['storage_coat'] });
const upload_edg = multer({ storage: storageVariables['storage_edg'] });
const upload_wh = multer({ storage: storageVariables['storage_wh'] });
const upload_main = multer({ storage: storageVariables['storage_main'] });
const upload_quality = multer({ storage: storageVariables['storage_quality'] });

// Rutas
server.post('/set', upload_picture.fields([
  { name:'1', maxCount:1}, //maxCount: total de elementos permitidos en el campo
  { name:'2', maxCount:1},
  { name:'3', maxCount:1},
  { name:'4', maxCount:1},
  { name:'5', maxCount:1},
  { name:'6', maxCount:1},
]), (req, res) => { //req: request, res: response|
  res.sendFile(__dirname+'/'+'settings.html');
});

const dirs=['/ct', '/edg', '/sf', '/wh', '/main', '/qty'];
const html_files=['coating.html', 'edging.html', 'surf.html', 'warehouse.html', 'maintenance.html', 'quality.html'];
const uploads_dir=[upload_coat,upload_edg,upload_surf,upload_wh,upload_main,upload_quality];

for (let index = 0; index < dirs.length; index++) {//guardar las fotos en carpetas especificas y regresar el html correspondiente
  server.post(dirs[index], uploads_dir[index].fields([
    { name:'1', maxCount:1}, //maxCount: total de elementos permitidos en el campo
    { name:'2', maxCount:1},
    { name:'3', maxCount:1},
    { name:'4', maxCount:1},
    { name:'5', maxCount:1},
    { name:'6', maxCount:1},
    { name:'7', maxCount:1},
    { name:'8', maxCount:1},
    { name:'9', maxCount:1},
    { name:'10', maxCount:1},
    { name:'11', maxCount:1},
    { name:'12', maxCount:1},
    { name:'13', maxCount:1},
    { name:'14', maxCount:1},
    { name:'15', maxCount:1},
    { name:'16', maxCount:1},
  ]), (req, res) => { //req: request, res: response|
    res.sendFile(__dirname+'/'+html_files[index]);
  });
}

const principal_links=['/','/about','/surf','/coat','/edging','/inventory','/finishing','/quality','/settings'];
const principal_html=['home.html','about.html','surf.html','coating.html','edging.html','warehouse.html','maintenance.html','quality.html','settings.html'];

for (let index=0; index<principal_html.length; index++){//relacion entre enlaces y html (se accede a los html por su enlace correspondiente)
  server.get(principal_links[index],function(req,res){
    res.sendFile(__dirname+'/'+principal_html[index]);	
  });
}

for (let index = 1; index < 25; index++) {//acceder a los html de las tablas dependiendo de la direccion ingresada
  server.get('/tabla'+index,function(req,res){
    res.sendFile(__dirname+'/'+'tabla'+index+'.html');	
  });
}

server.get('/test',function(req,res){
	res.sendFile(__dirname+'/'+'test.html');	
});

server.get('/input',function(req,res){
	res.sendFile(__dirname+'/'+'input.html');	
});

server.get('/target',function(req,res){
	res.sendFile(__dirname+'/'+'target.html');	
});

server.get('/stat',function(req,res){
	res.sendFile(__dirname+'/'+'stat.html');	
});

server.listen(2000,function(){
	console.log('servidor corriendo');
});
