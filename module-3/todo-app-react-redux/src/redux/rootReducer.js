import {combineReducers} from 'redux'
import blogReducer from './blog/blogReducer';
import blogFiltersReducer from './blogFilters/blogFiltersReducer';
import filtersReducer from './filters/filtersReducer'
import todosReducer from './todos/todosReducer'


const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer,
    blogs: blogReducer,
    // blogFilters: blogFiltersReducer

})
export default rootReducer;