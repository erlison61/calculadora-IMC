//array de objetos contendo as classificações
const dataImc=[
    {
        min:0,
        max:18.5,
        description:`você está com o peso abaixo da media, cuidado`
    },
    {
        min:18.6,
        max:24.9,
        description:`você está com o peso normal`
    },
    {
    
        min:25,
        max:29.9,
        description:`você está com sobrepeso`
    },
    {
        
        min:30,
        max:40,
        description:`você está obeso, cuidado`  
    }
]
  
  
const getElemet= (...queries)=>document.querySelector(...queries)
  
const nome=getElemet('#nome')
  
const txtAlt=getElemet('#txtAlt')
const txtPeso=getElemet('#txtPeso')
  
const btnCalc=getElemet('#btnCalc')

const result=getElemet('#res')

//funções
  
function calcImc(peso, altura){
    const imc= (peso/(altura*altura)).toFixed(1)

    return imc
}

function initImc(){
    //o '+' transforma o valor do input para number
    const altura= +txtAlt.value.replace(',','.')
    const peso= +txtPeso.value.replace(',','.')

    if(!altura || !peso )return


    const imc=calcImc(peso,altura)
    
    let info

    dataImc.forEach((item)=>{
        if (imc >= item.min && imc<=item.max) {
            info= item.description
        }
    })

    result.textContent=`olá ${nome.value} ${info}`
}



//eventos
btnCalc.addEventListener('click', initImc)
