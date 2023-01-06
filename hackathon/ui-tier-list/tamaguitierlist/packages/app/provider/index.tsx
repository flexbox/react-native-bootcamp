import config from '../tamagui.config'
import { NavigationProvider } from './navigation'
import { TamaguiProvider, TamaguiProviderProps } from '@my/ui'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  return (
    <TamaguiProvider config={config} disableInjectCSS defaultTheme="light" {...rest}>
      <SafeAreaProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </SafeAreaProvider>
    </TamaguiProvider>
  )
}
