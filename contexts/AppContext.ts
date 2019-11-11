import { Context, createContext } from 'react'

const AppContext: Context<{ themeName: string }> = createContext({
    themeName: 'light'
})

export const { Provider: AppProvider, Consumer: AppConsumer } = AppContext
export default AppContext