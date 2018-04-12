new Vue({
    el: "main",
    data: {
        lista: [
            {item:"Item1"},{item:"Item2"},{item:"Item3"},{item:"Item4"}],
        marcado: null
    },
    methods: {
        marcar(index){
            //alert("hola");
            this.marcado = index
        }
    }
})