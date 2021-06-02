import { FC, useState, useEffect } from 'react'
import Head from 'next/head'

import { styles, IProps } from './styles.jss'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useLoading, Audio } from '@agney/react-loading';

const AppContainer: FC<IProps> = ({ children, classes }) => {
    const [showMainContent, toggleMainContent] = useState(false)

    useEffect(() => {
        const milliseconds = 3_000
        window.setTimeout(() => toggleMainContent(true), milliseconds)
    }, [])

    const MainBody: FC = () => {
        return (
            <div className={ classes.app }>

                <div className={ classes.header }>
                    <div className={ classes["header-content"] }>
                        <FontAwesomeIcon className={ classes['header-logo'] } icon={ faHeart } />
                    </div>
                </div>
                
                <div className={ `${classes["main-section"]} ${classes["body-content"]}` }>
                    { children }
                </div>
                
                <div className={ `${classes["main-section"]} ${classes["footer"]}` }>
                    Footer
                </div>

            </div>
        )
    }

    const LoadingScreen: FC = () => {
        const { containerProps, indicatorEl } = useLoading({
            loading: true,
            indicator: <Audio width="50" />,
        })

        return (
            <div className={ classes.loadingScreen }>
                <div>
                    <section {...containerProps}>
                        {indicatorEl}
                    </section>
                </div>
            </div>
        )
    }

    return (
        <div>
            <Head>
                <link 
                    rel="preconnect" 
                    href="https://fonts.gstatic.com"
                    key="preconnect-font"
                />
                <link 
                    href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@300&display=swap" 
                    rel="stylesheet"
                    key="stylesheet-font"
                />
            </Head>
            { showMainContent ? MainBody() : LoadingScreen() }
        </div>
    )
}

export default withStyles(styles)(AppContainer)