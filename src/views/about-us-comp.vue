<template>
    <div class="about d-flex center ">
        <div class="container">
            <div class="about-header-contant d-flex center">
                <div class="about-text">
                    <h4>Introduction:</h4>
                    <p>Established in 2018 and headquartered in the United Kingdom, Astro Hash has swiftly risen as a
                        frontrunner in the cloud mining industry. With a global membership exceeding 300,000, our company
                        has been at the forefront of leveraging the potential of blockchain and cryptocurrencies.</p>
                    <h4>Our Strengths:</h4>
                    <p>1. User-Friendly Platform: Astro Hash prides itself on providing a user-friendly platform accessible
                        to
                        both newcomers and seasoned miners. Our interface is designed to be intuitive and straightforward,
                        ensuring that anyone can easily navigate and optimize their mining experience.
                    </p>
                    <p>
                        2. Cutting-Edge New Energy Mining Technology: We set ourselves apart by incorporating the latest
                        advancements in new energy mining technology. This commitment to innovation enables us to offer
                        users a reliable and secure method for cryptocurrency mining. Our state-of-the-art equipment is
                        optimized for energy efficiency, minimizing environmental impact while maximizing returns.
                    </p>
                    <p>
                        3. Stability and Security: Astro Hash places the highest priority on stability and security.
                        Recognizing the importance of safeguarding your investments, we implement rigorous security measures
                        and adopt a vigilant approach to risk management. Astro Hash provides a safe and risk-free
                        environment
                        for mining activities.
                    </p>
                    <h4>Why Choose Astro Hash:</h4>
                    <p>As we continue to push the boundaries of what's possible in the realm of cloud mining, we invite you
                        to embark on this exciting journey with us. Experience the ease of use, security, and profitability
                        that Astro Hash offers. Join us today and be part of the future of cryptocurrency mining.</p>
                    <p>As we continue to push the boundaries of what's possible in the world of cloud mining, we invite you
                        to
                        embark on this exciting journey with us. Experience the ease of use, security, and profitability
                        that
                        ASTRO HASH offers. Join us today and be part of the future of cryptocurrency mining.</p>

                    <p>Astro Hash - Leading the Evolution of Cloud Mining.</p>
                </div>
                <div class="image d-flex ">
                    <div class="image-container ">
                        <img src="../assets/images/AH/abt.png" alt="abt">
                    </div>
                </div>
            </div>
            <statsComp />
            <!-- <div class="stats d-flex center">
                <div class="container d-flex stat-container">
                    <div class="card text-center rounded d-flex center">
                        <div class="card-contnat">
                            <img class="img-stat" src="../assets/images/members.png" alt="members">
                            <h3>300K+</h3>
                            <p>Active Members</p>
                        </div>
                    </div>
                    <div class="card text-center rounded d-flex center">
                        <div class="card-contnat">
                            <img class="img-stat" src="../assets/images/countries.png" alt="members">
                            <h3>160+</h3>
                            <p>Countries Supported</p>
                        </div>
                    </div>
                    <div class="card text-center rounded d-flex center">
                        <div class="card-contnat">
                            <img class="img-stat" src="../assets/images/deposit.png" alt="members">
                            <h3>5.5M+</h3>
                            <p>Total Deposit</p>
                        </div>
                    </div>
                    <div class="card text-center rounded d-flex center">
                        <div class="card-contnat">
                            <img class="img-stat" src="../assets/images/total.png" alt="members">
                            <h3>8M+</h3>
                            <p>Total Withdraw</p>
                        </div>
                    </div>
                </div>
            </div> -->
            <div class="get-in-touch d-flex center">
                <div class="get-container text-center">
                    <h3>Get In Touch with Us</h3>
                    <div class="contact-us d-flex">
                        <div class="question">
                            <h3>Contact Us</h3>
                            <p>Have a question? Need help? Don't hesitate, drop us a line</p>
                            <form>
                                <div class="name-addres d-flex">
                                    <div class="floating">
                                        <input id="input__username" class="floating__input" name="name" type="text"
                                            placeholder="Your name" />
                                        <label for="name" class="floating__label" data-content="Your name">
                                            <span class="hidden--visually">
                                                Your name</span></label>
                                    </div>
                                    <div class="floating">
                                        <input id="input__email" type="text" class="floating__input" name="input__email"
                                            placeholder="Email address" />
                                        <label for="input__email" class="floating__label" data-content="Email address"><span
                                                class="hidden--visually">Email address</span></label>
                                    </div>
                                </div>
                                <div class="message">
                                    <div class="floating">
                                        <textarea id="input__username" class="floating__input" name="name"
                                            placeholder="Your name"></textarea>
                                        <label for="input__username" class="floating__label" data-content="Your question">
                                            <span class="hidden--visually">Your question</span>
                                        </label>
                                    </div>

                                    <button class="send-message ">Send Message</button>
                                </div>
                            </form>
                        </div>
                        <div class="find-us">
                            <h3>Find Us There</h3>
                            <div class="there">
                                <div class="email d-flex">
                                    <div class="bx-email d-flex center">
                                        <img src="../assets/icons/mail-outline.svg" alt="">
                                    </div>
                                    <div class="text">
                                        <h4>Email:</h4>
                                        <p>support@astrohash.net</p>
                                    </div>
                                </div>
                                <div class="email d-flex">
                                    <div class="bx-email d-flex center">
                                        <img src="../assets/icons/location-outline.svg" alt="">
                                    </div>
                                    <div class="text">
                                        <h4>Location:</h4>
                                        <p>Wtc 1cv New London House 6 London Street, UK</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import statsComp from '@/components/about-us/stats-comp.vue'
