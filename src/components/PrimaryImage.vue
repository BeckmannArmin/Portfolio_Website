<template>
    <div id="primary-image" class="logo-mask" ></div>
</template>

<style lang="scss" scoped>
.logo-mask {
        position: absolute;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    left: 40%;
    opacity: .6;
    z-index: 3;
}
</style>
