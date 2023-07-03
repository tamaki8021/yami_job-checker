import { createBrowserRouter } from 'react-router-dom';
import Root from './Root';

const router = createBrowserRouter([{ path: '*', Component: Root }], {
  basename: process.env.PUBLIC_URL,
});

export default router;
