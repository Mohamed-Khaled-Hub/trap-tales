import { useContext, useState } from 'react'
// Functions
import { getFromAssets } from '../functions/Functions.ts'
// Hooks
import { useTheme } from '../hooks/Hooks.ts'
// Contexts
import { WindowResizeContext, SiteInfoContext } from '../contexts/Contexts.ts'
// Components
import Button from './Button.tsx'
import SearchInput from './SearchInput.tsx'
import Sidebar from './Sidebar.tsx'
// Styles
import '../styles/components/Nav.css'

const Nav = () => {
    // SearchInput Input Value
    const [searchInputValue, setSearchInputValue] = useState<string>('')
    // Menu Opened State
    const [menuOpened, setMenuOpened] = useState<boolean>(false)
    // Site Info Context
    const siteInfo = useContext(SiteInfoContext)
    // Window Size Context
    const windowResized = useContext(WindowResizeContext)
    // Current Theme
    const theme = useTheme()

    return (
        <div className='nav'>
            <div className='left'>
                <SearchInput
                    searchQueryState={[searchInputValue, setSearchInputValue]}
                />
            </div>
            <div className='middle'>
                {windowResized && <div className='nav-square'></div>}
                <Button type='link' to={'/'} noBg={true} className='logo-link'>
                    {siteInfo.websiteName}
                </Button>
                {windowResized && (
                    <>
                        <div className='nav-square'>
                            <Button
                                type='button'
                                noBg={true}
                                onClick={() => setMenuOpened(true)}
                            >
                                <img
                                    className='svg-standard'
                                    src={getFromAssets(`svg/${theme}/MENU.svg`)}
                                    alt='Menu'
                                />
                            </Button>
                        </div>
                        <Sidebar openedState={[menuOpened, setMenuOpened]} />
                    </>
                )}
            </div>
            <div className='right'>
                {!windowResized && (
                    <>
                        <Button
                            type='link'
                            to='login'
                            className='login'
                            noBg={true}
                        >
                            Login
                        </Button>
                        <Button type='link' to='signup' className='signup'>
                            Signup
                        </Button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Nav
