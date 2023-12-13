# Notes App 📝

The Notes App is a productivity tool designed to help users keep track of their to-do lists and daily tasks in an organized and efficient manner. This application aims to improve productivity by enabling users to create and manage their notes effectively.
![3](https://raw.githubusercontent.com/Unknownfanzh/Note-app-MERN2.0/main/thumbnail/project4screenshot.gif)

- Author: Fan Zhou & Tianjing(Jill) Liu
- Design Doc: https://docs.google.com/document/d/1cpVYljGOf2etDlA2ntcTCGRyWmyNYsirmWUuaHKzMBA/edit?usp=sharing
- Prensentation slides: https://docs.google.com/presentation/d/1Wdpv4H9BMJ5Q-NDZ-RW-QdqRm7l7d_twfPBeIYZ-_UI/edit?usp=sharing
- Video walkthrough: https://youtu.be/c6mJK_Axtb0
- For extra credit(Redis caching demo video): https://youtu.be/e3APOu0BBME
- Wireframe: https://www.figma.com/file/nCSx5wPr0r9YSlrsKdWJeH/Untitled?type=design&node-id=0%3A1&mode=design&t=sdfAv3Z2CGkbDQjJ-1
- A project from course CS5610: https://johnguerra.co/classes/webDevelopment_fall_2023/
- Deployed here: https://note-app-2-0.onrender.com
- Fan's Home page: https://unknownfanzh.github.io/Personal_homepage/
- Tianjing's Home page: https://jjjing2023.github.io/

## Features

- **User Authentication**:
  - Login and Logout
  - Secure password hashing
- **Note Management**:
  - Create new Notes with title, description and auto-generated date
  - Update existing notes
  - Delete unwanted notes
- **Interactive UI**:
  - View all notes in a visually appealing format
  - Edit and delete buttons for each individual note

## Features2.0 (New Release)

- **Reversed Displaying Order**:
  - Displaying the most recent notes at the forefront
  - Reposition the editing area to precede saved notes
- **Scalability**:
  - Using Redis for cache to improve overall application performance
- **Accessibility**:
  - Full accessibility for screen readers and comprehensive keyboard navigation
  - Implement placeholders to enhance usability, providing users with visual cues
- **Visual Optimization**:
  - Typography and color palette
  - Redesign layout to ensure alignment and proximity principles

## Technologies Used

### Frontend:

- **React, Vite**: Core building blocks for the web application.
- **Bootstrap**: Framework used for designing responsive and mobile-first UI.

### Backend:

- **Node.js**: JavaScript runtime used for server-side logic.
- **Express**: Web application framework for building APIs in Node.js.
- **MongoDB**: NoSQL database for storing user and post data.

### Authentication:

- **bcrypt**: Library for hashing and checking passwords, enhancing security.
- **password.js**: A JavaScript library for handling and validating user passwords, including strength checking and hashing.

### Other:

- **Fetch API**: Used for making requests to the backend.
- **Local Storage**: Utilized for storing user authentication tokens and other pertinent data client-side.
- **Redis**: Implement Redis to cache data, reducing the load on the MongoDB database and improving overall application performance.

## Rationale Behind Design

### Typography:

- **Poiret One&Montserrat**: Poiret One is known for its geometric form and stylized Art Deco appearance. It can serve well for headings and titles due to its distinctive and decorative nature. Montserrat, on the other hand, is clean, contemporary, and highly readable. It is a great choice for body text as it ensures excellent readability on digital screens. It also pairs well with Poiret One, providing a nice contrast between the decorative headings and the straightforward nature of body text. Together, these fonts can establish a visual hierarchy that both engages users and directs them effortlessly through the content, creating a seamless user experience.

### Color Palette:

![color palette](https://github.com/Unknownfanzh/Note-app-MERN2.0/blob/J_branch/thumbnail/AdobeColor-My%20Color%20Blind%20Safe%20Theme.jpeg)

- **summary**: Theme extracted from a scenery photo capturing beautiful California sunset using Adobe Color. The color palette is designed to be visually appealing, consistent, and accessible.

- **Color Harmony**: The color palette consists of a balanced combination of cool and warm tones. The deep blue (#5077C6) serves as the primary color, complemented by a subdued teal (#354040) for contrast. The warm tones, such as the peachy (#F2C1B6) and pastel blue (#7A98BF), add vibrancy without overwhelming the overall harmony.

- **Contrast and Readability**: The dark teal (#354040) provides a high contrast background against which text and content can be easily readable. This ensures good readability, a crucial aspect of accessibility.

- **Accessibility**: The color palette aims to be inclusive by incorporating a diverse set of colors. The lighter pastel blue (#7A98BF) and pale peach (#F2C1B6) is used for highlighting important elements or interactive components, enhancing accessibility for users with visual impairments.

- **Consistency**: The color palette maintains consistency by adopting a coherent set of tones. This consistency creates a unified visual identity across the design, making it aesthetically pleasing and easier for users to navigate and understand.

## Getting Started 🚀

### Prerequisites 📋

Ensure you have Node.js installed on your machine.

Ensure you have a Mongo server running on localhost: 27017, or configured in the `MONGO_URI` environment variable.

## Configuration 🛠️

Ensure you have a .env file in the root directory with the following content:

```
MONGODB_URL = mongodb+srv://<username>:<password>@cluster0.iwjxwdy.mongodb.net/?retryWrites=true&w=majority
```

### Installation

1. Clone the repository:

```
git clone https://github.com/Unknownfanzh/Note-app-MERN.git
```

2. Navigate into the directory:

```
cd
```

3. Install the required dependencies:

```
npm install
```

4. Install redis server

```
brew install redis-server

```

5. Start redis server

```
redis_server
```

6. Start the server:

```
npm start
```

this will start the backend server, running on http://localhost:3000

## Deployment

The website is hosted using render and can be accessed at https://note-app-2-0.onrender.com

## License

Distributed under the MIT License. See `LICENSE` for more information.
