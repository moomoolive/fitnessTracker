import { FC } from 'react'
import Head from 'next/head'

import { styles, IProps } from './styles.jss'
import withStyles from 'react-jss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const AppContainer: FC<IProps> = ({ children, classes }) => {
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
            <div className={ classes.app }>

                <div className={ classes.header }>
                    <div className={ classes["header-content"] }>
                        <FontAwesomeIcon size="1x" icon={ faHeart } />
                    </div>
                </div>
                
                <div className={ `${classes["main-section"]} ${classes["body-content"]}` }>
                    { children }
                </div>
                
                <div className={ `${classes["main-section"]} ${classes["footer"]}` }>
                    Footer
                </div>

            </div>
        </div>
    )
}

export default withStyles(styles)(AppContainer)