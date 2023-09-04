import '../../App.css';
import NavBar from './navbar';

type HeaderProps={
    headerValue: string;
}

export default function Header(props: HeaderProps){
    return(
        <>
<div className='mb-5'>
<NavBar/> 
<h1 className='header text-white d-flex align-items-center justify-content-center fw-bolder mb-5'>{props.headerValue}</h1>
</div>
        </>
    )
}