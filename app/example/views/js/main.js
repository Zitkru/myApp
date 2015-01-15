$(document).ready(function (){
    supersonic.ui.tabs.hide();

});
function login(){
    $.ajax('http://soporte.technit.com.mx/Tickets/responses/login.php',{
        type:'GET',
        data:$('#loginForm').serialize(),
        dataType: 'jsonp',
        success:function(e){
            var idUsuarioL="";
            idUsuarioL=e.logeado;
            $("#idusuario").val(idUsuarioL);
            
            if(e.logeado > 0){
                //Cambia de view vía Appgyver
               var view = new supersonic.ui.View("example#tickets");
               supersonic.ui.layers.push(view);
               
            } else if (e.logeado == -1){
                alert("Incorrect password")
            } else if (e.logeado == -2){
                alert("Incorrect Username")
            } else if (e.logeado == -3){
                alert("Incorrect conection")
            }

        }
    });
}

//Botón Ver Tickets
function verTicket(){
    $.ajax('http://soporte.technit.com.mx/Tickets/responses/imprimirTickets.php',{
        type:'GET',
        data:{tablaT : 1},
        dataType: 'jsonp',
        success: function(e){
            $('#subBotonesVerTickets').css({ visibility: 'visible'});
            $("#misTickets").html("");
             
            for (var i = 0; i< e.length; i++) {
                var importanciaString;
                if(e[i].importancia==1){
                    importanciaString = "Alto";
                }else if(e[i].importancia==2){
                    importanciaString = "Medio";
                }else if(e[i].importancia==3){
                    importanciaString = "Bajo";
                }
                var statusString;
                if(e[i].estatus == 1)
                    statusString = "Pendiente";
                else if(e[i].estatus == 2)
                    statusString = "Resuelto"
                var msg = $("<div class=\"item item-divider\"></div>");
                msg.append("" + e[i].nombre + " publicó: " + e[i].titulo + "");
                $("#misTickets").append(msg);
                var msg2 = $("<div class=\"item item-text-wrap\"></div>");
                msg2.append("" + e[i].descripcion + "");
                $("#misTickets").append(msg2);
                var msg3 = $("<div class=\"item item-divider\"></div>");
                msg3.append(" Importancia: " + importanciaString + "");
                $("#misTickets").append(msg3);
               
            };

        },
        error:function(e){
            alert(e);
        }

    }); 
}
//Botón Nuevo Ticket
function verNuevoTicket(){
     //Cambia de view vía Appgyver
    var view = new supersonic.ui.View("example#nuevoTicket");
    supersonic.ui.layers.push(view);
}
//Ver tickets resueltos
function verTicketResuelto(){
    $.ajax('http://soporte.technit.com.mx/Tickets/responses/imprimirTicketsResueltos.php',{
        type:'GET',
        data:{tablaT : 1},
        dataType: 'jsonp',
        success: function(e){
            $('#subBotonesVerTickets').css({ visibility: 'visible'});
            $("#misTickets").html("");
             
            for (var i = 0; i< e.length; i++) {
                var importanciaString;
                if(e[i].importancia==1){
                    importanciaString = "Alto";
                }else if(e[i].importancia==2){
                    importanciaString = "Medio";
                }else if(e[i].importancia==3){
                    importanciaString = "Bajo";
                }
                var statusString;
                if(e[i].estatus == 1)
                    statusString = "Pendiente";
                else if(e[i].estatus == 2)
                    statusString = "Resuelto"
                var msg = $("<div class=\"item item-divider\"></div>");
                msg.append("" + e[i].nombre + " publicó: " + e[i].titulo + "");
                $("#misTickets").append(msg);
                var msg2 = $("<div class=\"item item-text-wrap\"></div>");
                msg2.append("" + e[i].descripcion + "");
                $("#misTickets").append(msg2);
                var msg3 = $("<div class=\"item item-divider\"></div>");
                msg3.append(" Importancia: " + importanciaString + "");
                $("#misTickets").append(msg3);
               
            };

        },
        error:function(e){
            alert(e);
        }

    }); 
}
//Botón Ver Tickets Pendientes
function verTicketPendiente(){
    $.ajax('http://soporte.technit.com.mx/Tickets/responses/imprimirTicketsPendientes.php',{
        type:'GET',
        data:{tablaT : 1},
        dataType: 'jsonp',
        success: function(e){
            $('#subBotonesVerTickets').css({ visibility: 'visible'});
            $("#misTickets").html("");
             
            for (var i = 0; i< e.length; i++) {
                var importanciaString;
                if(e[i].importancia==1){
                    importanciaString = "Alto";
                }else if(e[i].importancia==2){
                    importanciaString = "Medio";
                }else if(e[i].importancia==3){
                    importanciaString = "Bajo";
                }
                var statusString;
                if(e[i].estatus == 1)
                    statusString = "Pendiente";
                else if(e[i].estatus == 2)
                    statusString = "Resuelto"
                var msg = $("<div class=\"item item-divider\"></div>");
                msg.append("" + e[i].nombre + " publicó: " + e[i].titulo + "");
                $("#misTickets").append(msg);
                var msg2 = $("<div class=\"item item-text-wrap\"></div>");
                msg2.append("" + e[i].descripcion + "");
                $("#misTickets").append(msg2);
                var msg3 = $("<div class=\"item item-divider\"></div>");
                msg3.append(" Importancia: " + importanciaString + "");
                $("#misTickets").append(msg3);
               
            };

        },
        error:function(e){
            alert(e);
        }

    });
}
//Creando el Ticket Nuevo
function crearTicket(){
    $.ajax('http://soporte.technit.com.mx/Tickets/responses/crearTicket.php',{
        type:'GET',
        data:$('#NuevoForm').serialize(),
        dataType: 'jsonp',
        success:function(e){
            alert("Se creó su Ticket con éxito");
        },
        error:function(e){
            alert(e);
        }
    });
}