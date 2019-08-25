function solve(input) {

    let budget = +input.shift()
    let students = +input.shift()
    let priceFlour = +input.shift()
    let priceEgg = +input.shift()
    let priceApron = +input.shift()
    let counter = 0


    for (let i = 1; i <= students; i++) {
        if(i % 5 === 0){
            counter++
        }
        
    }

    let cost = priceApron * Math.ceil((students + 0.2*students)) + priceEgg * 10 * students + priceFlour * (students - counter )

    
    let diff = Math.abs(budget - cost)

    if(budget >= cost){
        console.log(`Items purchased for ${cost.toFixed(2)}$.`);
        
    }else{
        console.log(`${diff.toFixed(2)}$ more needed.`);
        
    }



}

solve(['50', '2', '1.0', '0.10', '10.0'])