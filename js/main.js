function validateForm(){
  var nombre = document.getElementById('name').value;
  var apellido = document.getElementById('lastname').value;
  var correo = document.getElementById('input-email').value;
  var contrasena = document.getElementById('input-password').value; 
  var listaBici = document.getElementsByTagName('select')[0].selectedIndex;

//Campos obligatorios desde nombre hasta listaBici.
  function obligatoria (){
    if( nombre == null || nombre.length == 0 || /^\s+$/.test(nombre) ) {
      //alert("Campo obligatorio nombre");
      var contenedor = document.getElementsByClassName('name-container')[0];
      var alerta = document.createElement('span');
      var nodoAlerta = document.createTextNode("Campo obligatorio nombre");
      alerta.appendChild(nodoAlerta);
      contenedor.appendChild(alerta);
      return false;
    }
    else if( apellido == null || apellido.length == 0 || /^\s+$/.test(apellido) ) {
      //alert("Campo obligatorio apellido");
      var contenedor = document.getElementsByClassName('lastname-container')[0];
      var alerta = document.createElement('span');
      var nodoAlerta = document.createTextNode("Campo obligatorio apellido");
      alerta.appendChild(nodoAlerta);
      contenedor.appendChild(alerta);
      return false; 
    }
    else if( correo == null || correo.length == 0 || /^\s+$/.test(correo) ) {
      //alert("Campo obligatorio correo");
      var contenedor = document.getElementsByClassName('input-email-container')[0];
      var alerta = document.createElement('span');
      var nodoAlerta = document.createTextNode("Campo obligatorio correo");
      alerta.appendChild(nodoAlerta);
      contenedor.appendChild(alerta);
      return false; 
    }
    else if( contrasena == null || contrasena.length == 0 || /^\s+$/.test(contrasena) ) {
      //alert("Campo obligatorio contraseña");
      var contenedor = document.getElementsByClassName('input-password-container')[0];
      var alerta = document.createElement('span');
      var nodoAlerta = document.createTextNode("Campo obligatorio contraseña");
      alerta.appendChild(nodoAlerta);
      contenedor.appendChild(alerta);
      return false; 
    }
    else if( listaBici == null || listaBici == 0) {
      //alert("Campo obligatorio lista");
      var contenedor = document.getElementsByClassName('select-container')[0];
      var alerta = document.createElement('span');
      var nodoAlerta = document.createTextNode("Campo obligatorio lista");
      alerta.appendChild(nodoAlerta);
      contenedor.appendChild(alerta);
      return false; 
    }
    else{
      return true;
    }
  }obligatoria();


  function letras (nombre){
    var pasoDos = /^[a-zA-Z]*$/;
    if (!nombre.search(pasoDos)){
      return true;
    }else {
      alert("El campo nombre sólo debe permitir caracteres de la A-Z");
      return false;
    }
  }letras(nombre);

    function palabras (apellido){
      var pasoTwo = /^[a-zA-Z]*$/;
      if (!apellido.search(pasoTwo)){
        return true;
      }else {
        alert("El campo apellido sólo debe permitir caracteres de la A-Z");
        return false;
      }
    }palabras(apellido);

      function mayusculaN (nombre) {
        var nomMinus = document.getElementById('name').value.toLowerCase();
        document.getElementById('name').value = nomMinus; //esto transforma a minusculas todo
        var nomPriMayus = nombre.substr(0,1).toUpperCase();//convierte la primera letra en mayuscula
        var nombrecito = document.getElementById('name').value;//esto es para llamar de a la primera var
        var arrNom = nombrecito.split("");//esto pasa nombrecito en un array
        var quitarN = arrNom.shift();//quita la primera letra del array
        var agragarN = arrNom.unshift(nomPriMayus);//agrega la letra mayuscula
        var nomFinal = arrNom.join("");//esto junta el strin que se habia transformado en un array con sus tipicos espacios commilas y todo
        document.getElementById('name').value = nomFinal;//cambia de array a string
      } mayusculaN(nombre); //llama a la funtion

      function mayusculaA (apellido) {
        var apeMinus = document.getElementById('lastname').value.toLowerCase();
        document.getElementById('lastname').value = apeMinus;
        var apePriMayus = apellido.substr(0,1).toUpperCase();
        var apellidito = document.getElementById('lastname').value;
        var arrApe = apellidito.split(""); 
        var quitarA = arrApe.shift();
        var agregarA = arrApe.unshift(apePriMayus);
        var apeFinal = arrApe.join("");
        document.getElementById('lastname').value = apeFinal;
      }mayusculaA(apellido);

    function contrasenaNula (contrasena) {
      var contraNula = document.getElementById("input-password").value;
      if (contraNula.length<6 || contraNula == "password" || contraNula == 123456 || contraNula == 098754) {
          alert("Contraseña devil");
          return false;
      }
    
    }contrasenaNula(contrasena);
    
    function validarCorreo(correo) {
      var confirma = document.getElementById('input-email').value;
      if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(confirma)) ) {
        return false;
      }
    }validarCorreo(correo);

    function lista (listaBici){
      var indice = document.getElementById("select").selectedIndex;
      if( indice == null || indice == 0 ) {
        return false;
      }
    }lista(listaBici);
}validateForm();
	/* Escribe tú código aquí */