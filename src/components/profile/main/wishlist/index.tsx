import {useEffect, useState} from "react"
import {Empty} from "antd"

import CookieUserInfo from "../../../../generic/cookies"
import { CardType, WishlistItemType } from "../../../../@types"
import Loader from "../../../../generic/loader"
import { useAxios } from "../../../../hooks/useAxios"
import Card from "../../../store-products/products/card"


const Wishlist = () => {
    const {getCookie} = CookieUserInfo()

    const user = getCookie("user")
    const wishlist = user?.wishlist || []

    const [flowers, setFlowers] = useState<CardType[]>([])
    const [loading, setLoading] = useState(true)

    const {card_loader} = Loader()
    const axios = useAxios()

    useEffect(() => {
        if (!wishlist.length) {
            setLoading(false)
            return
        }

        Promise.all(
            wishlist.map((item: WishlistItemType) =>
                axios({
                    url: `flower/category/${item.route_path}/${item.flower_id}`,
                })
            )
        )
            .then((results) => {
                setFlowers(results.map((item) => item.data))
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false))
    }, [JSON.stringify(wishlist)])

    if (loading)
        return (
            <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
                {card_loader()}
            </div>
        )

    if (!flowers.length) {
        return (
            <div className="p-4">
                <Empty description="Your wishlist is empty" />
            </div>
        )
    }

    return (
        <div className="grid grid-cols-3 gap-[25px_15px] max-[1000px]:grid-cols-2 max-[350px]:grid-cols-1 max-[350px]:gap-[15px]">
            {flowers.map((value: CardType, indx: number) => (
                <Card key={indx} {...value} />
            ))}
        </div>
    )
}

export default Wishlist
