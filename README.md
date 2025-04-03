# Point of Sale System with AI Assistant

A modern, web-first Point of Sale (POS) system built with Expo Router and Supabase, featuring an AI-powered business assistant.

## 🚀 Features

- 📱 Cross-platform (Web, iOS, Android) using Expo
- 🎯 Tab-based navigation with Expo Router
- 🌓 Dark/Light theme support
- 🌐 Internationalization (i18n) support
- 🤖 AI-powered business assistant
- 🔄 Real-time updates with Supabase
- 🎨 Beautiful UI with glass morphism effects
- 📊 Business analytics and reporting
- 👥 Client management
- 📦 Inventory tracking
- 💳 Multiple payment methods

## 🛠 Tech Stack

### Frontend
- **Framework**: React Native + Expo SDK 52
- **Navigation**: Expo Router 4.0.17
- **State Management**: Zustand
- **Animations**: React Native Reanimated
- **Icons**: Lucide React Native
- **Styling**: React Native StyleSheet
- **Internationalization**: i18next
- **Theme**: Custom theme provider with dark mode support

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Real-time**: Supabase Realtime
- **Edge Functions**: Supabase Edge Functions
- **AI Integration**: OpenAI GPT-4

## 📦 Dependencies

```json
{
  "dependencies": {
    "@expo/vector-icons": "^14.0.2",
    "@lucide/lab": "^0.1.2",
    "@react-native-async-storage/async-storage": "^1.21.0",
    "i18next": "^23.10.1",
    "react-i18next": "^14.1.0",
    "@supabase/supabase-js": "^2.39.7",
    "@react-navigation/bottom-tabs": "^7.2.0",
    "@react-navigation/native": "^7.0.14",
    "expo": "52.0.33",
    "expo-blur": "^14.0.3",
    "expo-constants": "^17.0.5",
    "expo-font": "^13.0.3",
    "expo-haptics": "^14.0.1",
    "expo-linear-gradient": "^14.0.2",
    "expo-linking": "^7.0.5",
    "expo-router": "4.0.17",
    "expo-splash-screen": "^0.29.21",
    "expo-status-bar": "^2.0.1",
    "expo-symbols": "^0.2.2",
    "expo-system-ui": "^4.0.7",
    "expo-web-browser": "^14.0.2",
    "lucide-react-native": "^0.475.0",
    "moti": "^0.28.1",
    "react-native-reanimated": "^3.16.7",
    "react-native-gesture-handler": "^2.23.0",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "^4.4.0",
    "react-native-svg": "^15.11.1",
    "react-native-url-polyfill": "^2.0.0",
    "zustand": "^4.4.1"
  }
}
```

## 🗄️ Database Schema

### Tables

1. **products**
   - id (uuid, PK)
   - vendor_id (uuid, FK)
   - name (text)
   - description (text)
   - price (numeric)
   - stock (integer)
   - category (text)
   - created_at (timestamp)
   - updated_at (timestamp)

2. **clients**
   - id (uuid, PK)
   - vendor_id (uuid, FK)
   - name (text)
   - email (text)
   - phone (text)
   - total_purchases (numeric)
   - created_at (timestamp)
   - updated_at (timestamp)

3. **transactions**
   - id (uuid, PK)
   - vendor_id (uuid, FK)
   - client_id (uuid, FK)
   - total_amount (numeric)
   - created_at (timestamp)

4. **transaction_items**
   - id (uuid, PK)
   - transaction_id (uuid, FK)
   - product_id (uuid, FK)
   - quantity (integer)
   - price_at_time (numeric)
   - created_at (timestamp)

5. **messages**
   - id (uuid, PK)
   - vendor_id (uuid, FK)
   - content (text)
   - role (text)
   - created_at (timestamp)

## 🤖 AI Assistant Configuration

The AI assistant uses OpenAI's GPT-4 model with the following settings:

```typescript
{
  model: 'gpt-4',
  temperature: 0.7,
  max_tokens: 1000,
  top_p: 0.9,
  frequency_penalty: 0.5,
  presence_penalty: 0.5
}
```

### Assistant Capabilities
- Sales analysis
- Inventory management
- Client insights
- Business recommendations
- Marketing suggestions
- Real-time metrics analysis

## 🔐 Environment Variables

Required environment variables:

```bash
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_OPENAI_API_KEY=your_openai_api_key
```

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Fill in your Supabase and OpenAI credentials

4. Start the development server:
   ```bash
   npm run dev
   ```

## 📱 Platform Support

The app is designed to work on:
- Web (primary platform)
- iOS (through Expo)
- Android (through Expo)

### Web-specific Features
- Responsive design
- Keyboard shortcuts
- Desktop-optimized layouts
- Browser notifications

## 🔄 Real-time Updates

The app uses Supabase's real-time subscriptions for:
- Inventory changes
- New transactions
- Client updates
- Chat messages

## 🌍 Internationalization

Currently supports:
- Spanish (es-MX) - Default

## 🛡️ Security Features

- Row Level Security (RLS) policies
- JWT-based authentication
- Rate limiting for AI requests
- Daily message limits
- Secure environment variable handling

## 🎨 UI Components

Custom components include:
- GlassCard: Glass morphism effect container
- AuroraBackground: Animated gradient background
- ChatBot: AI assistant interface
- SyncIndicator: Real-time sync status

## 📈 Performance Optimizations

- Lazy loading of routes
- Optimized real-time subscriptions
- Efficient state management
- Memoized components
- Debounced search inputs
- Pagination for large datasets

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

MIT License - see LICENSE.md for details