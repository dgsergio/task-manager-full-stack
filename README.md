# Task Manager API

This is a full-stack application that allows managing daily tasks. You can visit a live version at the following link:
https://steady-moonbeam-9fd1e7.netlify.app/

## MERN stack

- MongoDB
- Express.js
- ReactJS
- Node.js

## Front

For this application, the Vite build tool was used to leverage the ReactJS library with TypeScript.

To manage the state across all components, the Redux Toolkit dependency was utilized. CRUD functions were applied by integrating the corresponding API of this stack.

Styles were applied using the concept of CSS modules to limit their scope to each component, achieving a fully responsive website.

Finally, the application was hosted on the publicly available Netlify platform.

## Back

The API was constructed using node.js and express.js, strategically employing their capabilities to create a powerful backend infrastructure.

MongoDB Atlas in the cloud was selected for its intuitive collection management, enhancing data organization and efficiency. The Mongoose.js library was employed to establish the connection between MongoDB and Node.js.

The JWT token system was implemented to maintain user sessions and enable authorized access to the database-stored data and passwords were securely hashed using bcryptjs, ensuring their storage in the database with robust protection.

Subsequently, the application was seamlessly deployed on Cyclic's servers, establishing a dependable online presence and facilitating seamless integration with the frontend components of this technology stack.
