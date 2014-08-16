/**
 * Created by Matias on 01/08/2014.
 */
var app = angular.module("FaceApp",[]);

app.controller("PerfilController",function($scope){
    $scope.prueba = "toto";
    $scope.usuarios = {
        cero:{
            nombre:"cholo",
            apellido: "gomez",
            email:"",
            edad:"",
            fotos:
                [
                    "images/tito1.jpg","images/tito2.jpg"
                ],
            amigos:
                {
                    tito    :   "tito1",
                    cholo   :    "cholo1"
                },
            mensajes:
                {
                    cero: "Hola",
                    uno: "Chau"
                },
            estados: ["hola","amego"]

        },
        uno:{
            nombre:     "pocho",
            apellido:   "bolanios",
            fotos:
                [
                    "images/tito1.jpg","images/tito2.jpg"
                ],
            amigos:
            {
                tito:   "cero",
                cholo:    "uno"
            },
            mensajes:
            {
                cero: "Hola",
                uno: "Chau"
            },
            estados: ["chauchis","querido"]
        }

    };

    $scope.panel = 4;

    $scope.setPanel = function(valorPanel){
        $scope.panel = valorPanel;
    }

    $scope.viewPanel = function(valorPanel){
        return $scope.panel == valorPanel;
    }

    $scope.nuevoEstado = {};

    $scope.addEstado = function(texto){
    $scope.usuarios.cero.estados.push(texto);

    $scope.nuevoEstado = {};
    }

    $scope.addDesc = function(usuarios) {
        console.log($scope.usuarios.cero.edad);
    }
});

app.controller("PanelController",function($scope){

});

app.controller("AmigoCtrl",function($scope){
    $scope.amigo = {};
    $scope.addAmigo = function(){
        console.log($scope.usuarios.cero.amigos[$scope.amigo.nombre]);
        $scope.usuarios.cero.amigos[$scope.amigo.nombre] = ($scope.amigo.nombre);
        $scope.amigo = {};

    };

});

