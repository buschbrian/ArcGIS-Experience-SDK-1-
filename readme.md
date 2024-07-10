# AGOL Experience Builder

This repository contains the setup for an ArcGIS Online (AGOL) Experience Builder project. It includes custom widgets, themes, and configurations necessary to run the Experience Builder application.

## Files and Directories

- **index.html**: The main HTML file that sets up the Experience Builder environment.
- **service-worker.js**: JavaScript file for handling service workers.
- **web.config**: Configuration file for the web server.
- **.gitattributes**: Git attributes file to manage repository settings.

## Getting Started

To get started with this project, follow the instructions below.

### Prerequisites

- Node.js (version 12.x or higher)
- npm (Node Package Manager)
- ArcGIS Online account with access to Experience Builder

### Installation

1. **Clone the repository**:
   ```sh
   git clone https://github.com/buschbrian/ArcGIS-Experience-SDK-1-.git
   cd ArcGIS-Experience-SDK-1-
   ```
  Install dependencies:

  ```sh
  npm install
  ```
  Run the development server:

  ```sh
  npm start
  ```
  This will start a development server and open the Experience Builder in your default web browser.

### Building for Production

  To build the project for production, run:

  ```sh
  npm run build
  ```
  This will create a dist directory with the production build of your Experience Builder application.

### Deploying

 To deploy your application, you can upload the contents of the dist directory to your web server or hosting service.

## Custom Widgets

  You can add custom widgets to your Experience Builder project. These widgets are located in the cdn directory. Modify and extend them according to your requirements.

## Configuration

  The project includes various configuration files to manage the environment and settings:

  - **index.html**: Contains the basic HTML structure and includes scripts to load the Experience Builder.
  - **service-worker.js**: Manages caching and offline capabilities.
  - **web.config**: Configuration settings for the web server.

## Development

During development, you can make changes to the widgets and themes in the cdn directory. The development server will automatically reload to reflect your changes.
