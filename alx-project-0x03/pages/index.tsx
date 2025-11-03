// 1. Import the custom Layout component from components directory.
// The refactoring step is to import custom <Layout> component 
// and wrap the page content with it to apply the shared header and footer.

import Layout from '../components/layouts/Layout';

const Home = () => {
    return (
     <Layout>
        <div>
                  <h1> Welcome to Splash App </h1>
        </div>

     </Layout>)
  }
  
  export default Home;