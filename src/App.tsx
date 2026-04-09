import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ColorModeSwitch from "./components/ColorModeSwitch";

function App() {
 return <Grid templateAreas={`"nav nav" "aside main"`}> Nav
 <GridItem area='nav' > Nav
    <NavBar></NavBar>
    <ColorModeSwitch></ColorModeSwitch>
 </GridItem>
 <Show above = "lg">
 <GridItem area='aside'> Aside</GridItem>
 </Show>
 <GridItem area='main'> Main</GridItem>

 </Grid>
}

export default App
