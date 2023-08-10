import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { Provider } from 'react-redux';
import { store } from '../store';

it('should render the main title', () => {
  render(
    <Provider store={store}>
      <Footer />
    </Provider>
  );
  const title = screen.getByRole('heading', { level: 1 });
  expect(title).toBeInTheDocument();
});
