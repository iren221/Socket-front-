<template>
    <div>
        <div class="write__mainpage">
            <h1>Найди свою судьбу</h1>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.write__mainpage {
    
    letter-spacing: 8px;
    display: flex;
    justify-content: center;
    margin-top: 100px;
    font-family: Comic Sans MS;
}
.write__mainpage h1 {
    font-size: 70px;
    color: white;
    background: repeating-linear-gradient(-45deg, #D6A2AD, #A78E99, #797A84, #4A6670, #D6A2AD 50%);
    background-size: 600vw 600vw;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: slide 5s linear infinite forwards;
}
@keyframes slide {
    0%{
        background-position-x: 0%;
    }
    100%{
        background-position-x: 600vw;
    }
}

</style>