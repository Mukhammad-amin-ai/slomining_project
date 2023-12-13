<template >
    <headerComp />
    <div class="hero">
        <div class="container">
            <div class="hero-text">
                <!-- <div class="contant"> -->
                <h1>
                    EFFICIENT AND STABLE <span>CLOUD</span> <span>MINING</span> INVESTMENT PLATFORM
                </h1>
                <p>We features a world-class technical team. Using advanced servers and a robust solar power generation
                    system, we offer stable investment returns for investors with low costs and high profits.</p>
                <p>Begin your cloud mining investment, withdraw your first payout after 24 hours.</p>
                <button class="start-mining">start mining</button>
                <!-- </div> -->
            </div>
            <div class="hero-galery">
                <div class="galery-image">
                    <img src="../assets/images/phonePicture.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import headerComp from '../components/header/header-comp.vue'

export default {
    components: {
        headerComp
    }

}
</script>
<style scoped>
.hero {
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    width: 93%;
    height: 75%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero-text {
    width: 53%;
    height: 100%;

}

h1 {
    font-size: 45px;
    font-family: 'Montserrat', sans-serif;
    color: rgb(28, 43, 70);
    font-weight: 700;
}

span {
    color: rgb(0, 153, 250);
}

p {
    font-family: 'Montserrat', sans-serif;
    color: rgb(128, 145, 167);
    font-weight: 400;
    font-size: 16px;
    margin-top:24px
}

.hero-galery {
    width: 45%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.galery-image {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: end;
    align-items: center;
}

.galery-image img {
    width: 100%;
}
</style>