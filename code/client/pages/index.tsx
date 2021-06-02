import { FC, useContext } from 'react'
import Link from 'next/link'

import AppContainer from "@/components/appContainer/main"

import { ThemeContext } from '@/contexts/theme.js'

const LoginPage: FC = () => {
    const { theme } = useContext(ThemeContext)

    // eslint-disable-next-line
    console.log("theme", theme)

    return (
        <AppContainer>
            <div>
                <div style={ { color: theme.red } }>
                    Welcome to Next.js!
                </div>
                <button>
                    Add themeCoolloor
                </button>
                <div>
                    { theme.darkGrey }
                </div>
                <div>
                    <Link href="/home">
                        to Home
                    </Link>
                </div>
            </div>
        </AppContainer> 
    )
}

export default LoginPage