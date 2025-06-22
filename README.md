# 🌾 AgriSupply Dashboard

A modern, responsive fertilizer supply chain analytics dashboard built with React. Monitor fertilizer requirements, availability, and supply gaps across different states and time periods with interactive charts and comprehensive data tables.

![Dashboard Preview](https://via.placeholder.com/800x400/0f766e/ffffff?text=AgriSupply+Dashboard)

## ✨ Features

### 📊 **Analytics Dashboard**
- **Interactive Charts**: Line charts, bar charts, and pie charts for data visualization
- **Supply Trend Analysis**: Monthly trends showing requirements vs availability
- **Top Products**: Visual representation of most required and least available fertilizers
- **Category Distribution**: Pie charts showing fertilizer category breakdowns
- **State-wise Analysis**: Detailed breakdown by geographical regions

### 📋 **Product Management**
- **Advanced Data Table**: Sortable columns with pagination
- **Smart Filtering**: Search by product name, state, or category
- **Real-time Search**: Instant filtering as you type
- **Export Functionality**: Download data for offline analysis
- **Responsive Design**: Works seamlessly on all devices

### 🎨 **Modern UI/UX**
- **Clean Interface**: Modern design with smooth animations
- **Responsive Layout**: Mobile-first design approach
- **Interactive Elements**: Hover effects and smooth transitions
- **Professional Styling**: Gradient backgrounds and modern shadows
- **Accessible Components**: ARIA labels and keyboard navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/agrisupply-dashboard.git
   cd agrisupply-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Start the development server**
   \`\`\`bash
   npm start
   # or
   yarn start
   \`\`\`

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📁 Project Structure

\`\`\`
src/
├── Components/           # Reusable UI components
│   ├── Bigchart/        # Large comparison charts
│   ├── Chart/           # Small analytical charts
│   ├── Featured/        # Dashboard overview component
│   ├── Piechart/        # Pie chart components
│   ├── Sidebar/         # Navigation sidebar
│   └── Topbar/          # Header navigation
├── Pages/               # Main application pages
│   ├── Home/            # Analytics dashboard page
│   └── ProductList/     # Product management page
├── data/                # Static data and mock APIs
│   └── fertilizerData.js
├── App.js               # Main application component
└── index.js             # Application entry point
\`\`\`

## 🛠️ Built With

### **Core Technologies**
- **React 18** - Modern React with hooks and functional components
- **React Router v6** - Client-side routing with latest syntax
- **Recharts** - Responsive chart library for React
- **Lucide React** - Modern icon library

### **Styling & UI**
- **CSS3** - Modern CSS with Grid, Flexbox, and custom properties
- **CSS Modules** - Component-scoped styling
- **Responsive Design** - Mobile-first approach

### **Development Tools**
- **Create React App** - Zero-configuration setup
- **ES6+** - Modern JavaScript features
- **JSX** - React's syntax extension

## 📊 Data Structure

The application uses a comprehensive fertilizer dataset with the following structure:

\`\`\`javascript
{
  id: 1,
  name: "Urea",
  state: "Punjab",
  requirement: 15000,
  availability: 12000,
  month: "January",
  category: "Nitrogen",
  price: 266
}
\`\`\`

### **Data Fields**
- `id`: Unique identifier
- `name`: Fertilizer product name
- `state`: Indian state/region
- `requirement`: Required quantity in metric tons
- `availability`: Available quantity in metric tons
- `month`: Time period
- `category`: Fertilizer category (Nitrogen, Phosphate, etc.)
- `price`: Price per 50kg bag in INR

## 🎯 Key Features Explained

### **Dashboard Analytics**
- **Supply Gap Analysis**: Automatically calculates shortage/surplus
- **Trend Visualization**: Monthly comparison charts
- **Geographic Distribution**: State-wise data breakdown
- **Category Insights**: Product type distribution

### **Interactive Filtering**
- **Real-time Search**: Instant results as you type
- **Multi-level Filtering**: State, category, and text-based filters
- **Smart Sorting**: Click column headers to sort data
- **Pagination**: Efficient data loading with page controls

### **Responsive Design**
- **Mobile Optimized**: Touch-friendly interface
- **Tablet Support**: Optimized layouts for medium screens
- **Desktop Enhanced**: Full feature set on large screens

## 🔧 Customization

### **Adding New Charts**
\`\`\`javascript
// Create a new chart component
import { BarChart, Bar, XAxis, YAxis } from 'recharts'

function CustomChart({ data }) {
  return (
    <BarChart data={data}>
      <XAxis dataKey="name" />
      <YAxis />
      <Bar dataKey="value" fill="#0f766e" />
    </BarChart>
  )
}
\`\`\`

### **Modifying Data Source**
Update the data source in `src/data/fertilizerData.js` or connect to an API:

\`\`\`javascript
// For API integration
useEffect(() => {
  fetch('/api/fertilizer-data')
    .then(response => response.json())
    .then(data => setFertilizerData(data))
}, [])
\`\`\`

### **Styling Customization**
Modify CSS custom properties for theme changes:

\`\`\`css
:root {
  --primary-color: #0f766e;
  --secondary-color: #065f46;
  --background-color: #f8fafc;
  --text-color: #1f2937;
}
\`\`\`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### **Build for Production**
\`\`\`bash
npm run build
# or
yarn build
\`\`\`

### **Deploy to Vercel**
\`\`\`bash
npm install -g vercel
vercel --prod
\`\`\`

### **Deploy to Netlify**
\`\`\`bash
npm run build
# Upload the build folder to Netlify
\`\`\`

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
4. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
5. **Open a Pull Request**

## 📋 Roadmap

- [ ] **Dark Mode Toggle** - Theme switching functionality
- [ ] **Data Export** - CSV/Excel export capabilities
- [ ] **Real-time Updates** - WebSocket integration for live data
- [ ] **User Authentication** - Login/logout functionality
- [ ] **Advanced Filtering** - Date range and complex filters
- [ ] **API Integration** - Connect to backend services
- [ ] **Offline Support** - PWA capabilities
- [ ] **Data Visualization** - More chart types and interactions

## 🐛 Known Issues

- Chart responsiveness on very small screens (< 320px)
- Large dataset performance with 1000+ records
- Print styling needs optimization

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Initial work* - [YourGitHub](https://github.com/kundanyadav88)

## 🙏 Acknowledgments

- **Recharts** - For excellent charting capabilities
- **Lucide** - For beautiful, consistent icons
- **React Team** - For the amazing framework
- **Create React App** - For the development setup

## 📞 Support

If you have any questions or need help with setup, please:

1. Check the [Issues](https://github.com/yourusername/agrisupply-dashboard/issues) page
2. Create a new issue with detailed description
3. Contact: kundankumar97779@gmail.com

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

Made with ❤️ for the agricultural community

</div>
\`\`\`

This README.md provides:

✅ **Comprehensive Overview** - Clear description of features and capabilities
✅ **Easy Setup Instructions** - Step-by-step installation guide
✅ **Project Structure** - Detailed file organization
✅ **Technology Stack** - All dependencies and tools used
✅ **Customization Guide** - How to modify and extend the application
✅ **Deployment Instructions** - Multiple deployment options
✅ **Contributing Guidelines** - How others can contribute
✅ **Professional Formatting** - Clean, readable structure with emojis and badges
✅ **Future Roadmap** - Planned features and improvements

The README is designed to help developers quickly understand, set up, and contribute to your modern fertilizer dashboard project! 🚀