import Link from 'next/link'
import { signOut, useSession } from 'next-auth/react'
import classes from './main-header.module.css'
import Button from '../ui/button'

function MainHeader() {
  const { data: session, status } = useSession()

  function logoutHandler(){
    signOut()
  }
  
  console.log('%c hello user!: ', 'color: green', session)
  
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
            session ? (
              <li>
                <Link href='/create-event'>Create Event</Link>
              </li>
            ) : (
              <li>
                <Link href='/login'>Login</Link>
              </li>
            )
          }
          {
            session && 
            <li>
              <Button onClick={logoutHandler}>Logout</Button>
            </li>
          } 
        </ul>
      </nav>
    </header>
  )
}

export default MainHeader