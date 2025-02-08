import { Link } from 'react-router-dom'
import PageNav from '../components/PageNav'

export default function Homepage() {
  return (
    <div>
      <PageNav/>
      <h2 className='test'>World Wise</h2>

      <Link to="/app">Go to app</Link>
    </div>
  )
}
