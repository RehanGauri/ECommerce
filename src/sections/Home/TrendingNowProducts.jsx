import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import ProductCard from '../../components/ProductCard'

const TrendingNowProducts = ({trendingProducts}) => {
  return (
    <div className='bg-main-bg py-13'>
        <SectionHeader heading1={"Trending"} heading2={"Now"} subHeading={"What everyone's buying this week"} />
        <div className="
        mt-6 sm:mt-8
        flex gap-4 sm:gap-6 lg:gap-8
        px-3 sm:px-0
        overflow-x-auto lg:overflow-x-hidden
        flex-nowrap
        scroll-smooth
      ">
        {trendingProducts.map((product) => (
          <div key={product.id} className="min-w-55 sm:min-w-65 lg:min-w-0">
            <ProductCard productData={product} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default TrendingNowProducts