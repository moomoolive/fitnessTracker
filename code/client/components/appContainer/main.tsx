import { FC, useState, useEffect } from 'react'
import Head from 'next/head'

import { styles, IProps } from './styles.jss'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { useLoading, Audio } from '@agney/react-loading'
import  { Collapse } from 'react-collapse'

import { ThemeContext, themes } from '@/contexts/theme.js'

const AppContainer: FC<IProps> = ({ children, classes }) => {
    const [showMainContent, toggleMainContent] = useState(false)
    const [theme, setTheme] = useState(themes.alternate)
    const value = { theme, setTheme }

    useEffect(() => {
        const milliseconds = 3_000
        window.setTimeout(() => toggleMainContent(true), milliseconds)
    }, [])

    const MainBody: FC = () => {
        return (
            <ThemeContext.Provider value={ value }>
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
            </ThemeContext.Provider>
        )
    }

    const LoadingScreen: FC = () => {
        const { containerProps, indicatorEl } = useLoading({
            loading: true,
            indicator: <Audio width="50" />,
        })

        return (
            <Collapse isOpened={ !showMainContent }>
                <div className={ classes.loadingScreen }>
                    <div>
                        <section {...containerProps}>
                            {indicatorEl}
                        </section>
                    </div>
                </div>
            </Collapse>
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
            <div>
                { showMainContent ? MainBody() : LoadingScreen() }
            </div>
        </div>
    )
}

export default withStyles(styles)(AppContainer)