import { screen, render } from '@testing-library/react';
import Home from '../components/Home';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Resume from '../components/Resume';
import img from '../data/images/img.png';

describe('Tests for Home component', () => {
    it('renders image on screen', () => {
        render(<MemoryRouter>< Home img={img} /></MemoryRouter>);
        const image = screen.getByTestId('mainHomeImage');
        expect(image).toBeInTheDocument();
    });
});
describe('Test for Header', () => {
    it('should render header', () => {
        render(<MemoryRouter><Header /></MemoryRouter>);
        const header = screen.getByText(/aroosa/i);
        expect(header).toBeInTheDocument();
    });
});
describe('Test for footer', () => {
    it('should render footer', () => {
        render(<MemoryRouter><Footer /></MemoryRouter>);
        const footer = screen.getByText(/aroosa/i);
        expect(footer).toBeInTheDocument();
    });
});
describe('Tests for Resume component', () => {
    it('renders experience on screen', () => {
        render(<MemoryRouter><Resume /></MemoryRouter>);
        const info = screen.getByText(/experience/i);
        expect(info).toBeInTheDocument();
    });
});