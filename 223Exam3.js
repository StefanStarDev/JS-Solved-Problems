function solve(input) {
    let houseNumbers = input.shift().split("@").map(Number);
    let command = input.shift();
    let santasPosition = 0;
    let hasFailed = false;
    let countHouses = 0;
    while (command !== 'Merry Xmas!') {
        let jumpLength = Number(command.split(" ")[1]);
        santasPosition += jumpLength;
        if (santasPosition >= houseNumbers.length) {
            santasPosition = santasPosition % houseNumbers.length;
        }
        if (houseNumbers[santasPosition] <= 0) {
            console.log(`House ${santasPosition} will have a Merry Christmas.`);
        } else {
            houseNumbers[santasPosition] -= 2
        }
        command = input.shift();
    }
    console.log(`Santa's last position was ${santasPosition}.`);
    for (let house of houseNumbers) {
        if (house > 0) {
            hasFailed = true;
            countHouses++;
        }
    }
    if (hasFailed) {
        console.log(`Santa has failed ${countHouses} houses.`);
    }else{
        console.log("Mission was successful.");
    }
}

solve([ '2@4@2',
'Jump 2',
'Jump 2',
'Jump 8',
'Jump 3',
'Jump 1',
'Merry Xmas!' ]
    )