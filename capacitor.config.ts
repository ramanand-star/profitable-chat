import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.profitable_chart.android',
  appName: 'profitable-chart',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
