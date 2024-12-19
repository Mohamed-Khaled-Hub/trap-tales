// Functions
import { getFromAssets } from '../functions/Functions.ts'
// Hooks
import { useTheme } from '../hooks/Hooks.ts'
// Components
import Button from './Button.tsx'
// Styles
import '../styles/components/FavoriteButton.css'

const FavoriteButton = () => {
    // Current Theme
    const theme = useTheme()

    return (
        <Button
            type='button'
            className='favorite-button'
            onClick={() => {
                console.log(`Didn't make favorite functionality yet`)
            }}
        >
            <img
                src={getFromAssets(`svg/${theme}/FAVORITE.svg`)}
                alt='Add to Favorite'
            />
        </Button>
    )
}

export default FavoriteButton
