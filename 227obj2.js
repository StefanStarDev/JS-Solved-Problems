function solve(firstName,lastName,age){

    let obj = {}

    obj['firstName'] = firstName
    obj['lastName'] = lastName
    obj['age'] = age

    let entriesObj = Object.entries(obj)
   
    for (const [key, value] of entriesObj) {

        console.log(`${key}: ${value}`)
        
    }
    





}

solve("Peter", 
"Pan",
"20"
)