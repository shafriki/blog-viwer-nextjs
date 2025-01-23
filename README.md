# Blog Viewer Application

A simple blog viewer application built with **Next.js** to demonstrate routing, server and client components, dynamic routes, authentication, and data fetching. This application allows users to view blog posts and navigate through detailed pages. Additionally, it includes a protected profile page secured using **Kinde Auth**.

## Features

1. **Home Page**:
   - Displays a list of blog post titles fetched from the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts).
   - Each blog title links to its respective detailed page.

2. **Blog Details Page**:
   - Dynamically generated page using the `/blog/[id]` route.
   - Fetches and displays blog details based on the `id` in the URL.

3. **Protected Profile Page**:
   - A static route (`/profile`) that displays a personalized welcome message.
   - Secured using **Kinde Auth**. Redirects unauthenticated users to the login page.

4. **Authentication**:
   - **Login**: Redirects users to the Kinde Auth login page.
   - **Logout**: Logs users out of the application.
   - Dynamic button rendering based on authentication status.

5. **Navigation**:
   - A responsive header with links to "Home" and "Profile."
   - Login/Logout button displayed dynamically.

6. **Styling**:
   - Clean and responsive design using **Tailwind CSS**.


