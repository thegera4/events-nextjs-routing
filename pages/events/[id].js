import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '../../dummy-data'
import EventSummary from '../../components/event-detail/event-summary'
import EventLogistics from '../../components/event-detail/event-logistics'
import EventContent from '../../components/event-detail/event-content'
import ErrorAlert from '../../components/ui/error-alert'

function SelectedEventPage() {
  const router = useRouter()
  const { id } = router.query

  const event = getEventById(id)
  
  if(!event) {
    return <ErrorAlert><p>No event found!</p></ErrorAlert>
  }

 console.log(event)
  return (
    <>
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
    </>
  )
}

export default SelectedEventPage