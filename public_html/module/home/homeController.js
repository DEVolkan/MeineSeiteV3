var app = angular.module('app.Home', ['angularCharts']);


app.controller('homeController', function($scope, $http, $location) {
//    $scope.chartTypeBenutzer = 'bar';
//    
//    $scope.benutzerConfig = {
//        labels: false,
//        title: "Fähigkeiten",
//        tooltips: true,
//        legend: {
//            display: true,
//            position: 'left'
//        },
////        colors: ['#EC1313', '#D0B724'],
//        click: function(d) {
//           
//        }
//    };
//$scope.benutzer = {
//  series: ["Sales", "Income", "Expense"],
//  data: [{
//    x: "Computers",
//    y: [54, 0, 879],
//    tooltip: "This is a tooltip"
//  }]
//}
function getRandom(min, max) {
        if (min > max) {
            return -1;
        }
        if (min == max) {
            return min;
        }
        var r;
        do {
            r = Math.random();
        }
        while (r == 1.0);
        return min + parseInt(r * (max - min + 1));
    }
    
    //Zahl in Hexadezimal umwandeln
    function getRandomHexInt(min, max) {
        var hexaZahl = getRandom(min, max).toString(16).toUpperCase();
        if (hexaZahl.length <= 1)
        {
            hexaZahl = "0" + hexaZahl;
        }
        return hexaZahl;
    }
    
    //Farbcode aus Hexadezimalzahl generieren
    function getHexFarbe(farbe) {
        switch (farbe) {
            case "BlauBisTuerkis":
                return fertigeHexaZahl = "#" + getRandomHexInt(0, 20) + getRandomHexInt(32, 102) + getRandomHexInt(120, 130);
                break;
            case "Grau":
                return fertigeHexaZahl = "#" + getRandomHexInt(105, 115) + getRandomHexInt(105, 120) + getRandomHexInt(105, 120);
                break;
            case "Hellgrau":
                return fertigeHexaZahl = "#" + getRandomHexInt(170, 185) + getRandomHexInt(170, 185) + getRandomHexInt(170, 185);
                break;
        }
    }

    $scope.data1 = {
        series: ['Java', 'C#', 'HTML', 'Javascript', 'Xaml', 'AngularJS'],
        
        data: [ {
                x: "C#",
                y: [40],
                tooltip: "C#"
            }, {
                x: "HTML",
                y: [50],
                tooltip: "HTML"
            }, {
                x: "Javascript",
                y: [30],
                tooltip: "Javascript"
            },{
                x: "Java",
                y: [70],
                tooltip: "Java"
            }, {
                x: "Xaml",
                y: [35],
                tooltip: "Xaml"
            },
             {
                x: "AngularJS",
                y: [30],
                tooltip: "AngularJS"
            }
        ],
        
    };

    $scope.chartType = 'bar';

    $scope.config1 = {
        labels: true,
        title: "Fähigkeitenstufe in Prozent",
        legend: {
            display: true,
            position: 'left'
        },
        colors: [getHexFarbe("BlauBisTuerkis"), getHexFarbe("Grau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Hellgrau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Grau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Hellgrau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Grau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Hellgrau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Grau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Hellgrau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Grau"), getHexFarbe("BlauBisTuerkis"), getHexFarbe("Hellgrau")],
        click: function(d) {
//            alert(d.currentTarget.__data__.x);
//            alert(d.currentTarget.__data__.y);
        },
        mouseover: function(d) {
            //Mouseover ist nicht genau wie click
//            alert("d.currentTarget.__data__.x");
//            alert("d.currentTarget.__data__.y");
        }
    };

});
