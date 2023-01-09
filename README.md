This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Explanation

In this simple app, the purpose was to practice the concepts of file-based routing one of the core features of NextJs: index routes, nested routes, dynamic route segments and linking to dynamic paths.

So the first page is your home page , where you see a list of "featured events"
![home](https://user-images.githubusercontent.com/84020433/211227848-ab1be4e4-e435-406e-a709-14fdf666dbfa.PNG)

You can navigate to the page of each selected item, by clicking in the "Explore event" button and see the event details:
![event_item](https://user-images.githubusercontent.com/84020433/211227897-31c50179-a113-4bf1-8f86-48f70aa22ab7.PNG)

Or you can click in "Browse All Events" option in the top bar, so you can see all of the events and some filter controls to filter the list:
![all_events](https://user-images.githubusercontent.com/84020433/211227951-1d1f60d5-fac4-47de-9b2b-80d720668582.PNG)

If you filter by year 2021 and month may, you will get the list of events for that date:
![filtered_events_may](https://user-images.githubusercontent.com/84020433/211227988-0c2ef938-529c-428f-940d-7e584c8b0112.PNG)

And the are some error screens for events not found as well as invalid filter values:
![no_events_found](https://user-images.githubusercontent.com/84020433/211228024-da07dff2-d6f9-4294-9fa7-602ccd2e1e5d.PNG)
![invalid_filter](https://user-images.githubusercontent.com/84020433/211228029-0b52b2be-cc7f-4fe4-9a3d-bfb23ce0435f.PNG)
