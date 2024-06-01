import React from 'react'
import { useDispatch } from 'react-redux'
import { setFilter } from '../redux/todoSlice';

const FilterOptions = () => {

    const dispatch = useDispatch();

    return (
        <div className='filter-container'>

            <select name="status" id="status" onChange={(e) => dispatch(setFilter(e.target.value))} className='filter-select' defaultValue='all' >
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="complete">Complete</option>
            </select>

        </div>
    )
}

export default FilterOptions