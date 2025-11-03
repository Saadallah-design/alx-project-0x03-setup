// custom.d.ts

// This declares that any file imported with a .css extension
// is a valid module. This is necessary because Next.js handles 
// CSS imports via its build process, but TypeScript needs
// to be told to ignore the content for type checking purposes.
declare module '*.css' {
    // We can treat it as a string or an empty object,
    // but this simple declaration is usually enough to silence the error.
    const content: any;
    export default content;
  }