export default {
    components: {
        statsComp
    }
}
</script>
<style scoped>
.about {
    width: 100%;
    height: auto;
    background-color: var(--black);
}

.about-header-contant {
    width: 100%;
    justify-content: space-between;
    margin: 50px 0;
}

.about-text {
    width: 50%;
    height: auto;
}

.about-text h1 {
    font-size: 32px;
    font-family: Montserrat-Extra-Bold, sans-serif;
    color: #fff;
    margin-bottom: 20px;
}

.about-text h4 {
    font-size: 24px;
    font-family: Montserrat-Extra-Bold, sans-serif;
    color: #fff;
    margin: 30px 0;
}

.about-text p {
    font-size: 16px;
    font-family: Montserrat-Medium, sans-serif;
    color: var(--white);
    margin: 30px 0;
    line-height: 26px;
}

.image {
    width: 50%;
    height: auto;
    justify-content: end;
}

.image-container {
    width: 661px;
    height: 661px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.image-container img {
    width: 80%;
}

.get-in-touch {
    width: 100%;
    height: auto;
    padding: 20px 20px;
    gap: 20px;
    /* cursor: pointer; */
    /* border: 1px solid var(--white); */
    /* backdrop-filter: blur(5px); */
    /* background: linear-gradient(180deg, rgba(255, 255, 255, 0.284), transparent); */
    /* background-color: #fff; */
    /* background-blend-mode: multiply, normal; */
    background: rgba(255, 255, 255, 0.2);
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(5px);
    border-radius: 20px;
    color: var(--white) !important;
}

.get-in-touch h3 {
    font-size: 32px;
    font-family: Montserrat-Extra-Bold, sans-serif;
    /* color: #fff; */
    color: #fff;
}

.get-container {
    width: 100%;
    height: auto;
}

.contact-us {
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    gap: 70px;
    margin-top: 40px;
}

.question {
    width: 60%;
    height: auto;
    text-align: start !important;
}

.question p {
    margin: 10px 0;
    font-family: Montserrat-Medium, sans-serif;
    color: var(--white);
    font-size: 16px;
}

.name-addres {
    width: 100%;
    height: auto;
    gap: 10px;
}

.floating {
    width: 50%;
    margin-bottom: 2rem;
    background-color: transparent;
    transition: background-color 0.2s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.floating__input {
    padding: 1.8rem 1rem 0.6rem;
    font-size: 1rem;
    border: 1px solid #fff;
    transition: border-color 0.2s ease;
    border-radius: 6px;
}

.floating__input::placeholder {
    color: rgba(0, 0, 0, 0);
}

.floating__label {
    display: block;
    position: relative;
    max-height: 0;
    font-weight: 500;
    pointer-events: none;
    /* color: #8091A7; */
    color: #fff;
}

.floating__label::before {
    content: attr(data-content);
    display: inline-block;
    filter: blur(0);
    backface-visibility: hidden;
    transform-origin: left top;
    transition: transform 0.2s ease;
    left: 1rem;
    position: relative;
    font-family: Montserrat-Light, sans-serif;
}

.floating__label::after {
    bottom: 1rem;
    content: "";
    height: 0.1rem;
    position: absolute;
    transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
        opacity 180ms cubic-bezier(0.4, 0, 0.2, 1), background-color 0.3s ease;
    opacity: 0;
    left: 0;
    top: 100%;
    margin-top: -0.1rem;
    transform: scale3d(0, 1, 1);
    width: 100%;
}

.floating__input:focus+.floating__label::after {
    transform: scale3d(1, 1, 1);
    opacity: 1;
}

.floating__input:placeholder-shown+.floating__label::before {
    transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
}

.floating__label::before,
.floating__input:focus+.floating__label::before {
    transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
}

.floating__input:focus+.floating__label::before {
    color: var(--color__accent);
}

textarea {
    background: none;
    border-width: 0;
    display: block;
    width: 100%;
    /* resize: none; Disable textarea resizing */
}

input {
    background: none;
    border-width: 0;
    display: block;
    width: 100%;
}

fieldset {
    padding: 3rem 2rem 1.5rem;
}

legend {
    padding: 0 0.5rem;
}

.hidden--visually {
    border: 0;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.message {
    width: 100%;
    height: auto;
}

.message .floating {
    width: 100%;
}

.send-message {
    transition: all .3s;
    padding: 10px 24px;
    border-radius: 0.375rem;
    /* background-color: #8091A7; */
    background-color: #000;
    color: #fff;
    font-family: Montserrat-Bold, sans-serif;
    font-size: 1rem;
    /* color: #fff; */
    border: none;
    cursor: pointer;
}

.find-us {
    width: 40%;
    height: auto;
    text-align: start;
}

.find-us h3 {
    margin-bottom: 30px;
}

.there {
    width: 100%;
    height: 230px;
}

.email {
    width: 100%;
    height: auto;
    gap: 10px;
    align-items: center;
    padding-bottom: 20px;
}

.bx-email {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: #fff;
}

.text {
    width: 80%;
    height: auto;
}

.text h4 {
    font-family: Montserrat-Extra-Bold, sans-serif;
    font-size: 16px;
    color: var(--white);
}

.text p {
    font-family: Montserrat-Medium, sans-serif;
    color: var(--text_gray);
}

@media screen and (max-width:1050px) {
    .card {
        width: 230px;
    }
}

@media screen and (max-width:990px) {
    .about-header-contant {
        flex-direction: column-reverse;
    }

    .about-text {
        width: 90%;
    }

    .image {
        width: 90%;
        justify-content: center;
        align-items: center;
    }

}

@media screen and (max-width:768px) {
    .stat-container {
        width: 90%;
        justify-content: center !important;
    }

    .get-in-touch {
        width: 90%;
        margin-left: 5%;
    }

    .contact-us {
        flex-direction: column;
    }

    .question {
        width: 100%;
    }

    .find-us {
        width: 100%;
    }

    h1 {
        font-size: 28px !important;
    }

    h3 {
        font-size: 28px !important;
    }

}

@media screen and (max-width:660px) {
    .name-addres {
        flex-direction: column;
    }

    .floating {
        width: 100%;
    }

    .image-container {
        width: 100%;
        height: auto;
    }
}

@media screen and (max-width:425px) {
    h1 {
        font-size: 25px !important;
    }

    h3 {
        font-size: 25px !important;
    }

    h4 {
        font-size: 18px !important;
    }
}
</style>