import React from 'react'
import Heading from '../Button/Heading'
 import Card from '../Button/Card'
// import img1 from '../../assets/eggs..jpg'
// import img2 from '../../assets/fruits-and-veggies.png'

//import img3 from '../../fruits-and-veggies.png'

const Category = () => {
  return (
    <section className="py-12">
      
      <Heading head="Shop" text1="by" text2="Categories" />

      <div className="
  container mx-auto px-4
  grid gap-6
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
">

        {Categoriesdata.map((category) => (
          <Card
            key={category.id}
            title={category.title}
            description={category.description}
            //image={category.image}
          />
        ))}
      </div>

    </section>
  )
}

const Categoriesdata = [
  {
    id: 1,
    title: "Fruits",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nam? Facilis enim neque ex mollitia.",
    //image: https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop
  },
  {
    id: 2,
    title: "Vegetables",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nam? Facilis enim neque ex mollitia.",
   //image: https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop
  },
  {
    id: 3,
    title: "Nuts",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, nam? Facilis enim neque ex mollitia.",
    //image: https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&auto=format&fit=crop
  },
]

export default Category
