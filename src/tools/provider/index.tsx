import { FC } from "react"
import { ComponentTypes } from "../../@types"

const ProviderConfig:FC<ComponentTypes> =({children})=>{
    return <div>{children}</div>

}

export default ProviderConfig