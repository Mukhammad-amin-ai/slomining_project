<template>
    <div class="sign-in d-flex center">
        <div class="container d-flex center">
            <div class="image ">
                <img src="../assets/images/sign-up.png" alt="server">
            </div>
            <div class="sign-in-form">
                <div class="signin-text">
                    <h1>WELCOME TO SLOMINING</h1>
                    <p>Sign in to continue</p>
                </div>
                <form>
                    <div class="floating">
                        <input id="input__username" class="floating__input" name="Email" type="text" placeholder="Email" />
                        <label for="Email" class="floating__label" data-content="Email">
                            <span class="hidden--visually">
                                Email</span></label>
                    </div>
                    <div class="floating">
                        <input id="input__password" type="password" class="floating__input" name="password"
                            placeholder="Password" />
                        <label for="input__password" class="floating__label" data-content="Password"><span
                                class="hidden--visually">Password</span></label>
                    </div>
                </form>
                <div class="forgot d-flex">
                    <div data-v-53267c94="" class="form-check"><input data-v-53267c94="" class="form-check-input"
                            type="checkbox" id="logMeIn" value="" data-gtm-form-interact-field-id="4">
                        <label data-v-53267c94="" class="form-check-label form-check-label-s1" for="logMeIn"> Remember
                            me
                        </label>
                    </div>
                    <router-link to="/forgot">
                        <p>Forgot Password?</p>
                    </router-link>
                </div>
                <!-- <ButtonComponent text="Sign in "  /> -->
                <button class="sign-in btn ">Sign in</button>
                <div class="dont">
                    <h5>Don't have an account ? <router-link to="/sign-up"><span>Sign Up</span></router-link></h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import ButtonComponent from '@/components/mini_components/ButtonComponent.vue';
export default {
    components: {
        // ButtonComponent,
    }
}
</script>
<style scoped>
.sign-in {
    width: 100%;
    height: auto;
}

.container {
    width: 93%;
    height: auto;
    margin-top: 50px;

}

.image {
    width: 50%;
}

.image img {
    width: 100%;
}

.sign-in-form {
    width: 50%;
}

.signin-text {
    width: 100%;
    height: auto;
    padding-bottom: 34px;
}

h1 {
    font-size: 32px;
    font-family: Montserrat-Extra-Bold, sans-serif;
    color: rgb(28, 43, 70);
    line-height: 38.4px;
}

p {
    font-size: 16px;
    font-family: Montserrat-Regular, sans-serif;
    color: rgb(128, 145, 167);
    line-height: 26px;
}


form {
    width: 100%;
    height: auto;
}

/* input================================== */
.floating {
    margin-bottom: 2rem;
    background-color: transparent;
    transition: background-color 0.2s ease;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
}

.floating__input {
    padding: 1.8rem 1rem 0.6rem;
    font-size: 1rem;
    border: 1px solid #000;
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

/* input================================== */
.forgot {
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    margin: 0 0 24px;
}

.form-check {
    width: 20%;
    height: 10px;
    display: flex;
    align-items: center;
    min-height: 1.5rem;
    padding-left: 1.5em;
    margin-bottom: 0.125rem;
}

.form-check-label-s1 {
    font-size: .938rem;
}

.form-check-label {
    cursor: pointer;
    display: block;
    font-family: Montserrat-Regular, sans-serif;
    color: rgb(128, 145, 167);
}

/* btn */
.btn {
    font-family: Montserrat-Medium, sans-serif;
    cursor: pointer;
    padding: 10px 24px;
    transition: all .3s linear;
    border-radius: 0.375rem;
    font-weight: 500;
    font-size: 1rem;
    text-transform: uppercase;
    background-color: var(--blue);
    color: var(--white);
}

.btn:hover {
    background-color: var(--white);
    color: var(--black);

}


/* dont */
.dont {
    margin: 16px 0 0;
    color: rgba(33, 37, 41, 0.75) !important;
}

.dont h5 {
    font-family: Montserrat-Regular, sans-serif;
    color: rgba(33, 37, 41, 0.75) !important;
    font-size: 16px;
}

.dont h5 span {
    color: #000;
}
</style>