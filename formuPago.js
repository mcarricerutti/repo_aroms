const DOMCuotas = document.getElementById(`cuotas`);
function presentarCuotas(){
    const MisCuotas=document.getElementById(`cuotas`)
    MisCuotas.innerHTML=`
    <select class="form-select"  aria-label="Default select example">
        <option value="default"> Cuotas </option>
        <option value="1">x 1 </option>
        <option value="2">x 3</option>
        <option value="3">x 6</option>
    </select>
    `;
}
presentarCuotas();


const DOMbtnFin=document.querySelector(`#btnCorroborar`);

const miBtnFin = document.createElement(`button`);
miBtnFin.classList.add= `btn btnFinPago form-control`;
miBtnFin.type=`submit`;
miBtnFin.id=`finCompra`;
miBtnFin.style.backgroundColor=`#212529`;
miBtnFin.style.color=`white`;
miBtnFin.style.padding=`2%`;
miBtnFin.style.marginTop=`2%`;
miBtnFin.style.fontSize=`15px`;
miBtnFin.style.border=`white`;
miBtnFin.innerText=`FINALIZAR COMPRA ->`
miBtnFin.addEventListener(`click`, alertFinCompra);

DOMbtnFin.appendChild(miBtnFin);

function alertFinCompra(){
    Swal.fire({
        text: '¡Compra realizada con éxito!   ✅',
        showCancelButton: false,
        showConfirmButton: false,
    })
}