import '../styles/globals.css';
import ThemeToggleButton from '../components/ThemeToggleButton';

export default function Home() {
  return (
    <div className='bg-background'>
      <h1 className='text-foreground'>Welcome to the Home Page</h1>
      <ThemeToggleButton />
    </div>
  );
}
