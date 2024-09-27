import React from 'react'
import FilterOirigin from './filter-origin'

type FiltersControlsCategoryProps={
  setFilterOrigin: (origin: string) => void
}

const FilterControlsCategory = (props:FiltersControlsCategoryProps) => {
  const {setFilterOrigin} = props

  return (
    <div className='sm:w-[350px] sm:mt-5 p-6'>
        <FilterOirigin setFilterOrigin={setFilterOrigin}></FilterOirigin>
    </div>
  )
}

export default FilterControlsCategory