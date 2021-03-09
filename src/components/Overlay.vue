<template>
    <div id="overlay" class="fixed-top"></div>
</template>

<style lang="scss" scoped>
    #overlay {
    background: rgba(0,0,0,.6);
    height: 100vh;
    width: 100%;
    right: 0;
    z-index: -2;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: opacity .55s ease-in;
    animation-fill-mode: forwards;

    &.open {
        opacity: 1 !important;
        visibility: visible !important;
    }
    }
</style>
