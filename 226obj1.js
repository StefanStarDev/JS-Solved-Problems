function solve(input){

    let obj = {}

    for (let i = 0; i < input.length; i++) {
        let length = input[i].length
        let name = input[i]
        obj['Name'] = name
        obj['Personal Number'] = length
        //console.log(obj);
        console.log(`Name: ${name} -- Personal Number: ${length}`);
        
        
        
    }
   

}

solve([ 'Silas Butler',
'Adnaan Buckley',
'Juan Peterson',
'Brendan Villarreal' ]
    )