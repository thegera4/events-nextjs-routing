import EventList from "../components/events/event-list"
import { getFeaturedEvents } from "../helpers/api-utils"
import NewsletterRegistration from "../components/input/newsletter-registration"
import Head from 'next/head'

export default function Home(props) {
  return (
    <div>
      <Head>  
        <title>NextJS Events</title>
        <meta 
          name="description" 
          content="Find a lot of great events that allow you to evolve..." 
        />
      </Head>
      <NewsletterRegistration />
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
    revalidate: 600
  }
}
