import { FC, useState, useEffect } from 'react'

import requestHelpers from "@/libraries/IO/requests/main"

import { testRequestReturn } from "@/libraries/IO/requests/interfaces"

/* 
This is the entry point of the app into the real DOM  
*/
const HomePage: FC = () => {
    const [serverRes, setServerRes] = useState("no request yet")

    // one time effect hooks
    useEffect(() => {
        const func = async (): Promise<void> => {
            const res: testRequestReturn = await requestHelpers.testRequest()
            setServerRes(res.name)
        }
        func()
    }, [])

    return ( 
        <div>
            Welcome to Next.js!
            <div>
                { serverRes }
            </div>
        </div>
    )
}

export default HomePage