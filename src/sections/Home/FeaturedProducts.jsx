import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ProductCard from '../../components/ProductCard'

const FeaturedProducts = ({ featuredProducts }) => {
  return (
    <div className="bg-main-bg py-10 sm:py-12 lg:py-13">

      <SectionHeader 
        heading1={"Featured"} 
        heading2={"Products"} 
        subHeading={"Handpicked by our style experts"} 
      />

      <div className="
        mt-6 sm:mt-8
        flex gap-4 sm:gap-6 lg:gap-8
        px-3 sm:px-0
        overflow-x-auto lg:overflow-x-hidden
        flex-nowrap
        scroll-smooth
      ">
        {featuredProducts.map((product) => (
          <div key={product.id} className="min-w-55 sm:min-w-65 lg:min-w-0">
            <ProductCard productData={product} />
          </div>
        ))}
      </div>

    </div>
  )
}

export default FeaturedProducts