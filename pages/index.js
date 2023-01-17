import Layout from '../components/Layouts/mainLayout'
import HomeBanner from '../components/Pages/Home/Banner'
import HeroBg from '../components/Pages/Home/HeroBg'
import ProductGrid from '../components/Pages/Home/ProductGrid'
import RichTextContent from '../components/Pages/Home/RichTextContent'

export default function Home() {
  return (
    <>
      <HomeBanner/>
      <ProductGrid/>
      <RichTextContent/>
      <HeroBg/>
    </>
  )
}


Home.getLayout = (page)=>{
  return(
    <Layout meta={{
      title: 'Ecommerce',
      description: 'Homepage'
    }}>
      {page}
    </Layout>
  )
}
