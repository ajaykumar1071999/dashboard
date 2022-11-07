import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(Props) {
  const navigate = useNavigate();
  let Comp=Props.Cmp;
  useEffect(() => {
    
  },[]);
return (
    <><Comp/></>
)
}
export default ProtectedRoute;