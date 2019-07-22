import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default ({ children }) => (
    <Container maxWidth="md">
        <Box>
            <Box my={5}>
                <Typography align="center" variant="h3" component="h1" gutterBottom>
                    Next.js + ImportDoc
                </Typography>
            </Box>
            {children}
        </Box>
    </Container>
)