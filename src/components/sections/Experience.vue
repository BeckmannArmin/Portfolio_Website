<template>
  <section id="experience">
    <div class="container">
      <div class="mb-4">
        <h1 data-aos="fade-in" class="section-title fuchsia-text">
          {{ $t("experience.resume") }}
        </h1>
        <div style="height: 50px"></div>
        <!-- Employment -->
        <h2 class="subsection-title fuchsia-text">
          {{ 
          $t("experience.experience") 
          }}
        </h2>
        <div class="col-md-12">
          <ul class="timeline">
             <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  {{ $t("experience.date_minarc") }}
                </p>
                <h3>Gründung der Minarc UG</h3>
                <p>
                  <strong>{{ $t("experience.minarc") }}</strong>
                  <br />
                  {{ $t("experience.minarc_desc") }}
                </p>
              </div>
            </li>
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  {{ $t("experience.date_eye") }}
                </p>
                <h3>Eyeled GmbH</h3>
                <p>
                  <strong>{{ $t("experience.eyeled") }}</strong>
                  <br />
                  {{ $t("experience.eyeled_desc") }}
                </p>
              </div>
            </li>
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  {{ $t("experience.thesis_date") }}
                </p>
                <h3>{{ $t("experience.thesis_title") }}</h3>
                <p>
                  {{ $t("experience.thesis") }}
                </p>
              </div>
            </li>
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  {{ $t("experience.intern_date") }}
                </p>
                <h3>Eyeled GmbH</h3>
                <p class="text-left">
                  <strong>{{ $t("experience.intern_eye") }}</strong>
                  <br />
                  {{ $t("experience.intern_desc") }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <!-- Study -->
        <h2 class="subsection-title fuchsia-text" style="padding-top: 100px">
          {{ $t("experience.education") }}
        </h2>
        <div class="col-md-12">
          <ul class="timeline">
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  2020 - 2022
                </p>
                <h3>{{ $t("experience.study") }}</h3>
                <p class="text-left">
                  <strong>{{ $t("experience.study_master") }}</strong>
                  <br />
                  {{ $t("experience.study_master_desc") }}
                </p>
              </div>
            </li>
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">2016 - 2020</p>
                <h3>{{ $t("experience.study") }}</h3>
                <p>
                  <strong>{{ $t("experience.study_deg") }}</strong>
                  <br />
                  {{ $t("experience.study_desc") }}
                </p>
              </div>
            </li>
            <li class="position-relative" data-aos="fade-up" data-aos-duration="1450">
              <label class="timeline-event-icon"></label>
              <div class="timeline-event-copy text-left">
                <p class="timeline-event-thumbnail">
                  {{ $t("experience.thesis_date") }}
                </p>
                <h3>{{ $t("experience.thesis_title") }}</h3>
                <p>
                  {{ $t("experience.thesis") }}
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.dark {
 #experience {
     background: $bg-dark;
     .section-title {
         color: $section-title-dark;
         &:after {
      color: $fuchsia;
    }
     }

     .subsection-title {
         color: $frog-green;
     }
 }
}

#experience {
    background: #fff;
  p {
    font-size: 1.6rem;
  }
  padding-top: 90px;
  padding-bottom: 90px;
  .section-title {
    position: relative;
    margin: 0 0 4.5rem;
    font-size: 4.5rem;
    font-weight: 700;

    &:after {
      content: ".";
      color: $frog-green;
    }
  }

  .rounded {
    border-top: 8px solid $fuchsia-light;
    position: relative;
    border-radius: 5px;
    width: 35%;
  }

  .subsection-title {
    position: relative;
    margin: 0 0 4.5rem;
    font-size: 3rem;
    font-weight: 600;
  }

  .subsubsection-title {
    position: relative;
    margin: 0 0 4.5rem;
    font-size: 2.5rem;
    font-weight: 600;
  }

  .fuchsia-text {
    color: $text-main;
  }

  .timeline {
    padding-left: 0;
    list-style: none;
    position: relative;

    &:before {
      background-color: $black;
      content: "";
      margin-left: -1px;
      position: absolute;
      top: 0;
      left: 2em;
      width: 2px;
      height: 100%;
    }

    .timeline-event-icon {
      -webkit-transition: -webkit-transform 0.2s ease-in;
      transition: -webkit-transform 0.2s ease-in;
      transition: transform 0.2s ease-in;
      transition: transform 0.2s ease-in, -webkit-transform 0.2s ease-in;
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      background-color: $fuchsia-light;
      outline: 10px solid $neutral-grey;
      display: block;
      margin: 0.5em 0.5em 0.5em -0.5em;
      position: absolute;
      top: 0;
      left: 2em;
      width: 1em;
      height: 1em;
    }

    .timeline-event-copy {
      padding: 2em;
      position: relative;
      top: -1.875em;
      left: 4em;
      width: 100%;

      .timeline-event-thumbnail {
        -moz-transition: box-shadow 0.5s ease-in 0.1s;
        -o-transition: box-shadow 0.5s ease-in 0.1s;
        -webkit-transition: box-shadow 0.5s ease-in;
        -webkit-transition-delay: 0.1s;
        -webkit-transition: box-shadow 0.5s ease-in 0.1s;
        transition: box-shadow 0.5s ease-in 0.1s;
        color: white;
        font-size: 12px;
        font-weight: bold;
        background-color: $fuchsia_light;
        box-shadow: inset 0 0 0 0em $blue;
        display: inline-block;
        margin-bottom: 1.2em;
        padding: 0.25em 1em 0.2em 1em;
      }
    }
  }
}

/** Media quueries */
@media (max-width: 37.5em) {
  section {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  #experience {
    .section-title {
      font-size: 2.8rem;
    }
    .subsection-title {
      font-size: 1.8rem;
    }
  }
}
</style>
