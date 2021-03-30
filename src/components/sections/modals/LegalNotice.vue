<template>
  <div class="legal-modal">
    <div class="legal-container">
      <button class="project-close" @click="$emit('closeLegal')">
        <div class="leftright"></div>
        <div class="rightleft"></div>
      </button>
      <div class="legal-content">
        <h1>Impressum</h1>

        <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
        <p>
          Armin Beckmann<br />
          Elstersteinstra&szlig;e.28<br />
          66386 St.Ingbert
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: 017676678872<br />
          E-Mail: hello@arminbeckmann.de
        </p>

        <h3>Haftung f&uuml;r Inhalte</h3>
        <p>
          Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs.1 TMG
          f&uuml;r eigene Inhalte auf diesen Seiten nach den allgemeinen
          Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
          Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
          gespeicherte fremde Informationen zu &uuml;berwachen oder nach
          Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit
          hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab
          dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung
          m&ouml;glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
          werden wir diese Inhalte umgehend entfernen.
        </p>
        <h3>Haftung f&uuml;r Links</h3>
        <p>
          Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf
          deren Inhalte wir keinen Einfluss haben. Deshalb k&ouml;nnen wir
          f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen.
          F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten
          Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche
          Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar.
        </p>
        <p>
          Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch
          ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h3>Urheberrecht</h3>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die
          Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
          Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes
          bed&uuml;rfen der schriftlichen Zustimmung des jeweiligen Autors bzw.
          Erstellers. Downloads und Kopien dieser Seite sind nur f&uuml;r den
          privaten, nicht kommerziellen Gebrauch gestattet.
        </p>
        <p>
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    mounted() {
        const html = document.querySelector("html");
        html.style.overflow = "hidden";
    },
    destroyed() {
        const html = document.querySelector("html");
        html.style.overflow = "";
    }
}
</script>

<style lang="scss" scoped>
.legal-modal {
  z-index: 99999;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;

  &.enter {
    overflow-y: auto;
  }

  &::-webkit-scrollbar-track {
    background-color: #171a1d;
  }

  &::-webkit-scrollbar {
    width: 6px;
    background-color: #171a1d;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    border: 0;
    background-color: $frog-green;
  }

  .legal-container {
    background: #1c1d25;
    width: 100%;
    position: relative;
    margin: auto;

    .project-close {
      position: absolute;
      top: 15px;
      right: 45px;
      z-index: 5;
      width: 65px;
      height: 65px;
      background-color: transparent;
      border: none;
      cursor: pointer;
      -webkit-transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);

      &:hover {
        .leftright {
          transform: rotate(-45deg);
          background-color: $fuchsia;
        }

        .rightleft {
          transform: rotate(45deg);
          background-color: $fuchsia;
        }
      }

      .leftright {
        height: 4px;
        width: 40px;
        position: absolute;
        margin-top: 24px;
        background-color: $fuchsia_light;
        border-radius: 2px;
        transform: rotate(45deg);
        transition: all 0.3s ease-in;
      }

      .rightleft {
        height: 4px;
        width: 40px;
        position: absolute;
        margin-top: 24px;
        background-color: $fuchsia_light;
        border-radius: 2px;
        transform: rotate(-45deg);
        transition: all 0.3s ease-in;
      }
    }

    .legal-content {
      position: relative;
      padding-top: 90px;
      display: flex;
      flex-direction: column;
      height: 100%;

       h1, h2 {
          font-weight: bold;
          font-size: 2rem;
      }

      & > * {
          font-size: 1.4rem;
          color: $white;
          padding: 1.5rem 3rem;
      }
    }
  }
}
</style>
