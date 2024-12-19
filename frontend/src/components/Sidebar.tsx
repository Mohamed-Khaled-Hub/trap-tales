import { createPortal } from 'react-dom'
// Types
import { SidebarProps } from '../types/Types.ts'
// Styles
import '../styles/components/Sidebar.css'

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
            <div className='sidebar'></div>
        </div>,
        document.body
    )
}

export default Sidebar
