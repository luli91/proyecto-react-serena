import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Flex, Box, Spacer, Image
} from '@chakra-ui/react'
import myImage from '../assets/img/logoSerena.png'

const NavBar = () => {
    return (
        <div className="nav">
            <Flex>
                <Box p='4'>
                <div>
                    <Image className="logoSerena" src={myImage} alt='logo serena' />
                </div>
                </Box>
                <Spacer />
                <Box p='8'>
                    <Menu>
                        <MenuButton className="botonMenu">
                        Categorias
                        </MenuButton>
                        <MenuList>
                            <MenuItem className ="items">Nueva temporada '23</MenuItem>
                            <MenuItem className ="items">invierno</MenuItem>
                            <MenuItem className ="items">verano</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
            </Flex>
        </div>
    )
}

export default NavBar
