// interface/index.tsx
// Importing the interfaces of the components
// OBJECTIVE IS: the single source of truth for your application's data shapes, 
// making it easier to find, reuse, and modify types.


// Remember here, we need to use the export to make sure we can import them later
// Button interface
export interface ButtonProps {
    buttonLabel: string
    buttonSize?: string
    buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green'
    action?: () => void
  }
  

// Layout interface
export interface LayoutProps {
  children: React.ReactNode;
}
