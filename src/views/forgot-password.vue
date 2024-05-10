<template>
    <div class="sign-in d-flex center">
        <div class="container d-flex center" style="gap: 20px;">
            <div class="image ">
                <img src="../assets/images/AH/log.png" alt="log">
            </div>
            <div class="sign-in-form">
                <div class="signin-text">
                    <h1>Forgot Password</h1>
                    <p>Please enter your email address. You will receive your verify code information through email.</p>
                </div>
                <form>
                    <div class="floating">
                        <input id="input__username" class="floating__input" name="Email" type="text" placeholder="Email" v-model="email" />
                        <label for="Email" class="floating__label" data-content="Email">
                            <span class="hidden--visually">
                                Email</span></label>
                    </div>
                </form>
                <button class="sign-in btn " @click="resetPassword">Reset Password</button>
                <div class="dont">
                    <h5>Remember your password ? <router-link to="/sign-in"><span>SIGN IN</span></router-link></h5>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
  data(){
    return {
      email:""
    }
  },
  methods:{
    async resetPassword(){
      let dataObj = {
        email:this.email
      }
      try{
        let response = await axios.post(`${import.meta.env.VITE_BASE_URL}api/forgotPassword`, dataObj)
        if(response.data.message === "Password Reset Successfully"){
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer
              toast.onmouseleave = Swal.resumeTimer
            }
          })
          await Toast.fire({
            icon: 'success',
            title: 'Password Reset Successfully'
          })
          setTimeout(() => {
            window.location.href = '/sign-in'
          }, 800)
        }
      }catch(err){
        console.error("Error on resetting password",err)
      }
    }
  }
}
</script>
<style scoped>
.sign-in {
    width: 100%;
    height: auto;
    background-color: #000;
}

.container {
    width: 93%;
    height: auto;
    gap: 20px;
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
    /* color: rgb(28, 43, 70); */
    color: #fff;
    line-height: 38.4px;
}

p {
    font-size: 16px;
    font-family: Montserrat-Regular, sans-serif;
    /* color: rgb(128, 145, 167); */
    color: #fff;
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
    border: 1px solid #fff;
    transition: border-color 0.2s ease;
    border-radius: 6px;
    background-color: #fff;
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

/* verif */
.verify-code {
    width: 100%;
    height: auto;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    overflow: hidden;
}

.verify-code .floating {
    width: 90%;

}

.verify {
    transition: all .3s;
    border-radius: 0.375rem;
    padding: 10px 14px;
    font-size: 1rem;
    font-family: Montserrat-Bold, sans-serif;
    margin-bottom: 30px;
    background-color: grey;
    color: var(--white);
    cursor: pointer;
}


/* input================================== */
.sign-up-text {
    width: 100%;
    height: auto;
    margin-bottom: 24px;
    font-family: Montserrat-Medium, sans-serif;
    /* color: rgba(33, 37, 41, 0.75); */
    color: #fff;
}

.sign-up-text span {
    font-family: Montserrat-Bold, sans-serif;
    color: rgb(97, 66, 143);
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
    background-color: grey;
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
    /* color: rgba(33, 37, 41, 0.75) !important; */
    color: #fff;
    font-size: 16px;
}

.dont h5 span {
    color: #212dd7;
}

@media screen and (max-width: 1300px) {
    .container {
        padding: 50px 0;
    }

}

@media screen and (max-width: 768px) {
    .image {
        display: none;
    }

    .sign-in-form {
        width: 100%;
    }
}
</style>