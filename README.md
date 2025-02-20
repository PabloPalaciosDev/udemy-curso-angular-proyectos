# GIF Search App

A modern Angular application that allows users to search and display GIFs using the GIPHY API. This project demonstrates the implementation of key Angular concepts including components, services, modules, and HTTP client integration.

## Features

- Real-time GIF search functionality
- Responsive grid layout for GIF display
- Search history sidebar
- Local storage persistence of search history
- Pagination and limit controls

## Tech Stack

- Angular 19.1.0
- TypeScript
- RxJS
- GIPHY API
- CSS3 with modern layout techniques

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (latest LTS version)
- npm (comes with Node.js)
- Angular CLI (`npm install -g @angular/cli`)

## Setup and Installation

1. Clone the repository

2. Install dependencies:
```bash
npm install
```

3. Create a GIPHY API key:
   - Visit [GIPHY Developers](https://developers.giphy.com/)
   - Create an account and get your API key
   - Replace the API key in `src/app/gifs/services/gif.service.ts`

4. Start the development server:
```bash
ng serve -o
```

5. Open your browser and navigate to `http://localhost:4200`

## Project Structure

```
gif-app/
├── src/
│   ├── app/
│   │   ├── gifs/
│   │   │   ├── components/
│   │   │   ├── interfaces/
│   │   │   ├── pages/
│   │   │   └── services/
│   │   └── shared/
│   │       └── components/
│   ├── assets/
│   └── environments/
```

## Key Components

- **GifSearchBoxComponent**: Handles user input for GIF searches
- **CardListGifComponent**: Displays GIFs in a responsive grid
- **SidebarComponent**: Shows search history and allows quick access to previous searches
- **GifService**: Manages API communication and state

## Available Scripts

- `ng serve`: Starts development server
- `ng build`: Builds the project
- `ng test`: Runs unit tests
- `ng lint`: Lints project files
- `ng e2e`: Runs end-to-end tests

## Styling

The application uses modern CSS features including:
- CSS Grid for responsive layouts
- Flexbox for component positioning
- CSS Variables for theme consistency
- Media queries for responsiveness

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
