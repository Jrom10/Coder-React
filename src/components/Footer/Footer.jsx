import {Container} from "@mui/material"
import {Grid} from "@mui/material"
import {Box} from "@mui/material"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <Box px={{ xs:3, sm:10}} py={{xs: 5, sm:10}} bgcolor="text.secondary" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none">
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs: 5, sm:0}}>
                    Material UI By Sobrado Pibardo - Not MeCha. &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;