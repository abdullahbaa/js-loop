// // Odd numbers
for(let i= 0; i<20; i++){
    if(i%2==1){
        console.log(i);
    }
}
// // Odd numbers another way
for(let i= 0; i<20; i++){
    if(i%2 !==0){
        console.log(i);
    }
}
// // Odd numbers another way
for(let i= 1; i < 20; i+=2){
   
        console.log(i);
    }
//     // Give me the list numbers between 1 to 30 Divisible by 5
    for(let i=1 ; i<=30; i++){
        if(i%5===0){
            console.log(i)
        }
    }
//     // Give me the list numbers between 1 to 30 Divisible by 3
    for(let i=1 ; i<=30; i++){
        if(i%3 ===0){
            console.log(i)
        }
    }
//     // Give me the list numbers between 1 to 30 Divisible by 3 and 5
    for(let i=1 ; i<=30; i++){
        if(i%3 ===0 || i %5 ===0){
            console.log(i)
        }
    }
//     // Give me the list numbers between 1 to 30 Divisible by 3 and 5
    for(let i=1 ; i<=30; i++){
        if(i%3 ===0 && i %5 ===0){
            console.log(i)
        }
    }
    // Give me the sum of the numbers from 1 to 20 that are divisible by 3
    let total =0;
    for(let i=1 ; i<=20; i++){
        if(i%3 ===0){
            console.log(i)
            total= total +i;
            console.log('total',total);
        }
    }
// Even numbers
for(let i= 0; i<20; i++){
    if(i%2 ==0){
        console.log(i);
    }
}