import { screen, render } from '@testing-library/react';
import Home from '../components/Home';



describe('Tests for Home component', () => {
    it('renders image on screen', () => {
        render(< Home />);
        const image = screen.getByTestId('mainHomeImage');
        expect(image).toBeInTheDocument();
    })
})