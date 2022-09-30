var app = new Vue({
    el : '#app',
    data : {
        lista : [
        ],
        nombre : '',
        promedio : '',
        dni:'',
        show_contact_form:0,
        nombre:'',
        apellidos:'',
        email:'',
        celular:'',
        mensaje:''
    },
    methods : {
        agregarNota: function (){
            estadoA=false;
            if (this.promedio>=11){
                estadoA=true;
            }
            if (this.nombre!="" && this.promedio!=""){
                this.lista.push({nombre:this.nombre, promedio:this.promedio, estado:estadoA});
                this.nombre="";
                this.promedio="";
            }
            else{
                alert ("Ingrese el nombre y promedio del estudiante");
            }
        },
        verificarCampos:function(){
            //console.log(this.dni.length);
            //console.log(this.show_contact_form);
            if (this.dni==""){
                alert ("Ingrese su DNI para proceder con la denuncia");
            }
            else if(this.dni.length == 8){
                this.show_contact_form = 1;
                //console.log(this.show_contact_form);
            }
            else{
                alert ("Ingrege un DNI válido (8 dígitos)");
            }
        },
        enviarDenuncia:function(){
            this.verificarCampos();
            alert ("Tu denuncia se registró correctamente");
            this.limpiarCampos();
        },
        cancelarDenuncia:function(){
            alert ("Denuncia cancelada!");
            this.limpiarCampos();
        },
        limpiarCampos:function(){
            let me = this;
            me.dni="";
            me.show_contact_form=0;
            me.nombre="";
            me.apellidos="";
            me.email="";
            me.celular="";
            me.mensaje="";
        }
    }
})