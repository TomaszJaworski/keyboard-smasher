import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './theme/globalStyle';
import { themeStyle } from './theme/themeStyle';
import { KeyboardContainer } from './components/Keyboard';
import { BoxContainer } from './components/Boxes/BoxContainer';
import { TextEditor } from './components/TextEditor';
import { AppContainer } from './components/AppContainer';
import { ConfigurationButtons } from './components/Configuration/ConfigurationButtons';

export default function App() {
    return (
        <ThemeProvider theme={themeStyle}>
            <AppContainer>
                <GlobalStyle />

                <ConfigurationButtons />
                <TextEditor />
                <BoxContainer />
                <KeyboardContainer />
            </AppContainer>
        </ThemeProvider>
    );
}
