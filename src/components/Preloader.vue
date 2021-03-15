<template>
  <div id="preloader">
    <div class="preloader-container">
        Test
    </div>
  </div>
</template>

<style lang="scss" scoped>
#preloader {
  z-index: 9999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  animation: appear 0.275s ease-out;
  -webkit-transform: scale(1) translateZ(0.01px);

  .preloader-container {
    background: $hero-bg-gradient;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &.leave {
    animation: disappear .475s cubic-bezier(.165,.84,.44,1);
    animation-fill-mode: forwards;
    animation-delay: 1s;
  }
}

@keyframes appear {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

@keyframes disappear {
  0% {
    opacity: 1;
    transform: scale(1);
    border-radius: 0;
  }

  25% {
    border-radius: 8px;
  }

  100% {
    opacity: 0;
    transform: scale(0.8);
    visibility: hidden;
    pointer-events: none;
  }
}
</style>
