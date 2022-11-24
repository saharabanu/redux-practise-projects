import { COLORCHANGED, STATUSCHANGED } from "./filtersActionsType"


//  color action function  
export const colorChanged = (color, changeType) => {
    return{
        type:COLORCHANGED,
        payload:{
            color,
            changeType
        }
        
    }
};

//  status changed action function  
export const statusChanged = (status) => {
    return{
        type:STATUSCHANGED,
        payload: {
            status
        }
        
    }
}