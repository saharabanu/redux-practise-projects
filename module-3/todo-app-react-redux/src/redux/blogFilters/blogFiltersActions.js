import { FILTERBYCATEGORY, FILTERBYNAME, FILTERBYSEARCH } from "./blogFilterActionType"



export const filterByCategory = (category) => {
    return{
        type:FILTERBYCATEGORY,
        payload:{
            category
        }
    }
}


export const filterByName = (name) => {
    return{
        type: FILTERBYNAME,
        payload:{
            name
        }
    }
}

export const filterBySearch = (search) => {
    return{
        type:FILTERBYSEARCH,
        payload:{
            search
        }
    }
}