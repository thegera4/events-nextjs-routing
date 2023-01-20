import Link from 'next/link'
import { useSession } from 'next-auth/react'
import classes from './main-header.module.css'

function MainHeader() {
  const { data: session, status } = useSession()
  
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href='/'>NextEvents</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href='/events'>Browse All Events</Link>
          </li>
          {
            status === 'authenticated' ? (
              <li>
                <Link href='/create-event'>Create Event</Link>
              </li>
            ) : (
              <li>
                <Link href='/login'>Login</Link>
              </li>
            )
          }
          
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader