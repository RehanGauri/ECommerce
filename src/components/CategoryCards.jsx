import React from 'react'
import CategoryCard from './CategoryCard'

const CategoryCards = () => {
  const CategoryProducts = [
    { name: "Apparels",        products: 410, imgUrl: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=600&q=80" },
    { name: "Women's Fashion", products: 320, imgUrl: "https://5.imimg.com/data5/EI/RS/UL/SELLER-51767320/party-wear-western-dress.jpg" },
    { name: "Men's Style",     products: 280, imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg23IpmVFhLj4OCsUJsYpBtHe5WZ2UlcVRufaZIkmmdg&s" },
    { name: "Accessories",     products: 150, imgUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" },
    { name: "Footwear",        products: 190, imgUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80" },
    { name: "Bags",            products: 90,  imgUrl: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80" },
  ]

  const [first, ...rest] = CategoryProducts

  return (
    <div className='py-10 ml-2'>

      {/* Desktop */}
      <div
        className='hidden lg:grid gap-4'
        style={{
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'repeat(3, 300px) 180px',
        }}
      >

        <div style={{ gridRow: 'span 3' }}>
          <CategoryCard categoryData={first} isFirst={true} isLast={true} />
        </div>


        {rest.slice(0, 4).map((category, index) => (
          <CategoryCard key={index} categoryData={category} isFirst={false} isLast={true} />
        ))}

        <div style={{ gridColumn: 'span 2 ' }}> 
          <CategoryCard categoryData={rest[4]} isFirst={false} isLast={true} />
        </div>
      </div>

      {/* Mobile + tablet equal heights */}
      <div className='grid lg:hidden grid-cols-2 gap-4'>
        {CategoryProducts.map((category, index) => (
          <CategoryCard key={index} categoryData={category} isFirst={false} />
        ))}
      </div>

    </div>
  )
}

export default CategoryCards