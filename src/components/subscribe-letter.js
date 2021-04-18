import React from "react";
import PhoneModel from "../../static/images/phone_model.svg"


const SubscribeLetter = ()=>{
    return (
        <> 
            <div className="subscriber-component">
                <div className="container">
                    <section className="area-subs">
                        <div className="image-holder">
                            <img 
                                src={PhoneModel} 
                                alt="_img_phone"/>
                        </div>

                        <main>
                            <h1>Discover how aaron dancel built his online empire</h1>
                            <p>
                                Free blueprint to see strategies used behind-the-scenes 
                                to build a multi-million dollar business.
                            </p>

                            <form id="subscribe-form" method="POST">
                                <div>
                                    <input 
                                        type='text' 
                                        placeholder='Email'
                                        name='name' 
                                        className="inputStyles"
                                        required />
                                </div>
                                <div>
                                    <input 
                                        type='email' 
                                        placeholder='Email'
                                        name='email' 
                                        className="inputStyles"
                                        required />
                                </div>
                                <div>
                                    <input 
                                        type="submit" 
                                        id="submit_btn_subscribe" 
                                        value="Submit"/>
                                </div>
                            </form>
                        </main>

                    </section>
                </div>
            </div>
        </>
    );
}

export default SubscribeLetter;