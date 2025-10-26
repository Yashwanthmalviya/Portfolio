import React from 'react'
import Navbar from '../components/navbar/Navbar';
import './Home.css'

const Home = () => {
    return (

        <div className="home-container">


            <div className="home-left">

                <div className="home-details">
                    <p style={{ lineHeight: "var(--line-height-3)", fontSize: "18px", color: "var(--primitive-400)" }}>Hi all. I am</p>
                    <h1 style={{ lineHeight: "var(--line-height-9)", fontSize: "60px", color: "var(--primitive-50)", fontWeight: "200", marginTop: "4px" }}>Micheal Weaver</h1>
                    <p style={{ lineHeight: "var(--line-height-6)", fontSize: "30px", color: "var(--indigo-500)", marginTop: "8px" }}>&gt; Front-end developer</p>
                </div>
                <div className="home-git">
                    <p style={{ lineHeight: "var(--line-height-2)", fontSize: "var(--font-size-2)", color: "var(--primitive-400)" }}>// complete the game to continue</p>
                    <p style={{ lineHeight: "var(--line-height-2)", fontSize: "var(--font-size-2)", color: "var(--primitive-400)" }}>// find my profile on github:</p>
                    <p style={{ lineHeight: "var(--line-height-2)", fontSize: "var(--font-size-2)" }}>
                        <span style={{ color: "var(--indigo-500)" }}>const </span>
                        <span style={{ color: "var(--teal-400)" }}>github </span>
                        <span style={{ color: "var(--primitive-50)" }}>= </span>
                        <span style={{ color: "var(--primitive-400)" }}><a href="">bhahunnd</a></span>
                    </p>
                </div>

            </div>



            <div className="home-right">
                fahibafh
                                    
            </div>



        </div>



    )
}

export default Home