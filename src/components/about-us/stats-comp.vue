<template >
    <div class="stats d-flex center">
        <div class="container d-flex stat-container">
            <div class="card text-center rounded d-flex center">
                <div class="card-contnat">
                    <img class="img-stat" src="../../assets/images/members.png" alt="members">
                    <h3>300K+</h3>
                    <p>Active Members</p>
                </div>
            </div>
            <!-- <div class="card text-center rounded d-flex center">
                <div class="card-contnat">
                    <img class="img-stat" src="../../assets/images/countries.png" alt="members">
                    <h3>160+</h3>
                    <p>Countries Supported</p>
                </div>
            </div> -->
            <div class="card text-center rounded d-flex center">
                <div class="card-contnat">
                    <img class="img-stat" src="../../assets/images/deposit.png" alt="members">
                    <h3>5.5M+</h3>
                    <p>Total Deposit</p>
                </div>
            </div>
            <div class="card text-center rounded d-flex center">
                <div class="card-contnat">
                    <img class="img-stat" src="../../assets/images/total.png" alt="members">
                    <h3>8M+</h3>
                    <p>Total Withdraw</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.stats {
    width: 100%;
    height: auto;
    padding: 100px 0;
}

.stat-container {
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
}

.card {
    width: 330px;
    height: 164px;
    /* background-color: #fff; */
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.3);
    -webkit-backdrop-filter: blur(60px);
    backdrop-filter: blur(60px);
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
}

.img-stat {
    width: 2.1875rem;
}

.card-contnat {
    padding: 25px 0 28px;
}

.card-contnat h3 {
    font-family: Montserrat-Extra-Bold, sans-serif;
    font-size: 24px;
    color: var(--white);
    padding: 10px 0;
}

.card-contnat p {
    font-family: Montserrat-Medium, sans-serif;
    font-size: 16px;
    color: var(--white);

}


@media screen and (max-width:1130px) {
    .stat-container{
        width: 80%;
    }
}
@media screen and (max-width:930px) {
    .stat-container{
        width: 90%;
    }
}
@media screen and (max-width:830px) {
    .stat-container{
        width: 100%;
    }
}

@media screen and (max-width:768px) {
    .stat-container {
        width: 90%;
        justify-content: center !important;
    }

}
</style>