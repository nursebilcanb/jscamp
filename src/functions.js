function isPrime(number) {
    for (let i = 2; i < number; i++) {
        if(number % i == 0){
            return 0
        }              
    }
    return 1    
}

console.log("Asal sayilar!")
function findPrime(...numbers) {
    numbers.forEach(number => {
        if (number < 2) {
            console.log(number +" asal sayi degildir")
        }else if(number == 2){
            console.log(number +" asal sayidir")
        }else{
            let n = isPrime(number)            
            if (n == 0) {
                console.log(number +" asal sayi degildir")                
            }else{
                console.log(number +" asal sayidir")
            }
        }
    });    

}
findPrime(1,2,21,6,43,5,9,7,3)

console.log("1000'e kadar asal sayilar!")
function findPrimeNumbersTillThousand(){
    for (let i = 1; i < 1000; i++) {
        if (isPrime(i) == 1) {
            console.log(i + " asal sayidir")
        }
    }
}
findPrimeNumbersTillThousand()

console.log("Arkadas sayilar!")
function findFriendNumbers(number1, number2){

    let total1 = 0;
        for (let i = 1; i < number1; i++) {
            if (number1 % i == 0) {
                total1 += i
            }
        }

        let total2 =0;
        for (let i = 1; i < number2; i++) {
            if (number2 % i == 0) {
                total2 += i
            }
        }

        if (total1 == number2 && total2 == number1) {
            console.log(number1 + " ve "+ number2 + " " + "arkadas sayilardir")
        }
        else{
            console.log(number1 + " ve "+ number2 + " " + "arkadas sayilar degildir")

        }

}
findFriendNumbers(220,284)
console.log("Mukemmel sayilar!")
function findPerfectNumbers(){
    for (let i = 1; i < 1000 ; i++) {
    let sum = 0;
       for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum += j;
        }
       }
       if (sum == i) {
           console.log(i + " mukemmel sayidir")
       }
    }
}
findPerfectNumbers()