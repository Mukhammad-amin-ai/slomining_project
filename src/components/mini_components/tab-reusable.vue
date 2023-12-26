<template >
    <div class="tab">
        <h1>{{ title }}</h1>
        <ul>
            <li>
                <button class="tab-btn">
                    {{ tab }}
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        tab: String
    }
}
</script>
<style scoped>
.tab {
    width: 100%;
    height: auto;
}

h1 {
    font-family: Montserrat-Extra-Bold, sans-serif;
    font-size: 32px;
    color: var(--white);
    margin-bottom: 24px;
}

ul {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #f5f5f5;
}

li {
    margin-right: 25px;
}

.tab-btn {
    width: auto;
    height: 100%;
    background-color: transparent;
    border: none;
    /* color: #59adda; */
    color: #f8f97f;
    font-size: 17px;
    font-family: Montserrat-Extra-Bold, sans-serif;
    margin: 0px 0px -1px;
    padding: 0px 0px 13px;
    cursor: pointer;
    position: relative;
}

.tab-btn::after {
    position: absolute;
    content: " ";
    right: 0;
    bottom: 0;
    height: 2px;
    background-color: #f8f97f;
    width: 100%;
    transition: all .2s;
    transform: scale(1)
}
</style>