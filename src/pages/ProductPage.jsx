import { useParams } from 'react-router-dom'
import ProductDetail from '../components/ProductDetail'
import { getProductBySlug } from '../data/products'

const ProductPage = () => {
  const { slug } = useParams()
  const product = getProductBySlug(slug)

  return <ProductDetail product={product} />
}

export default ProductPage
