import About from '@/components/Homepage/About';
import Contact from '@/components/Homepage/Contact';
import Hero from '@/components/Homepage/Hero';
import Pizzacard from '@/components/Homepage/Pizzacard';
import Titlehooks from '@/components/Homepage/Titlehooks';
import Container from '@/components/shared/Container';



const MainLayout = async() => {
  const result=await fetch(`${process.env.api_url}/api/shop`)
  const data=await result.json()
 
  return (
     <>
       <Hero></Hero>
       <Titlehooks title="CHECK OUT" subtitle="Our Best Sellers"></Titlehooks>
       <Container>
         <div className='grid grid-cols-1 m-auto gap-5 md:grid-cols-2 lg:grid-cols-4'>
            {data?.data?.map(d=> <Pizzacard key={d._id} d={d}></Pizzacard>)}
         </div>
         <Titlehooks title="OUR STORY" subtitle="About Us"></Titlehooks>
         <About></About>
         <Contact></Contact>
       </Container>

     </>
  );
};

export default MainLayout;