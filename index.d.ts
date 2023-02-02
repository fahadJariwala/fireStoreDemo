import { AppNavigationProps } from './src/navigation/AppNavigation';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AppNavigationProps {}
  }
}
