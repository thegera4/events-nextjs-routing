import React from 'react'
import { getAllEvents } from '../../helpers/api-utils'
import EventList from '../../components/events/event-list'
import EventsSearch from '../../components/events/event-search'
import { useRouter } from 'next/router'
import Head from 'next/head'

function AllEventsPage(props) {
  const { events } = props
  const router = useRouter()

  function findEventsHandler(year, month) {
    router.push(`/events/${year}/${month}`)
  }

  return (
    <div>
      <Head>  
        <title>AllEvents</title>
        <meta 
          name="description" 
          content="Find a lot of great events that allow you to evolve..." 
        />
      </Head>
      <EventsSearch onSearch={ findEventsHandler } />
      <EventList events={events} />
    </div>
  )
}

export async function getStaticProps() {
  const events = await getAllEvents()

  return {
    props: {
      events
    },
    revalidate: 60
  }

}

export default AllEventsPage