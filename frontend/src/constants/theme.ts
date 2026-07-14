export const theme = {
  colors: {
    primary: '#4CAF50', // EmoP (Potato/Plant) main green
    primaryLight: '#81C784',
    primaryDark: '#388E3C',
    secondary: '#FFC107', // Warm, emotional accent
    background: '#F5F5F5',
    surface: '#FFFFFF',
    text: '#212121',
    textSecondary: '#757575',
    border: '#E0E0E0',
    error: '#F44336',
    success: '#4CAF50',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 40,
  },
  typography: {
    sizes: {
      h1: 32,
      h2: 24,
      h3: 20,
      body: 16,
      caption: 14,
      small: 12,
    },
    weights: {
      regular: '400' as const,
      medium: '500' as const,
      bold: '700' as const,
    },
  },
  borderRadius: {
    sm: 4,
    md: 8,
    lg: 16,
    xl: 24,
    round: 9999,
  },
};
