import { Button } from '../components/ui/button'
import { Link } from 'react-router'

const NotFound = () => {
  return (
    <div className='flex justify-center items-center h-180 flex-col'>
      <h1 className='text-8xl font-black text-red-800 mb-5'>Oooops!</h1>
      <p className='text-2xl font-bold mt-3 mb-6'>404 - PAGE NOT FOUND</p>
      <p className='text-gray-500 mb-4'>The page you are looking for might have been removed had its name changed or is temporairly unavailable</p>
      <Link to="/">
        <Button size='lg'>Go To Homepage</Button>
      </Link>
    </div>
  )
}

export default NotFound
