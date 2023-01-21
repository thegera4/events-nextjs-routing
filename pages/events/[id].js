import React from 'react'
import { getEventById, getFeaturedEvents } from '../../helpers/api-utils'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import Comments from '../../components/input/comments'
import Head from 'next/head'

function SelectedEventPage(props) {
  const event = props.selectedEvent
  
  if(!event) {
    return <div className='center'><p>Loading...</p></div>
  }

  return (
    <>
      <Head>  
        <title>{event.title}</title>
        <meta 
          name="description" 
          content={event.description} 
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics 
        date={event.date} 
        address={event.location} 
        image={event.image} 
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event._id} />
    </>
  )
}

export async function getStaticProps(context) {
  const eventId = context.params.id
  const event = await getEventById(eventId)
  return {
    props: {
      selectedEvent: event
    },
    revalidate: 30
  }
}
export async function getStaticPaths() {
  const events = await getFeaturedEvents()
  const paths = events.map(event => ({ params: { id: event._id } }))
  return {
    paths,
    fallback: 'blocking'
  }
}

export default SelectedEventPage

