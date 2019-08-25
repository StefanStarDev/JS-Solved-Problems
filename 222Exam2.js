function solve(input){

    let list = input.shift().split('&')
    let length = input.length

    for (let i = 0; i < length; i++) {
        
        let element = input.shift().split(' ')
        let command = element[0]
        let name = element[1]
        let isExist = list.indexOf(name)

        if(command === 'Bad'){
            if(isExist === -1){
                list.unshift(name)
            }
        }else if(command === 'Good'){
            if(isExist !== -1){
                list.splice(isExist,1)
            }
        }else if(command === 'Rename'){
            let name2 = element[2]
            if(isExist !== -1){
                list.splice(isExist, 1, name2)
            }
        }else if(command === 'Rearrange'){
            if(isExist !== -1){
                list.splice(isExist, 1)
                list.push(name)
            }
        }
        
        
    }

    console.log(list.join(', '))


}

solve([ 'Joshua&Aaron&Walt&Dustin&William',
'Good Walt',
'Bad Jon ',
'Rename Aaron Paul',
'Rearrange Jon',
'Rename Peter George',
'Finished!' ]
)