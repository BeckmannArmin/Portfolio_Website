<template>
    <section id="about" class="d-flex position-absolute">
        <div class="container d-flex justify-content-center flex-column w-100" id="about-content">
            <div class="content d-inline-flex flex-row">
                I am a bespoke developer with adsjasddas
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>

#master.stage-0 #about {
    transform: translateX(-100vw);
}

#master.stage-1 #about, #master.stage-2 #about {
    transform: translateX(0);
}

#master.stage-1 #about {
    background: #e91e63;
}
#about {
    transition: transform 1s cubic-bezier(1,0,0,1);
    background: none;
    width: 100vw;
    height: 100vh;
    opacity: 1;
    z-index: 1;

    #about-content {
        align-items: center;
        opacity: 0;
        transition: opacity .5s cubic-bezier(.645,.045,.355,1);

        .content {
            margin-left: auto;
            margin-right: auto;
            width: 60%;
            font-size: 5.2rem;
            flex-wrap: wrap
        }
    }
}
</style>
