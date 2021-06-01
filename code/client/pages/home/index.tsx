import { FC } from 'react'
import Link from 'next/link'

const Home: FC = () => {
    return (
        <div>
            hello
            <div>
                <Link href="/">
                    To login
                </Link>
            </div>
        </div>
    )
}

export default Home