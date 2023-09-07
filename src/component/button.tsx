import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"


type buttonProps = {
    btnType: any,
    btnValue: any,

}
export default function ButtonComp(props: buttonProps) {
    const navigate = useNavigate()
    const valid = true;
    const move = () => {
        if (valid) {
            navigate("/newMember")
        }
    }
    return (
        <>
            <Button onClick={move}
                variant="contained"
                type={props.btnType}
                color="error" className="border-2 px-4 py-2 m-2 rounded-0 text-white" >
                {props.btnValue}
            </Button>
        </>
    )
}