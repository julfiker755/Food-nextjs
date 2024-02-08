import { pacifico } from "@/app/fonts";
import Container from "../shared/Container";


const Titlehooks = ({title,subtitle}) => {
    return (
        <Container>
          <div className='text-center py-4'>
              <h1 className='font-bold  text-xl'>{title}</h1>
              <h1 className='text-2xl font-semibold text-custom/color' ><span className={pacifico.className}>{subtitle}</span></h1>
          </div>
        </Container>
    );
};

export default Titlehooks;