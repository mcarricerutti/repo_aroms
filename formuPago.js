//PROBLEMA 2
//Aqui quiero encontrar la manera de traer el total de la compra para ponerlo en las opciones de cuotas

const DOMCuotas = document.getElementById(`cuotas`);
function presentarCuotas(){
    const MisCuotas=document.getElementById(`cuotas`)
    MisCuotas.innerHTML=`
    <select class="form-select"  aria-label="Default select example">
        <option value="1">1 x ${1200}</option>
        <option value="2">3 x (${1200/3})</option>
        <option value="3">6 x (${1200/6})</option>
    </select>
    `;
}
presentarCuotas();

//PROBLEMA 3
//Alerta que quiero que aparezca cuando se finalice la compra total

let fin=document.querySelector(`#finCompra`);
fin.onclick=()=>{
    Swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
}