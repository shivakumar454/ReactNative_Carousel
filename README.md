## 📱 Carousel Component (React Native)

This project includes a simple and responsive **Carousel (Slider)** built using React Native. The carousel allows users to swipe horizontally through a list of views, and updates the index dynamically based on the current slide.

### 🔧 Features

- Uses **FlatList** with `horizontal` scrolling and `pagingEnabled` for smooth swipe behavior.
- Tracks and updates the current active index using `useState` and `onScroll` events.
- Adapts to any screen size using `Dimensions.get('screen')`.
- Encapsulated in a `SafeAreaView` to ensure proper rendering across devices.
- Custom styling with centered text and colored views for better UI clarity.

### 📚 Concepts Demonstrated

- React Native functional components
- State management using `useState`
- Horizontal scrolling with `FlatList`
- Scroll position tracking using `event.nativeEvent.contentOffset.x`
- Dynamic and responsive layout
- Use of `SafeAreaView` for layout safety

 

### 🚀 Getting Started

```bash
npm install
npx react-native run-android # or run-ios
