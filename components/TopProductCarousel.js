import React, { useEffect } from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTopProducts } from '../redux/actions/productsActions'

const TopProductCarousel = () => {
    const dispatch = useDispatch()
    const topProducts = useSelector((state) => state.topProducts.products)
    useEffect(() => {
        dispatch(fetchTopProducts())
    }, [dispatch])

    return (
        <Carousel pause='hover' className='border border-4 bg-dark'
            style={{ height: '400px', marginTop: '2px' }}>
            {topProducts?.map((product) => (
                <Carousel.Item key={product._id}>
                    <Image rounded style={{ height: '400px', width: '100%' }}
                        src={`https://storemernapp.herokuapp.com/${product.image}`} alt={product.name} fluid />
                    <Carousel.Caption className='carousel-caption'>
                        <h2>
                            {product.name} (${product.price})
                        </h2>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default TopProductCarousel