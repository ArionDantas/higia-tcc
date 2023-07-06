import {returnC as c} from '../../services/api.js'
// const  = require('../../services/api.js')



asd = async ()=>{
    let a = await c.dog()
    if (a) {
        console.log(a);
    }
}

asd();
