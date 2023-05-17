import React from "react";
import {Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitter, BsPinterest, BsTiktok} from "react-icons/bs";

const Footer = () => {
    return (
        <>
        <footer className="text-center text-lg-start bg-white text-muted border-top p-3">
            <section className="d-flex justify-content-center">
                <div className="pt-3">
                    <Link className=" footer-social--icon me-5 link-secondary" to ="/" style={{fontSize: `25px`}}>
                        <BsFacebook/>
                    </Link>
                    <Link className="footer-social--icon me-5 link-secondary" to ="/" style={{fontSize: `25px`}}>
                        <BsInstagram/>
                    </Link>
                    <Link  className="footer-social--icon me-5 link-secondary" to ="/" style={{fontSize: `25px`}}>
                        <BsTwitter/>
                    </Link>
                    <Link  className="footer-social--icon me-5 link-secondary" to ="/" style={{fontSize: `25px`}}>
                        <BsPinterest/>
                    </Link>
                    <Link className="footer-social--icon link-secondary"  to ="/" style={{fontSize: `25px`}}>
                        <BsTiktok/>
                    </Link>
                </div>
            </section>
            <div className="text-center p-4">
            <Link className="text-reset" to="https://getbootstrap.com/"> © 2021 Copyright: Getbootstrap.com</Link>
            </div>

</footer>
        </>
    )
}

export default Footer;