import C from './Action_Constant';
import english from '../languages/english.json';
import chinese from '../languages/chinese.json';
import spanish from '../languages/spanish.json';
import russian from '../languages/russian.json';

const reducer = (state=english, action) => {
    switch(action.type){
        case C.RUSSIAN:
        console.log('click')
            return russian;
        case C.SPANISH:
            return spanish;
        case C.CHINESE:
            return chinese;
        case C.ENGLISH:
            return english;
        default: 
            return state;
    }
}

export default reducer;