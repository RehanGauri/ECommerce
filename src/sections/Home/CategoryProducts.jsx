import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import CategoryCards from '../../components/CategoryCards'

const CategoryProducts = () => {
  return (
    <div className=' py-13 '>
        <SectionHeader heading1={"Shop by"} heading2={"Products"} subHeading={"Handpicked by our style experts"} />
        <CategoryCards  />
    </div>
  )
}

export default CategoryProducts