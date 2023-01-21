import { getSession } from 'next-auth/react';
import CreateEventForm from '../components/events/create-event';

function CreateEventPage() {
  return (
    <CreateEventForm />
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)
  if(!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props: { session }
  }
}

export default CreateEventPage
