import React from 'react';

export default function Header({children}){
    return(
        <header>
            <h1>{children}</h1>
            
        </header>
    )    
}

// essa aqui em baixo eu já utilizo...
//export default function Header(props){
//   return(
//        <header>
//            <h1>{props.children}</h1>     
//        </header>
//    )  
//}

// <h1>{props.children}</h1>
//export default function Header(props){}
// <h1>{props.title}</h1>

// ou export default Header;
