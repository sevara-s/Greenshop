import ProceedCard from "./card"
import { useReduxSelector } from "../../../hooks/useRedux"
import PricesTotal from "../../productShop/card-total/prices"


const ProceedTotal=()=>{
    const {data} = useReduxSelector(state=>state.shopSlice)
    return (
        <>
        {data.map((item=> (
            <ProceedCard key={item._id} {...item}/>
        )))}
        <PricesTotal/>
        </>
    )
}

export default ProceedTotal