import { Context, createContext } from 'react'

type AppContextProps = { 
    themeName: string; 
    setThemeName: (themeName:string) => void 
}

const AppContext: Context<AppContextProps> = createContext({
    themeName: 'light',
    setThemeName: (_) => {}
})

export const { Provider: AppProvider, Consumer: AppConsumer } = AppContext
export default AppContext