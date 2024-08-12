# AI Bot Interface

This project is a simple AI bot interface built with React, utilizing Framer Motion for animations and Tailwind CSS for styling. The interface includes a theme toggle button, a chat component with user and AI messages, and a custom toggle button.

## Features

- **AI Chat Interface**: Displays chat messages from the user and the AI with a responsive layout.
- **Theme Toggle**: A button that switches between light and dark modes with smooth animations.
- **Animated Toggle Button**: A custom toggle button built with Framer Motion for smooth transitions.
- **Responsive Design**: The interface is fully responsive, adapting to different screen sizes.

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Amanbig/Medical-chat-bot.git
   ``` 

2. **Navigate to the project directory**:
    ```bash
    cd Medical-chat-bot
    ```

3. **Install dependencies**:
    ```bash
    npm install
    ```

4. **Run the app**:
    ```bash
    npm run dev
    ```

## Connecting to backend

1. **Updating the backend endpoint and response in Component 'Userbar.jsx'**:

   ```javascript
    const handlePredict = async () => {
        try {
            const response = await axios.post('http://localhost:5000/predicts', { value }); // put the endpoint of the backend here 
            setChats(prevChats => [...prevChats, { value: response.data.prediction, from: 'ai' }]); //  a json reponse should be there  {'prediction':'value'} so response.data.prediction is written here accordingly update 
            console.log(response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };
   ``` 