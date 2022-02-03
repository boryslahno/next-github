import { AppBar, Toolbar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const Header = () => (
   <AppBar position="static" sx={{ 'backgroundColor': '#24292f' }}>
      <Toolbar>
         <Link href={'/'}>
            <a>
               <Image src="/github.png" alt="Github logo" width={35} height={35} />
            </a>
         </Link>
      </Toolbar>
   </AppBar>
);

export { Header };