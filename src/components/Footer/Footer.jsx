import {Container} from "@mui/material"
import {Grid} from "@mui/material"
import {Box} from "@mui/material"
import {Link} from "react-router-dom"

function Footer() {
    return (
        <Box px={{ xs:3, sm:10}} py={{xs: 5, sm:10}} bgcolor="#747249" color="white">
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Help</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Contact
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Support
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Privacy
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Account</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Login
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Register
                            </Link>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={1}>Messages</Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Backup
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                History
                            </Link>
                        </Box>
                        <Box>
                            <Link to="/" color="inherit" underline="none" className='defLinks'>
                                Roll
                            </Link>
                        </Box>
                    </Grid>
                </Grid>
                <Box textAlign="center" pt={{xs: 5, sm:10}} pb={{xs: 5, sm:0}}>
                    CoderReact By Nicolás Lerner - Not Lipe. &reg; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>
    );
}

export default Footer;