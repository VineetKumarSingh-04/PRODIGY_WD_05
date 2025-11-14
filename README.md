# Weather App 🌤️

A simple and interactive weather application that provides real-time weather updates for any city worldwide or your current location.

## Features ✨

- 🌍 **Global Weather Data**: Get weather information for any city around the world
- 📍 **Auto-location Detection**: Automatically fetch weather for your current location
- 🎨 **Dynamic Backgrounds**: Background changes based on weather conditions
- 📊 **Detailed Information**: View temperature, humidity, wind speed, and weather conditions
- 💨 **Real-time Updates**: Fetches live data from OpenWeatherMap API

## Prerequisites 📋

Before running this application, make sure you have:

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)
- Internet connection (to fetch weather data from API)
- A local web server (optional, but recommended for best results)

## How to Run the Weather App 🚀

### Method 1: Direct File Opening (Simple)

1. **Navigate to the project folder**
   ```bash
   cd "Weather App"
   ```

2. **Open the HTML file directly**
   - Simply double-click on `index.html` file
   - OR right-click on `index.html` and select "Open with" → Your preferred browser

### Method 2: Using a Local Web Server (Recommended)

Running through a local server is recommended as it provides better security and functionality, especially for geolocation features.

#### Option A: Using Python (if installed)

**For Python 3.x:**
```bash
cd "Weather App"
python -m http.server 8000
```

**For Python 2.x:**
```bash
cd "Weather App"
python -m SimpleHTTPServer 8000
```

Then open your browser and navigate to: `http://localhost:8000`

#### Option B: Using Node.js (if installed)

1. Install http-server globally (one-time setup):
   ```bash
   npm install -g http-server
   ```

2. Run the server:
   ```bash
   cd "Weather App"
   http-server -p 8000
   ```

Then open your browser and navigate to: `http://localhost:8000`

#### Option C: Using VS Code Live Server Extension

1. Open the project folder in Visual Studio Code
2. Install the "Live Server" extension if not already installed
3. Right-click on `index.html`
4. Select "Open with Live Server"

## Usage Instructions 📖

1. **On First Load**:
   - The app will request permission to access your location
   - If you allow, it will automatically display weather for your current location
   - If you deny, you can manually enter a city name

2. **Manual City Search**:
   - Type a city name in the input field
   - Click the "Get Weather" button
   - The weather information will be displayed

3. **Weather Information Displayed**:
   - Weather icon
   - City name
   - Temperature (in Celsius)
   - Weather condition description
   - Humidity percentage
   - Wind speed (in m/s)

## API Key Information 🔑

This application uses the OpenWeatherMap API. The API key is already included in the code (`script.js`). However, if you need to use your own API key:

1. Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/api)
2. Generate your API key
3. Replace the `apiKey` value in `script.js`:
   ```javascript
   const apiKey = 'YOUR_API_KEY_HERE';
   ```

## Project Structure 📁

```
Weather App/
│
├── index.html      # Main HTML file
├── style.css       # Stylesheet for the app
└── script.js       # JavaScript functionality
```

## Weather-based Background Colors 🎨

The app changes background colors based on weather conditions:
- ☀️ **Clear**: Orange to red gradient
- ☁️ **Clouds**: Gray gradient
- 🌧️ **Rain**: Blue gradient
- ❄️ **Snow**: Light gray gradient
- ⛈️ **Thunderstorm**: Dark gray to black gradient
- 🌫️ **Default**: Dark blue gradient

## Troubleshooting 🔧

### Location Access Issues
- **Problem**: Browser doesn't ask for location permission
- **Solution**: Check your browser's location settings and ensure location services are enabled

### City Not Found Error
- **Problem**: "City not found" message appears
- **Solution**: 
  - Check the spelling of the city name
  - Try using the full city name
  - Include country code for better results (e.g., "London,UK")

### API Errors
- **Problem**: Unable to fetch weather data
- **Solution**: 
  - Check your internet connection
  - Verify the API key is valid
  - Ensure you haven't exceeded the API rate limit (60 calls/minute for free tier)

### CORS Errors (when opening file directly)
- **Problem**: CORS policy blocks requests
- **Solution**: Use one of the local server methods described above instead of opening the HTML file directly

## Browser Compatibility 🌐

This application works on all modern browsers that support:
- ES6 JavaScript (async/await)
- Fetch API
- Geolocation API

Tested on:
- ✅ Chrome/Edge (v80+)
- ✅ Firefox (v75+)
- ✅ Safari (v13+)
- ✅ Opera (v67+)

## Technologies Used 💻

- **HTML5**: Structure and markup
- **CSS3**: Styling and animations
- **JavaScript (ES6)**: Functionality and API integration
- **OpenWeatherMap API**: Weather data source

## License 📄

This project is open-source and available for educational purposes.

## Support 🤝

If you encounter any issues or have questions, please create an issue in the repository.

---

**Enjoy using the Weather App! 🌈**
