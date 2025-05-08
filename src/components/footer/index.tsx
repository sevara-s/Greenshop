import FooterBottom from "./footer-bottom"
import FooterMain from "./footer-main"
import FooterTop from "./footer-top"

const Footer = () => {
    return (
        <footer className="pt-[20px] ">
            <div className="container2 bg-[#FBFBFB] py-6">
                <FooterTop />
                <FooterMain/>
                <FooterBottom />
            </div>
        </footer>
    )
}

export default Footer
