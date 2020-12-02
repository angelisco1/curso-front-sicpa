

















var Contador = {
  cuenta: 0,
  inc: function () {
    console.log(this)
  }
}

Contador.inc()

let onClick = Contador.inc;

onClick();


// SOLUCION 1
// Contador.inc = Contador.inc.bind(Contador);
Contador.inc = Contador.inc.bind({cuenta: 20});

onClick = Contador.inc;

onClick();


// SOLUCION 2
let onClic = () => {
  Contador.inc();
}

onClic();
