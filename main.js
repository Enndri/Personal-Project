var car= {
    name:"Audi",
    color:"White",
    year:2023,
    kilometres:0,
    startEngine : function() {
        alert("testtt");
    },

    get getkilometres(){
        return this.kilometres;
    },
    set setKilometres(km){
        this.kilometres = km;
    }
};

