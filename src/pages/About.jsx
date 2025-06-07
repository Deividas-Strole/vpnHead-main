import React from 'react';
import '../css/About.css';
import whatIsVPN from '../assets/whatIsVpn.png';
import RedBox from '../components/VpnRedBox';
import surfshark from '../assets/surfshark.jpg';
import Slider from '../components/Slider';
import Header from '../components/Header'; // ← Import new component

const About = () => {
    return (
        <div className="about-page-wrapper">
            <Header />

            <div className="about-page-heading">
                <h1>Nice to meet you!</h1>
            </div>

            <div className="about-vpn-info-section">
                <h1 className="about-section-title">My name is Deividas Strole and I love VPNS!</h1>
                <img src="https://res.cloudinary.com/dxubasgtx/image/upload/v1749265085/1715136212308_dzz51o.jpg" alt="Deividas Strole" className="about-vpn-illustration" />
                <br></br>
                <p>In today’s digital world, where privacy and security are constantly under threat, VPNs (Virtual Private Networks) have become essential tools for everyday internet users. Whether you're streaming your favorite shows, working remotely, or just browsing the web, VPNs offer a wide range of benefits that make them incredibly appealing.

                </p><p>One of the main reasons people love VPNs is the privacy they provide. Without a VPN, your internet service provider (ISP), websites you visit, and even hackers can see your online activity. A VPN hides your IP address and encrypts your connection, making it nearly impossible for outsiders to track what you're doing. This sense of anonymity is comforting, especially in an era where data breaches and tracking are becoming more common.

                    Security is another major reason we use VPNs. When you’re connected to public Wi-Fi—like in a coffee shop or airport—you’re vulnerable to cyberattacks. Hackers often exploit unsecured networks to steal passwords, credit card numbers, and other sensitive data. VPNs encrypt your traffic, even on public networks, offering a crucial layer of protection.

                </p><p>We also like VPNs because they help us access content that might otherwise be restricted. For example, streaming platforms often have different libraries depending on your country. With a VPN, you can connect to servers in other countries and unlock shows or services that aren’t available in your region. This is especially useful for travelers who want to continue watching their favorite content abroad.

                    VPNs are also great for avoiding censorship and surveillance. In some countries, access to certain websites and services is blocked or heavily monitored. VPNs allow users to bypass these restrictions and browse the internet freely, which is vital for journalists, activists, and ordinary citizens who want uncensored access to information.

                </p><p>Lastly, many of us appreciate the peace of mind VPNs provide. Knowing that your personal data is more secure and that your browsing habits aren’t being logged or sold offers a level of digital freedom that’s hard to beat. Even if you're not doing anything particularly sensitive online, it’s empowering to know that you have control over your digital footprint.

                    In short, we like VPNs because they give us freedom, security, and control—three things that matter more than ever in the digital age.</p>
            </div>

            <div className="about-vpn-provider-section">
                <h1 className="about-section-title">Where do You Get VPN?</h1>
                <p>We highly reccomend Surfshark - best service for $1.99 per month!!!</p>
                <a href="https://get.surfshark.net/aff_c?offer_id=926&aff_id=38520" target="_blank" rel="noopener noreferrer">
                    <img src={surfshark} alt="SurfShark" className="surfshark-image" />
                </a>
            </div>


        </div>
    );
};

export default About;