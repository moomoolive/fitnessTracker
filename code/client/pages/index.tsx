import { FC } from 'react'
import Link from 'next/link'

import AppContainer from "@/components/appContainer/main"

const LoginPage: FC = () => {

    return (
        <AppContainer>
            <div>
                Welcome to Next.js!
                <div>
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