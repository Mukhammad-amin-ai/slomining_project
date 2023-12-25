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
            <div class="card text-center rounded d-flex center">
                <div class="card-contnat">
                    <img class="img-stat" src="../../assets/images/countries.png" alt="members">
                    <h3>160+</h3>
                    <p>Countries Supported</p>
                </div>
            </div>
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
    background-color: #fff;
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
    color: var(--blue);
    padding: 10px 0;
}

.card-contnat p {
    font-family: Montserrat-Medium, sans-serif;
    font-size: 16px;
    color: var(--text_gray);

}
</style>