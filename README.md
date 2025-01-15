## Demo

Check out the live application here: [PokeDex Live Demo](https://poke-dex-rho-blue.vercel.app)

# PokeDex

PokeDex is a web application that allows users to explore and learn detailed information about Pokémon. Built with React and Vite, this application is fast, responsive, and user-friendly.

## Features

- **Search Pokémon**: Search for Pokémon by their name or ID to view detailed information.
- **Pokémon Details**: Displays comprehensive information about each Pokémon, including:
  - **Type**: Primary and secondary types.
  - **Abilities**: Special abilities unique to each Pokémon.
  - **Base Stats**: Statistics such as HP, Attack, Defense, Speed, and more.
  - **Evolutions**: Evolution chain of the Pokémon.
- **Pagination**: Browse through the Pokémon database with smooth pagination.
- **Mobile Responsive Design**: Optimized layout for desktop, tablet, and mobile devices.
- **API Integration**: Fetches data from the PokéAPI for real-time information.

## How to Use

1. **Search Pokémon**: Use the search bar to find a Pokémon by its name or ID.
2. **View Details**: Click on a Pokémon card to see detailed information about it, including type, abilities, stats, and evolutions.
3. **Navigate Pages**: Use the navigation buttons to explore the complete Pokémon list.



## Getting Started

Follow these steps to set up the project locally:

### Prerequisites

- **Node.js** (v16 or later)
- **npm** (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhruv-gautam-dev/PokeDex.git
   ```

2. Navigate to the project directory:
   ```bash
   cd PokeDex
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

   The application will be accessible at `http://localhost:3000`.

### Build for Production

Generate optimized production files:
```bash
npm run build
```

The build files will be saved in the `dist` directory.

## Project Structure

```
PokeDex/
├── public/              # Static files and assets
├── src/                 # Source code
│   ├── components/      # Reusable React components
│   ├── assets/          # Static assets (e.g., images)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point for React
│   └── index.css        # Global styles
├── .gitignore           # Files to ignore in version control
├── package.json         # Project metadata and scripts
├── vite.config.js       # Vite configuration
└── README.md            # Project documentation
```

## Technologies Used

- **React**: For building user interfaces.
- **Vite**: A fast and modern frontend build tool.
- **CSS**: For styling components.
- **JavaScript**: For application logic.
- **PokéAPI**: External API for fetching Pokémon data.

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Add feature X"
   ```
4. Push to your fork:
   ```bash
   git push origin feature-branch
   ```
5. Open a Pull Request on the main repository.

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- **PokéAPI**: For providing Pokémon data.
- **Vercel**: For hosting the live demo.
- **Inspiration**: Pokémon, a franchise loved by millions worldwide.

---

Thank you for exploring PokeDex! Feel free to contribute, share feedback, or suggest new features.


