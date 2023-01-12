import EventList from "../components/events/event-list"
import { getFeaturedEvents } from "../helpers/api-utils"

export default function Home(props) {

  return (
    <div>
      <EventList events={ props.featuredEvents } />
    </div>
    
  )
}

export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      featuredEvents
    },
    revalidate: 1800
  }
}
