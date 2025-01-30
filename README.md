<div align="center">

# TryRedirect - Browser Redirect Simulation Tool

[![Next.js](https://img.shields.io/badge/Next.js-14.1.3-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

🔄 A powerful tool for testing and simulating browser redirects

[View Demo](https://www.tryredirect.net/) | [Report Bug](https://github.com/vohuynh19/redirect-browser-test/issues) | [Request Feature](https://github.com/vohuynh19/redirect-browser-test/issues)

</div>

## 🎯 About The Project

TryRedirect is a comprehensive web application designed to help client-side developers test and simulate various browser redirect scenarios. Whether you're implementing authentication flows, payment redirects, or complex navigation patterns, this tool provides a safe and controlled environment for testing different redirect methods.

### ✨ Key Features

- 🕒 **Delayed Redirects**: Test redirects with customizable timing delays
- 🔄 **Multiple Redirect Types**: Support for both client-side and server-side redirects
- 📊 **Visual Feedback**: Beautiful UI with countdown and progress indicators
- 🛠️ **Developer-Friendly**: Easy-to-use interface with detailed redirect information
- 🔒 **Safe Testing Environment**: Test redirects without affecting production systems

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/redirect-browser-test.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a local environment file
```bash
cp .env.example .env.local
```

### 🏃‍♂️ Running Locally

1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser

The application will be running in development mode with hot-reload enabled. Any changes you make to the source files will automatically refresh the browser.

## 📖 Usage Examples

### Basic Redirect
```typescript
// Example of using the redirect API
const response = await fetch('/api/redirect?url=https://example.com&redirectDelay=5');
```

### Testing Different Scenarios
- Immediate redirects
- Delayed redirects with countdown
- Server-side processing simulation
- Error handling and fallback redirects

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - The React framework for production
- [TypeScript](https://www.typescriptlang.org/) - For type-safe code
- [Tailwind CSS](https://tailwindcss.com/) - For styling
- [Framer Motion](https://www.framer.com/motion/) - For animations

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
