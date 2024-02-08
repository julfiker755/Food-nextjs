import Container from "@/components/shared/Container";
import Link from "next/link";


const Dashoardlayot = ({children }) => {
    return (
        <Container>
             <ul className="flex gap-3 justify-center">
                  <Link href="/allitems"> <li className="bg-[#3fb0bd] text-white px-3 py-1 rounded-md cursor-pointer">All Product</li></Link>
                  <Link href={"/additems"}> <li className="bg-[#3fb0bd] text-white px-3 py-1 rounded-md cursor-pointer">Add items</li></Link>
                </ul>
            <div>
                {children}
            </div>
        </Container>
    );
};

export default Dashoardlayot;