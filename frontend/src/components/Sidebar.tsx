import { createPortal } from 'react-dom'
// Types
import { SidebarProps } from '../types/Types.ts'
// Styles
import '../styles/components/Sidebar.css'
import Button from './Button.tsx'

const Sidebar = ({ openedState }: SidebarProps) => {
    // Menu Opened State
    const [opened, setOpened] = openedState

    return createPortal(
        <div
            className='sidebar-container'
            style={{
                display: opened ? 'flex' : 'none',
            }}
        >
            <div
                className='sidebar-black-screen'
                onClick={() => setOpened(false)}
            ></div>
            <div className='sidebar'>
                <div className='top'>top</div>
                <div className='bottom'>
                    <Button
                        type='link'
                        to='/login'
                        onClick={() => setOpened(false)}
                    >
                        Login
                    </Button>
                    <Button
                        type='link'
                        to='/signup'
                        onClick={() => setOpened(false)}
                    >
                        Signup
                    </Button>
                </div>
            </div>
        </div>,
        document.body
    )
}

export default Sidebar
