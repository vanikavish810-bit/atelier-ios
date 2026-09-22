import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.atelier.wardrobe',
  appName: 'Atelier',
  webDir: 'www',
  server: {
    url: 'https://enchanting-pithivier-14be52.netlify.app',
    cleartext: false
  },
  ios: {
    contentInset: 'automatic'
  }
};

export default config;
