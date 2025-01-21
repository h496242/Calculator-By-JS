const valueGet = (e:string) => {
    console.log(e); 
    let input:any = document.getElementById('input')
    input.value += e
}
const calculateValue = () => {
    let input:any = document.getElementById('input')
    let checkVal:string = input.value
    // console.log(checkVal);
    
    if(checkVal){
       let allValuesArr = [] 
       for(var i = 0; i < checkVal.length; i++){
           allValuesArr.push(checkVal[i])
       }
       let arrFv = allValuesArr[0];           
       let arrLv = allValuesArr[allValuesArr.length - 1];     
       console.log( "FirstValue ==>" + arrFv);
       console.log( "lastValue ==>"  + arrLv);
      
       if(              // this Condition for ===> Agr user Start || End  ma number ki jga (+ - /) koi be operator use kre ga to show this alert
        (arrFv === '+' || arrFv === '-' || arrFv === '/') ||
        (arrLv === '+' || arrLv === '-' || arrLv === '/')
        )
        {
         alert('Not Calculate Operation')
         input.value = ''
       }
       else{
         let input:any = document.getElementById('input')
         let calcu = eval(input.value)
         input.value = calcu
       }
       
    }
    else{
        alert('Insert a value')
    }
    // let cV:number  =  eval(input.value)
    // input.value = cV
}
const clearAll = () => {
    let input:any = document.getElementById('input')
    input.value = ''
    console.log(input.value);
}