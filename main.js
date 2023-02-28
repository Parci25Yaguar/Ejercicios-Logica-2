class Ejercicios_sin_ciclos{
    Ejercicio1(num1,num2){
        console.warn("/1) Sumar dos numeros siempre cuando el primero sea mayor al segundo/")
        let sum=0
        if (num1>num2){
            sum=num1+num2
            console.log(`${num1} + ${num2} = ${sum}`)
        }else{
            console.log(`No se puede realizar la suma ya que el primer numero es menor al segundo numero`)
        }
        
    }
    Ejercicio2(num1,num2){
        console.warn("/2) Realizar una operacion segun el operador(+,-,*,/,%) realizar la suma, resta, multiplicacion, division y residuo/")  
        let suma=0,resta=0,multiplicacion,division,residuo
        let opsuma="+",oprest="-",opmulti="*",opdiv="/",opresi="%"
        suma=num1+num2
        resta=num1-num2
        multiplicacion=num1*num2
        division=num1/num2
        residuo=num1%num2
        console.log(num1,opsuma,num2,"=",suma)
        console.log(num1,oprest,num2,"=",resta)
        console.log(num1,opmulti,num2,"=",multiplicacion)
        console.log(num1,opdiv,num2,"=",division)
        console.log(num1,opresi,num2,"=",residuo)
    }
    Ejercicio3(num1,num2){
        console.warn("/3) Presentar el mayor de dos numeros/")
    if (num1>num2){
        console.log(`El numero <${num1}> es mayo que el numero <${num2}>`)
    }else if(num1<num2){
        console.log(`El numero <${num2}> es mayor que el numero <${num1}>`)
    }else{
        console.log(`El numero <${num2}> y el numero <${num1}> son iguales`)
    }
    }
    Ejercicio4(){
        console.warn("/4) Dado un nombre presentarlo/")
        let nombre="Jeremy"
        console.log(nombre)
    }
    Ejercicio5(valor){
        console.warn("/5) Dado un valor de compra presentar el total considerando un 12% de iva/")
        let total=0,valortotal
        total=valor*0.12
        valortotal=total+valor
        console.log(`El valor es <${valor}$>; El iva es <${total}$>; El total a pagar con el 12% IVA es ${valortotal}$`)
    }
    Ejercicio6(){
        console.warn("/6) Presentar 5 veces un nombre/")
        let nombre="Jeremy",c=1
        while(c<=5){
            console.log(nombre)
            c=c+1
        }
        
    }
    Ejercicio7(){
        console.warn("/7) Presentar los numeros multiplos de 3 del 3 al 21/")
        let c=3,multiplos
        for(c=3;c<=21;c++){
            multiplos=c%3
            if(multiplos==0){
                console.log(`El <${c}> es multiplo de 3`)
            }
        }
    }
    Ejercicio8(){
        console.warn("/8) Presentar los numeros multiplos de 3 del 21 al 3/")
        let c=21,multiplos
        for(c=21;c>=3;c--){
            multiplos=c%3
            if(multiplos==0){
                console.log(`El <${c}> es multiplo de 3`)
            }
        }
    }

    Ejercicio9(){
        console.warn("/9) Dados dos nombres indicar si son iguales o diferentes/")
        let nombre1="JeRemy",nombre2="Jeremy"
        console.log(nombre1)
        console.log(nombre2)
        nombre1=nombre1.toLowerCase()
        nombre2=nombre2.toLowerCase()
        if (nombre1==nombre2){
            console.log(`Los nombres son iguales`)
        }else{
            console.log(`Los nombres no son iguales`)
        }
    }
}
let num1=Math.floor(Math.random()*10)
let num2=Math.floor(Math.random()*10)