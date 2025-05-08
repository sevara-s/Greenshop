//img
import logo from "../../../assets/icons/logo.svg"
import icon1 from "../../../assets/icons/footer/6.svg"
import icon2 from "../../../assets/icons/footer/7.svg"
import icon3 from "../../../assets/icons/footer/8.svg"

const FooterMain = () => {
  return (
    <div className="p-4 footermain grid grid-cols-4 max-[1000px]:hidden items-center">
        <img src={logo} alt="" />
        <div className="flex gap-2 items-center">
            <img src={icon1} alt="" />
            <p>70 West Buckingham Ave. <br />
            Farmingdale, NY 11735</p>
        </div>
        <div className="flex gap-2 items-center">
            <img src={icon2} alt="" />
            <p>contact@greenshop.com</p>
        </div>
        <div className="flex gap-2 items-center">
            <img src={icon3} alt="" />
            <p>+88 01911 717 490</p>
        </div>
    </div>
  )
}

export default FooterMain