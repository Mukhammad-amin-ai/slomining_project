<template>
  <div class="sign-in d-flex center">
    <div class="container d-flex center">
      <div class="image">
        <img src="../assets/images/sign-up.png" alt="server" />
      </div>
      <div class="sign-in-form">
        <div class="signin-text">
          <h1>SIGN UP</h1>
        </div>
        <form>
          <div class="floating">
            <input
              id="input__username"
              class="floating__input"
              name="Email"
              type="text"
              placeholder="Email"
              v-model="form.email"
            />
            <label for="Email" class="floating__label" data-content="Email">
              <span class="hidden--visually"> Email</span></label
            >
            <div class="err-msg" v-if="errors.email">{{ errors.email }}</div>
          </div>
          <div class="floating">
            <input
              id="input__password"
              type="password"
              class="floating__input"
              name="password"
              placeholder="Password"
              v-model="form.password"
            />
            <label for="input__password" class="floating__label" data-content="Password"
              ><span class="hidden--visually">Password</span></label
            >
            <div class="err-msg" v-if="errors.password">{{ errors.password }}</div>
          </div>
          <div class="floating">
            <input
              id="input__password"
              type="password"
              class="floating__input"
              name="password"
              placeholder="Password Confirmation"
              v-model="form.password_confirm"
            />
            <label
              for="input__password"
              class="floating__label"
              data-content="Password Confirmation"
              ><span class="hidden--visually">Confirm Password</span></label
            >
            <div class="err-msg" v-if="errors.password_confirm">{{ errors.password_confirm }}</div>
          </div>
        </form>
        <div class="sign-up-text">
          By signing up, you agree to our
          <router-link to="/privacy"> <span>Privacy Policy</span></router-link>
          and
          <router-link to="/terms"> <span>Terms</span></router-link>
        </div>

        <button class="sign-in btn" @click="register">Sign Up</button>
        <div class="dont">
          <h5>
            Already have an account ? <router-link to="/sign-in"><span>SIGN IN</span></router-link>
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from 'sweetalert2'

export default {
  data() {
    return{
      form: {
        email: '',
        password: '',
        password_confirm: ''
      },
      errors: {} // To store validation errors
    }
  },
  methods: {
    register() {
      this.errors = {}
      if (!this.form.email || !this.isValidEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address.'
      } else if (!this.form.password || this.form.password.length < 6) {
        this.errors.password = 'Password must be at least 6 characters.'
      } else if (this.form.password !== this.form.password_confirm) {
        this.errors.password_confirm = 'Passwords do not match.'
      }

      if (Object.keys(this.errors).length === 0) {
        localStorage.setItem('form', JSON.stringify(this.form))
        localStorage.setItem('isLogin', true)
        this.$store.state.isLogin  = true

        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer
            toast.onmouseleave = Swal.resumeTimer
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Signed in successfully'
        })
        this.$router.push('/dashboard/profile')
        setTimeout(() => {
        window.location.reload()
        } , 1000)
      }
    },
    isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }
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
  content: '';
  height: 0.1rem;
  position: absolute;
  transition:
    transform 180ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 180ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.3s ease;
  opacity: 0;
  left: 0;
  top: 100%;
  margin-top: -0.1rem;
  transform: scale3d(0, 1, 1);
  width: 100%;
}

.floating__input:focus + .floating__label::after {
  transform: scale3d(1, 1, 1);
  opacity: 1;
}

.floating__input:placeholder-shown + .floating__label::before {
  transform: translate3d(0, -2.2rem, 0) scale3d(1, 1, 1);
}

.floating__label::before,
.floating__input:focus + .floating__label::before {
  transform: translate3d(0, -3.12rem, 0) scale3d(0.82, 0.82, 1);
}

.floating__input:focus + .floating__label::before {
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

.sign-up-text {
  width: 100%;
  height: auto;
  margin-bottom: 24px;
  font-family: Montserrat-Medium, sans-serif;
  color: rgba(33, 37, 41, 0.75);
}

.sign-up-text span {
  font-family: Montserrat-Bold, sans-serif;
  color: rgb(97, 66, 143);
}

.btn {
  font-family: Montserrat-Medium, sans-serif;
  cursor: pointer;
  padding: 10px 24px;
  transition: all 0.3s linear;
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

@media screen and (max-width: 1024px) {
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
