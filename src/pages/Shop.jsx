import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Pagination from '../components/Pagination'

const Shop = () => {
  return (
    <div className=' pt-[200px] pb-[40px]'>
      <Container className={'max-w-headerContainer'}>
        <Flex>
          <div className='w-3/12'>
            Shop by Category
          </div>
          <div className='w-9/12'>
            <Pagination itemsPerPage={12} />
          </div>
        </Flex>
      </Container>
    </div>
  )
}

export default Shop