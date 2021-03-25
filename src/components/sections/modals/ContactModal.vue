<template>
  <div class="about-contact">
    <div id="contact-half" class="half-contact is-contact">
      <div class="giga-text">{{ $t("contact.contact") }}</div>
      <div class="contact-info">
        <h3 class="info-title">{{ $t("contact.contact") }}</h3>
        <div class="inner-container">
          <form id="contact-form" class="form" @submit.prevent="sendEmail">
            <div class="input">
              <input
                type="text"
                v-model="name"
                name="name"
                id="name"
                :placeholder="$t('contact.name')"
              />
              <span v-if="msg.name" class="invalid">{{ msg.name }}</span>
            </div>
            <div class="input">
              <input
                type="text"
                v-model="email"
                name="email"
                id="email"
                :placeholder="$t('contact.email')"
              />
              <span v-if="msg.email" class="invalid">{{ msg.email }}</span>
            </div>
            <div class="input">
              <textarea
                id="message"
                name="message"
                v-model="message"
                :placeholder="$t('contact.message')"
              ></textarea>
            </div>
            <div class="inner-container">
              <button
                type="submit"
                value="Send"
                class="paperplane-button"
                :disabled="!name.length || !email.length || !message.length || isDisabled"
                @click="animateAndClearForm"
              >
                <span class="default">{{ $t("contact.send") }}</span>
                <span class="success">
                  <svg viewBox="0 0 16 16">
                    <polyline points="3.75 9 7 12 13 5"></polyline></svg
                  >Sent
                </span>
                <svg class="trails" viewBox="0 0 33 64">
                  <path
                    d="M26,4 C28,13.3333333 29,22.6666667 29,32 C29,41.3333333 28,50.6666667 26,60"
                  ></path>
                  <path
                    d="M6,4 C8,13.3333333 9,22.6666667 9,32 C9,41.3333333 8,50.6666667 6,60"
                  ></path>
                </svg>
                <div class="plane">
                  <div class="left"></div>
                  <div class="right"></div>
                </div>
              </button>
            </div>
          </form>
        </div>
        <div class="close-contact" @click="closeContact">
          <div class="leftright"></div>
          <div class="rightleft"></div>
        </div>
      </div>
    </div>
    <div class="half-contact is-about">
      <div class="giga-text">{{ $t("about.me") }}</div>
      <div class="mini-me-wrapper">
        <!-- SVG of myself -->
        <svg
          width="1150"
          height="1000"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1150 1000"
        >
          <g id="body">
            <path
              d="M796.6 79c-200.4 43.3-210.1 219-272.1 240-162.1 55-272.8-45-363.2-22S17.6 391 17 479c-.9 127.8 39.3 321.2 286.5 392.7v-18.2c0-95.2 67.7-174.6 157.6-192.6.4-.1.7-.1 1.1-.2 1.3-.3 2.7-.5 4-.7l1.5-.3c1.2-.2 2.4-.4 3.7-.6.6-.1 1.2-.2 1.8-.2 1.2-.2 2.3-.3 3.5-.4.6-.1 1.3-.1 1.9-.2 1.1-.1 2.3-.2 3.4-.3.7-.1 1.3-.1 2-.2 1.1-.1 2.3-.2 3.4-.2.6 0 1.3-.1 1.9-.1 1.2-.1 2.5-.1 3.7-.2.6 0 1.1 0 1.7-.1 1.8 0 3.6-.1 5.4-.1 1.8 0 3.6 0 5.4.1.6 0 1.1 0 1.7.1 1.2 0 2.5.1 3.7.2.6 0 1.3.1 1.9.1 1.1.1 2.3.1 3.4.2.7.1 1.3.1 2 .2 1.1.1 2.3.2 3.4.3.6.1 1.3.1 1.9.2 1.2.1 2.3.3 3.5.4.6.1 1.2.2 1.8.2 1.2.2 2.4.4 3.7.6l1.5.3c1.4.2 2.7.5 4 .7.4.1.7.1 1.1.2C629 679 696.7 758.3 696.7 853.5v11.6c116-39.6 252.3-122.7 376.1-292.1 97.2-133 29.1-560-276.2-494z"
              fill="#62d6b8"
            />
            <path
              class="st1"
              d="M523.4 658.4c1.2.1 2.3.3 3.5.4-1.2-.1-2.4-.3-3.5-.4zM512.7 657.4c1.1.1 2.3.1 3.4.2-1.1 0-2.3-.1-3.4-.2zM518.1 657.8c1.1.1 2.3.2 3.4.3-1.2 0-2.3-.2-3.4-.3zM473.2 658.8c1.2-.2 2.3-.3 3.5-.4-1.2.1-2.4.3-3.5.4zM507.1 657.1c1.2 0 2.5.1 3.7.2-1.3-.1-2.5-.1-3.7-.2zM494.6 657.1c1.8 0 3.6-.1 5.4-.1-1.8 0-3.6 0-5.4.1zM489.2 657.3c1.2-.1 2.5-.1 3.7-.2-1.2.1-2.4.1-3.7.2zM483.9 657.7c1.1-.1 2.3-.2 3.4-.2-1.1 0-2.3.1-3.4.2zM478.5 658.2c1.1-.1 2.3-.2 3.4-.3-1.1 0-2.2.2-3.4.3zM500 657c1.8 0 3.6 0 5.4.1-1.8-.1-3.6-.1-5.4-.1zM462.2 660.7c1.3-.3 2.7-.5 4-.7-1.3.1-2.7.4-4 .7zM528.6 659.1c1.2.2 2.4.4 3.7.6-1.3-.3-2.5-.4-3.7-.6zM467.7 659.6c1.2-.2 2.4-.4 3.7-.6-1.2.3-2.4.4-3.7.6zM533.8 659.9c1.4.2 2.7.5 4 .7-1.3-.2-2.7-.5-4-.7z"
            />
            <path
              class="st2"
              d="M481.9 657.8c.7-.1 1.3-.1 2-.2-.7.1-1.3.2-2 .2zM466.2 659.9l1.5-.3-1.5.3zM471.4 659.1c.6-.1 1.2-.2 1.8-.2-.6 0-1.2.1-1.8.2zM461.1 660.9c.4-.1.7-.1 1.1-.2-.4 0-.7.1-1.1.2zM476.6 658.4c.6-.1 1.3-.1 1.9-.2-.6 0-1.2.1-1.9.2zM532.3 659.6l1.5.3-1.5-.3zM521.5 658.2c.6.1 1.3.1 1.9.2-.7-.1-1.3-.2-1.9-.2zM526.8 658.8c.6.1 1.2.2 1.8.2-.6 0-1.2-.1-1.8-.2zM516.1 657.7c.7.1 1.3.1 2 .2-.7-.1-1.3-.2-2-.2zM537.8 660.7c.4.1.7.1 1.1.2-.4-.1-.7-.2-1.1-.2zM487.3 657.4c.6 0 1.3-.1 1.9-.1-.6 0-1.3.1-1.9.1zM492.9 657.1c.6 0 1.1 0 1.7-.1-.6.1-1.1.1-1.7.1zM505.4 657.1c.6 0 1.1 0 1.7.1-.6-.1-1.1-.1-1.7-.1zM510.8 657.3c.6 0 1.3.1 1.9.1-.6 0-1.3-.1-1.9-.1z"
            />
            <path
              class="st1"
              d="M457 661.9c1.7-.4 3.4-.7 5.1-1.1-89.9 18.1-157.6 97.4-157.6 192.6v18.2c44 12.7 94.5 21.6 152.5 25.5V661.9zM538.9 660.9c1.7.3 3.4.7 5.1 1.1v235c43.4-3.5 95.5-12.4 152.5-31.8v-11.6c0-95.3-67.7-174.7-157.6-192.7z"
            />
            <path
              class="st2"
              d="M456 897.3c3.9.3 7.7.5 11.7.7 20.4 1.1 46.3 1.3 76.3-1.1v-235c-1.7-.4-3.4-.7-5.1-1.1-.4-.1-.7-.1-1.1-.2-1.3-.3-2.7-.5-4-.7l-1.5-.3c-1.2-.2-2.4-.4-3.7-.6-.6-.1-1.2-.2-1.8-.2-1.2-.2-2.3-.3-3.5-.4-.6-.1-1.3-.1-1.9-.2-1.1-.1-2.3-.2-3.4-.3-.7-.1-1.3-.1-2-.2-1.1-.1-2.3-.2-3.4-.2-.6 0-1.3-.1-1.9-.1-1.2-.1-2.5-.1-3.7-.2-.6 0-1.1 0-1.7-.1-1.8 0-3.6-.1-5.4-.1-1.8 0-3.6 0-5.4.1-.6 0-1.1 0-1.7.1-1.2 0-2.5.1-3.7.2-.6 0-1.3.1-1.9.1-1.1.1-2.3.1-3.4.2-.7.1-1.3.1-2 .2-1.1.1-2.3.2-3.4.3-.6.1-1.3.1-1.9.2-1.2.1-2.3.3-3.5.4-.6.1-1.2.2-1.8.2-1.2.2-2.4.4-3.7.6l-1.5.3c-1.4.2-2.7.5-4 .7-.4.1-.7.1-1.1.2-1.7.3-3.4.7-5.1 1.1v235.4z"
            />
          </g>
          <g id="neck">
            <path class="st3" d="M456 483h88v179h-88z" />
            <path
              class="st3"
              d="M456 600v80.1c11.4 11.1 26.9 17.9 44 17.9s32.6-6.8 44-17.9V600h-88z"
            />
          </g>
          <path
            class="st4"
            d="M456 553v80.1c11.4 11.1 26.9 17.9 44 17.9s32.6-6.8 44-17.9V553h-88z"
            id="head_shadow"
          />
          <g class="face">
            <path
              class="st3"
              d="M537.2 612h-73.4C382.7 612 317 543.9 317 460V305.4c0-87.5 68.5-158.4 153-158.4l30 12.4 31-12.4c84.5 0 153 70.9 153 158.4V460c0 83.9-65.7 152-146.8 152z"
              id="face"
            />
            <g class="inner-face">
              <g id="ears" class="ear">
                <circle class="st3" cx="309" cy="447" r="41" />
                <circle class="st3" cx="688" cy="447" r="41" />
                <path
                  class="st5"
                  d="M687.6 443.9c2-1.3 4.2-2.2 6.5-2.8 2.3-.6 4.7-.9 7.2-.8 2.4.1 4.9.3 7.2 1.3 2.2 1.1 4.3 2.6 5.6 4.7l-.2.2c-2.3-.7-4.4-1.5-6.5-2.1-2.1-.6-4.1-1.4-6.3-1.8-2.2-.3-4.4-.4-6.7-.1-2.2.2-4.5.8-6.6 1.6l-.2-.2zM314 443.9c-2-1.3-4.2-2.2-6.5-2.8-2.3-.6-4.7-.9-7.2-.8-2.4.1-4.9.3-7.2 1.3-2.2 1.1-4.3 2.6-5.6 4.7l.2.2c2.3-.7 4.4-1.5 6.5-2.1 2.1-.6 4.1-1.4 6.3-1.8 2.2-.3 4.4-.4 6.7-.1 2.2.2 4.5.8 6.6 1.6l.2-.2z"
                />
              </g>
              <g id="eyebrows">
                <linearGradient
                  id="SVGID_2_"
                  gradientUnits="userSpaceOnUse"
                  x1="382.519"
                  y1="302.47"
                  x2="435.737"
                  y2="302.47"
                >
                  <stop offset="0" stop-color="#42413f" />
                  <stop offset="1" stop-color="#1d1c18" />
                </linearGradient>
                <path
                  class="eyebrow-left"
                  d="M384.2 308.8c3.9-5.2 9.5-9 15.8-10.6 4-1 7.9.1 11.7 1.4 8 2.6 15.6 6.3 23 10.2 1.7.9 3.2-1.7 1.5-2.6-8.8-4.7-18.3-9.5-28.1-11.7-10.3-2.4-20.4 3.8-26.6 11.9-1 1.5 1.6 3 2.7 1.4z"
                  fill="url(#SVGID_2_)"
                />
                <g>
                  <linearGradient
                    id="SVGID_3_"
                    gradientUnits="userSpaceOnUse"
                    x1="566.273"
                    y1="302.47"
                    x2="619.491"
                    y2="302.47"
                  >
                    <stop offset="0" stop-color="#42413f" />
                    <stop offset="1" stop-color="#1d1c18" />
                  </linearGradient>
                  <path
                    class="eyebrow-right"
                    d="M620.4 307.3c-6.1-8-16.2-14.3-26.6-11.9-9.8 2.3-19.3 7-28.1 11.7-1.7.9-.2 3.5 1.5 2.6 7.4-3.9 15.1-7.6 23-10.2 3.8-1.2 7.7-2.4 11.7-1.4 6.3 1.6 11.9 5.5 15.8 10.6 1.2 1.7 3.9.2 2.7-1.4z"
                    fill="url(#SVGID_3_)"
                  />
                </g>
              </g>
              <g id="eyes">
                <ellipse
                  class="st6 eye-left eye"
                  cx="406.5"
                  cy="349.4"
                  rx="11.5"
                  ry="16.6"
                />
                <ellipse
                  class="st7 eye-left-2 eye"
                  cx="406.5"
                  cy="349.5"
                  rx="8"
                  ry="11.5"
                />
                <g>
                  <ellipse
                    class="st6 eye-right eye"
                    cx="594.5"
                    cy="349.4"
                    rx="11.5"
                    ry="16.6"
                  />
                  <ellipse
                    class="st7 eye-right-2 eye"
                    cx="594.5"
                    cy="349.5"
                    rx="8"
                    ry="11.5"
                  />
                </g>
              </g>
              <g id="nose">
                <path
                  d="M486.5 420c2.2 1 4.3 1.9 6.5 2.5 2.2.6 4.5 1 6.7 1.1 2.3.2 4.6.1 6.8-.3 2.3-.3 4.5-.9 6.8-1.6-1.9 1.5-4.1 2.5-6.5 3.2-2.4.6-4.8.9-7.3.7-2.4-.2-4.9-.7-7.1-1.6-2.1-1-4.2-2.3-5.9-4z"
                  fill="#afa9a0"
                  id="nose"
                />
              </g>
              <g id="mouth">
                <path
                  d="M455.8 487.6c20.8 21.9 55 27.9 82 14.4 1.7-.9.2-3.4-1.5-2.6-25.8 12.8-58.6 6.9-78.4-14-1.3-1.3-3.4.8-2.1 2.2z"
                  fill="#474747"
                  id="mouth"
                />
              </g>
              <g id="cheeks">
                <ellipse
                  transform="rotate(-10.091 393.409 400.924)"
                  class="st4"
                  cx="393.5"
                  cy="401"
                  rx="13.5"
                  ry="18"
                />
                <ellipse
                  transform="rotate(-79.909 601.87 401.01)"
                  class="st4"
                  cx="601.8"
                  cy="401"
                  rx="18"
                  ry="13.5"
                />
              </g>
              <g id="beard-inner-small">
                <path
                  class="st9"
                  d="M502.4 553.4s8.1-9.8 10.9-14.5c-3.6-.1-10.9-1.7-10.9-1.7-1 .2-2 .3-3 .4-1-.1-2-.3-3-.4 0 0-7.2 1.7-10.9 1.7 2.7 4.7 10.9 14.5 10.9 14.5 1-.3 5-.3 6 0z"
                />
              </g>
              <g id="beard-inner">
                <path
                  class="st9"
                  d="M540.2 471.1c-8.1-4-16.6-6.6-25.4-8.6-6.9-1.5-18.9-2.5-29.8 0-8.8 2-17.3 4.6-25.4 8.6-7.7 3.8-15.5 7.7-23.2 11.5 8.4 2.6 17.6 2.7 26 .1 9.9-3 16.1-4.8 26.3-4.4 4.5.1 8.3.2 11.2-1.3 2.9 1.5 6.7 1.5 11.2 1.3 10.2-.3 16.4 1.4 26.3 4.4 8.4 2.6 17.6 2.5 26-.1-7.7-3.8-15.4-7.7-23.2-11.5z"
                />
              </g>
            </g>
            <g id="outer-beard">
              <path
                class="st9"
                d="M664.8 449.7c-3.1 11.7-5.1 23.6-7 35.5-1.6 9.9-2.8 19.9-5.2 29.6-2.3 9.4-5.9 18.5-11.7 26.4-6 8.1-14 14.7-22.6 19.9-8.9 5.3-18.6 9.1-28.5 12.1-5.1 1.6-10.2 2.9-15.4 4.1-5.1 1.2-10.5 1.9-15.4 3.5-5.8 1.9-11.7 4.3-17.9 4.3-5.7 0-10.6-2.6-16-4.2-4.6-1.4-11-.8-15.6.3-3.5.8-14.3.8-17.8 0-4.7-1.1-11-1.7-15.6-.3-5.3 1.6-10.2 4.2-16 4.2-6.2 0-12.1-2.3-17.9-4.3-5-1.7-10.3-2.3-15.4-3.5-5.2-1.2-10.3-2.6-15.4-4.1-9.9-3-19.6-6.9-28.5-12.1-8.6-5.1-16.6-11.8-22.6-19.9-5.8-7.8-9.4-17-11.7-26.4-2.4-9.7-3.6-19.7-5.2-29.6-1.9-11.9-3.9-23.8-7-35.5-5-19-11.8-37.5-19.2-55.6V462c0 84 66.1 152 147.7 152h71.6c81.6 0 147.7-68.1 147.7-152v-67.9c-7.6 18.2-14.4 36.6-19.4 55.6z"
              />
            </g>
          </g>
          <g id="hair">
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="493.183"
              y1="267.368"
              x2="476.842"
              y2="50.857"
            >
              <stop offset="0" stop-color="#42413f" />
              <stop offset=".987" />
            </linearGradient>
            <path
              class="hair"
              d="M634.5 204.8c10.6 7.8 16.3 26 20.9 38.3 5.5 14.6 7.8 30.3 14 44.7 3.3 7.8 7.8 15.1 9.5 23.4 1.7 8.2.6 16.6-.5 24.9-5 40.7-7.2 83 5.8 121.9-1.2-10.8.8-20.4-.8-42.3-.5-7.7 3.1-15.2 7-21.8 12.5-21.3 43.6-29.6 48.3-54 2.9 2.5 5.8 5.1 8.6 7.6 1.4-9.9.7-20.1-2-29.7 3.6-.3 7.2-.7 10.8-1-31-19.9-20.5-75.2-50.5-96.7 3.7-.9 7.7-.3 10.9 1.7-1.4-15.1-18-22.7-28.6-33.3-23.6-23.9-18.2-67.9-43.1-90.4-8.7-7.8-20-11.9-31.1-15.1-25.1-7.3-51.1-11.6-77.2-12.6 1-2.2 2.1-4.3 3.1-6.5-12.6-.2-22.3-10.7-33.6-16.3-12.4-6.1-27.6-6-39.9.3-11.5 5.9-20 16.5-27.5 27.3-19-6.1-39.8-11.6-58.9-5.7-19 5.8-37.3 13.6-53.9 24.8-36.4 24.4-63.9 64.2-68.6 108.4-2.5 23.7 1.3 48.8-8 70.7-5.8 13.7-16.6 28.4-10 41.7.4-8.2 4.5-16.2 10.9-21.2-7.1 21.9 0 47.8 17.2 62.7-3-10.6-2.7-22.2.8-32.7-1.2 25.5 11.7 51.2 32.7 65-4.6-14.6-5.1-30.5-1.3-45.3-.9 11.6 1.9 23.5 7.9 33.4 3.3 5.5 4.1 7.1 6.6 13.1 3.2 7.9 3.4 21.5 3 30-.5 11.5.5 19.5 0 31 9.7-42.6 8.1-80.3 9-124 .2-11 12.6-25.1 16-35.5 2.5-7.5 6.8-14.4 8.2-22.2 1.5-8.6-.7-17.6.7-26.2 1.8-10.6 8.9-19.3 15.8-27.5 6.2-7.4 12.4-14.7 18.5-22.1 4.3-5.1 8.6-10.2 14.2-13.7 14.7-9.2 33.5-5 50.6-3.4 24.1 2.2 48.6-1.7 70.9-11.3 9.9-4.3 19.8-9.8 30.6-10 14.4-.3 27.2 8.7 38.8 17.3 14.8 10.7 29.5 21.5 44.2 32.3z"
              fill="url(#SVGID_1_)"
            />
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "emailjs-com";
import gsap from "gsap";

export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
      msg: [],
      isDisabled: false,
    };
  },
  mounted() {
    this.animateMiniMe();
  },
  watch: {
    email(value) {
      // binding this to the data value in the email input
      this.email = value;
      this.validateEmail(value);
    },
    name(value) {
      this.name = value;
      this.validateName(value);
    },
  },
  methods: {
    validateEmail(value) {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
        this.msg["email"] = "";
        this.isDisabled = false;
      } else {
        this.msg["email"] = "Invalid Email Address";
        this.isDisabled = true;
      }
    },
    validateName(value) {
      if (!value.length) {
        this.msg["name"] = "Name is required";
      } else {
        this.msg["name"] = "";
      }
    },
    animateMiniMe() {
      const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
      ).matches;

      if (!safeToAnimate) return;
      // Get the elements that we need
      const dom = {
        face: document.querySelector(".face"),
        innerFace: document.querySelector(".inner-face"),
        eye: document.querySelectorAll(".eye"),
        hair: document.querySelector(".hair"),
        ear: document.querySelectorAll(".ear"),
        eyebrowLeft: document.querySelector(".eyebrow-left"),
        eyebrowRight: document.querySelector(".eyebrow-right"),
      };

      let xPosition;
      let yPosition;

      let storedXPosition;
      let storedYPosition;

      // Set up our coordinate mapping with GSAP utils!
      let mapWidth;
      let mapHeight;

      function setMaps() {
        mapWidth = gsap.utils.mapRange(0, innerWidth, -50, 50);
        mapHeight = gsap.utils.mapRange(0, innerHeight, -50, 50);
      }
      window.addEventListener("resize", setMaps);
      setMaps();

      function moveSVG() {
        // only recalculating if the value changes
        if (storedXPosition === xPosition && storedYPosition === yPosition)
          return;
        var x = xPosition;
        var y = yPosition;

        gsap.to(dom.face, {
          yPercent: y / 30,
          xPercent: x / 30,
        });
        gsap.to(dom.eye, {
          yPercent: y / 3,
          xPercent: x / 2,
        });
        gsap.to(dom.innerFace, {
          yPercent: y / 6,
          xPercent: x / 6,
        });
        gsap.to(dom.hair, {
          yPercent: y / 15,
          xPercent: x / 22,
        });
        gsap.to(dom.ear, {
          yPercent: (y / 1.5) * -1,
          xPercent: (x / 10) * -1,
        });
        gsap.to([dom.eyebrowLeft, dom.eyebrowRight], {
          yPercent: y * 2.5,
        });

        // update the stored positions with the current positions
        storedXPosition = xPosition;
        storedYPosition = yPosition;
      }

      // gsap's RAF, falls back to set timeout
      gsap.ticker.add(moveSVG);

      // updating the mouse coordinates
      function updateMouseCoords(event) {
        xPosition = mapWidth(event.clientX);
        yPosition = mapHeight(event.clientY);
      }

      window.addEventListener("mousemove", updateMouseCoords);
    },
    sendEmail: (e) => {
      emailjs
        .sendForm(
          "service_unh9x8m",
          "template_c1dkja8",
          e.target,
          "user_BatA0UzJbm7mv43AnVe6G"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.status, result.text);
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    },
    animateAndClearForm() {
      const button = document.querySelector(".paperplane-button");

      let getVar = (variable) =>
        getComputedStyle(button).getPropertyValue(variable);

      if (!button.classList.contains("active")) {
        button.classList.add("active");

        gsap.to(button, {
          keyframes: [
            {
              "--left-wing-first-x": 50,
              "--left-wing-first-y": 100,
              "--right-wing-second-x": 50,
              "--right-wing-second-y": 100,
              duration: 0.2,
              onComplete() {
                gsap.set(button, {
                  "--left-wing-first-y": 0,
                  "--left-wing-second-x": 40,
                  "--left-wing-second-y": 100,
                  "--left-wing-third-x": 0,
                  "--left-wing-third-y": 100,
                  "--left-body-third-x": 40,
                  "--right-wing-first-x": 50,
                  "--right-wing-first-y": 0,
                  "--right-wing-second-x": 60,
                  "--right-wing-second-y": 100,
                  "--right-wing-third-x": 100,
                  "--right-wing-third-y": 100,
                  "--right-body-third-x": 60,
                });
              },
            },
            {
              "--left-wing-third-x": 20,
              "--left-wing-third-y": 90,
              "--left-wing-second-y": 90,
              "--left-body-third-y": 90,
              "--right-wing-third-x": 80,
              "--right-wing-third-y": 90,
              "--right-body-third-y": 90,
              "--right-wing-second-y": 90,
              duration: 0.2,
            },
            {
              "--rotate": 50,
              "--left-wing-third-y": 95,
              "--left-wing-third-x": 27,
              "--right-body-third-x": 45,
              "--right-wing-second-x": 45,
              "--right-wing-third-x": 60,
              "--right-wing-third-y": 83,
              duration: 0.25,
            },
            {
              "--rotate": 60,
              "--plane-x": -8,
              "--plane-y": 40,
              duration: 0.2,
            },
            {
              "--rotate": 40,
              "--plane-x": 45,
              "--plane-y": -300,
              "--plane-opacity": 0,
              duration: 0.375,
              onComplete() {
                setTimeout(() => {
                  button.removeAttribute("style");
                  gsap.fromTo(
                    button,
                    {
                      opacity: 0,
                      y: -8,
                    },
                    {
                      opacity: 1,
                      y: 0,
                      clearProps: true,
                      duration: 0.3,
                      onComplete() {
                        button.classList.remove("active");
                      },
                    }
                  );
                }, 1800);
              },
            },
          ],
        });

        gsap.to(button, {
          keyframes: [
            {
              "--text-opacity": 0,
              "--border-radius": 0,
              "--left-wing-background": getVar("--primary-dark"),
              "--right-wing-background": getVar("--primary-dark"),
              duration: 0.11,
            },
            {
              "--left-wing-background": getVar("--primary"),
              "--right-wing-background": getVar("--primary"),
              duration: 0.14,
            },
            {
              "--left-body-background": getVar("--primary-dark"),
              "--right-body-background": getVar("--primary-darkest"),
              duration: 0.25,
              delay: 0.1,
            },
            {
              "--trails-stroke": 171,
              duration: 0.22,
              delay: 0.22,
            },
            {
              "--success-opacity": 1,
              "--success-x": 0,
              duration: 0.2,
              delay: 0.15,
            },
            {
              "--success-stroke": 0,
              duration: 0.15,
            },
          ],
        });
      }
    },
    closeContact() {
      const contactModal = document.querySelector(".about-contact");
      contactModal.classList.remove("isopen");
      const html = document.querySelector("html");
      html.style.overflow = "";
      this.clearForm();
    },
    clearForm() {
      (this.name = ""), (this.email = ""), (this.message = "");
      this.msg = [];
    },
  },
};
</script>

<style lang="scss" scoped>
.paperplane-button {
  --primary: #f6f8ff;
  --primary-dark: #d1d6ee;
  --primary-darkest: #8a91b4;
  --shadow: #{rgba(#000, 0.3)};
  --text: #e91e63;
  --text-opacity: 1;
  --success: #eeecff;
  --success-x: -12;
  --success-stroke: 14;
  --success-opacity: 0;
  --border-radius: 7;
  --overflow: hidden;
  --x: 0;
  --y: 0;
  --rotate: 0;
  --plane-x: 0;
  --plane-y: 0;
  --plane-opacity: 1;
  --trails: #{rgba(#fff, 0.15)};
  --trails-stroke: 57;
  --left-wing-background: var(--primary);
  --left-wing-first-x: 0;
  --left-wing-first-y: 0;
  --left-wing-second-x: 50;
  --left-wing-second-y: 0;
  --left-wing-third-x: 0;
  --left-wing-third-y: 100;
  --left-body-background: var(--primary);
  --left-body-first-x: 50;
  --left-body-first-y: 0;
  --left-body-second-x: 50;
  --left-body-second-y: 100;
  --left-body-third-x: 0;
  --left-body-third-y: 100;
  --right-wing-background: var(--primary);
  --right-wing-first-x: 50;
  --right-wing-first-y: 0;
  --right-wing-second-x: 100;
  --right-wing-second-y: 0;
  --right-wing-third-x: 100;
  --right-wing-third-y: 100;
  --right-body-background: var(--primary);
  --right-body-first-x: 50;
  --right-body-first-y: 0;
  --right-body-second-x: 50;
  --right-body-second-y: 100;
  --right-body-third-x: 100;
  --right-body-third-y: 100;
  display: block;
  cursor: pointer;
  position: relative;
  border: 0;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  margin: 0;
  line-height: 2.4rem;
  font-weight: 600;
  font-size: 1.6rem;
  background: none;
  outline: none;
  color: var(--text);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  .plane,
  .trails {
    pointer-events: none;
    position: absolute;
  }
  .plane {
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    filter: drop-shadow(0 3px 6px var(--shadow));
    transform: translate(calc(var(--x) * 1px), calc(var(--y) * 1px))
      rotate(calc(var(--rotate) * 1deg)) translateZ(0);
    .left,
    .right {
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      opacity: var(--plane-opacity);
      transform: translate(
          calc(var(--plane-x) * 1px),
          calc(var(--plane-y) * 1px)
        )
        translateZ(0);
      &:before,
      &:after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: calc(var(--border-radius) * 1px);
        transform: translate(var(--part-x, 0.4%), var(--part-y, 0))
          translateZ(0);
        z-index: var(--z-index, 2);
        background: var(--background, var(--left-wing-background));
        clip-path: polygon(
          calc(var(--first-x, var(--left-wing-first-x)) * 1%)
            calc(var(--first-y, var(--left-wing-first-y)) * 1%),
          calc(var(--second-x, var(--left-wing-second-x)) * 1%)
            calc(var(--second-y, var(--left-wing-second-y)) * 1%),
          calc(var(--third-x, var(--left-wing-third-x)) * 1%)
            calc(var(--third-y, var(--left-wing-third-y)) * 1%)
        );
      }
    }
    .left:after {
      --part-x: 0;
      --z-index: 1;
      --background: var(--left-body-background);
      --first-x: var(--left-body-first-x);
      --first-y: var(--left-body-first-y);
      --second-x: var(--left-body-second-x);
      --second-y: var(--left-body-second-y);
      --third-x: var(--left-body-third-x);
      --third-y: var(--left-body-third-y);
    }
    .right:before {
      --part-x: -0.4%;
      --z-index: 2;
      --background: var(--right-wing-background);
      --first-x: var(--right-wing-first-x);
      --first-y: var(--right-wing-first-y);
      --second-x: var(--right-wing-second-x);
      --second-y: var(--right-wing-second-y);
      --third-x: var(--right-wing-third-x);
      --third-y: var(--right-wing-third-y);
    }
    .right:after {
      --part-x: 0;
      --z-index: 1;
      --background: var(--right-body-background);
      --first-x: var(--right-body-first-x);
      --first-y: var(--right-body-first-y);
      --second-x: var(--right-body-second-x);
      --second-y: var(--right-body-second-y);
      --third-x: var(--right-body-third-x);
      --third-y: var(--right-body-third-y);
    }
  }
  .trails {
    display: block;
    width: 33px;
    height: 64px;
    top: -4px;
    left: 16px;
    fill: none;
    stroke: var(--trails);
    stroke-linecap: round;
    stroke-width: 2;
    stroke-dasharray: 57px;
    stroke-dashoffset: calc(var(--trails-stroke) * 1px);
    transform: rotate(68deg) translateZ(0);
  }
  span {
    display: block;
    position: relative;
    z-index: 4;
    opacity: var(--text-opacity);
    &.success {
      z-index: 0;
      position: absolute;
      left: 0;
      right: 0;
      top: 8px;
      transform: translateX(calc(var(--success-x) * 1px)) translateZ(0);
      opacity: var(--success-opacity);
      color: var(--success);
      svg {
        display: inline-block;
        vertical-align: top;
        width: 16px;
        height: 16px;
        margin: 4px 8px 0 0;
        fill: none;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 14px;
        stroke: var(--success);
        stroke-dashoffset: calc(var(--success-stroke) * 1px);
      }
    }
  }
}

.about-contact {
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 1000px;
  height: 90%;
  z-index: 9999;
  position: fixed;
  background-color: transparent;
  overflow: hidden;
  visibility: hidden;
  transition: visibility 1s, z-index 1s, box-shadow 0.3s;

  &.isopen {
    visibility: visible;
    box-shadow: 0 20px 80px 0 rgba(0, 0, 0, 0.55);
    transition: visibility 1s, z-index 1s, box-shadow 0.5s ease 0.4s;

    .half-contact {
      opacity: 1 !important;
      -webkit-transform: translateY(0) !important;
      transform: translateY(0) !important;

      .is-about {
        transition-delay: 0s;
      }
      .is-contact {
        transition-delay: 0.2s;
      }
    }
  }

  .giga-text {
    font-size: 190px;
    position: absolute;
    opacity: 0.07;
    z-index: 0;
  }

  .half-contact {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 50%;
    height: 100%;
    overflow: hidden;

    .contact-info {
      position: absolute;
      -webkit-transform-style: preserve-3d;
      transform-style: preserve-3d;
      left: 50%;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
      top: 17%;
      text-align: left;
      width: 70%;
      margin: 0 auto;

      .close-contact {
        position: absolute;
        display: block;
        padding: 12px;
        top: -55px;
        right: -5px;
        cursor: pointer;
        color: #fff;
        width: 65px;
        height: 65px;
        transition: all 0.3s ease;
        z-index: 10;

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
          width: 50px;
          position: absolute;
          margin-top: 24px;
          background-color: $fuchsia_light;
          border-radius: 2px;
          transform: rotate(45deg);
          transition: all 0.3s ease-in;
        }

        .rightleft {
          height: 4px;
          width: 50px;
          position: absolute;
          margin-top: 24px;
          background-color: $fuchsia_light;
          border-radius: 2px;
          transform: rotate(-45deg);
          transition: all 0.3s ease-in;
        }
      }

      .info-title {
        font-size: 2.6rem;
        font-weight: bold;
      }
    }

    &.is-about {
      transition-delay: 0.2s;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      background-color: hsla(0, 0%, 95%, 0.97);
      transition: opacity 0.3s,
        -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s;
      transition: transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s,
        -webkit-transform 0.5s cubic-bezier(0.694, 0.048, 0.335, 1);
      z-index: 60;

      .giga-text {
        top: -10px;
        left: 100px;
        color: #4a4a4a;
      }

      .mini-me-wrapper {
        display: flex;
        align-items: center;
        height: 100%;
        overflow: hidden;
        svg {
          margin: 0 auto;
          display: block;

          .st1 {
            fill: #383637;
          }

          .st2 {
            fill: #fff;
          }

          .st3 {
            fill: #f7ccba;
          }

          .st4 {
            fill: #efb6b6;
          }

          .st5 {
            fill: #9c9896;
          }

          .st6 {
            fill: #598478;
          }

          .st7 {
            fill: #232a32;
          }

          .st9 {
            fill: #606060;
          }
        }
      }
    }

    &.is-contact {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      background-color: rgba(28, 29, 37, 0.985);
      left: auto;
      right: 0;
      transition: opacity 0.3s,
        -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
      transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s;
      transition: transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1),
        opacity 0.3s,
        -webkit-transform 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
      z-index: 59;

      .contact-info {
        color: $white;

        .inner-container {
          width: 100%;
          position: relative;

          .form {
            padding: 20px 0 0;
            width: 100%;
            position: relative;
            .input {
              margin-bottom: 33px;
              width: 100%;
              position: relative;

              .invalid {
                position: absolute;
                font-size: 1.2rem;
                color: red;
              }

              &:hover {
                &::before,
                &::after {
                  width: 101%;
                }
              }

              &::before,
              &::after {
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 2px;
                transition: width 0.45s cubic-bezier(0.694, 0.048, 0.335, 1);
              }

              &::before {
                background: #26408b;
                transition-delay: 0.1s;
                z-index: 10;
              }

              &::after {
                background: #f06449;
                z-index: 9;
              }

              textarea {
                width: 100%;
                border: 0;
                border-bottom: 2px solid silver;
                padding: 8px 5px;
                font-size: 1.5rem;
                background: transparent;
                color: silver;
                transition: border-color 0.25s;
                height: auto;
                min-height: 100px;
                margin: 0;

                &:focus {
                  outline: none;
                  border-color: #26408b;
                }
              }

              input {
                display: block;
                width: 100%;
                border: 0;
                border-bottom: 2px solid silver;
                padding: 8px 5px;
                font-size: 1.5rem;
                border-radius: 0;
                background: transparent;
                color: silver;
                transition: border-color 0.25s;

                &:focus {
                  outline: none;
                  border-color: #26408b;
                }
              }
            }

            /*
            .button {
              font-size: 2rem;
              letter-spacing: 3px;
              padding: 12px 20px;
              background-color: #f06449;
              background: linear-gradient(270deg, #f06449, #ef3636);
              color: $white;
              position: relative;
              transition: all 0.3s;
              display: inline-block;
              text-align: center;
              vertical-align: middle;

              &.submit-btn {
                cursor: pointer;
                text-decoration: none;
                border: 0;
                border-radius: 4px;
              }

              &:hover {
                .button-mask {
                  &::before,
                  &::after {
                    -webkit-transform: translateX(200%);
                    transform: translateX(200%);
                  }
                }
              }

              .button-mask::after,
              .button-mask::before {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                -webkit-transform: translateX(-110%);
                transform: translateX(-110%);
              }

              .button-mask {
                content: "";
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;

                &::after {
                  width: 80%;
                  background-color: #26408b;
                  background: linear-gradient(270deg, #235aa6, #213777);
                  transition: -webkit-transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1);
                  transition: transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1);
                  transition: transform 0.6s
                      cubic-bezier(0.694, 0.048, 0.335, 1),
                    -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1);
                  z-index: 2;
                }

                &::before {
                  width: 100%;
                  background-color: #1b2e63;
                  background: linear-gradient(270deg, #235aa6, #101b3b);
                  transition: -webkit-transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  transition: transform 0.6s
                    cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  transition: transform 0.6s
                      cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s,
                    -webkit-transform 0.6s cubic-bezier(0.694, 0.048, 0.335, 1) 0.05s;
                  z-index: 1;
                }
              }

              .button-text {
                position: relative;
                z-index: 3;
              }
            }
*/
          }
        }
      }

      .giga-text {
        bottom: -30px;
        right: -200px;
        color: #fff;
        opacity: 0.03;
      }
    }
  }
}

@media only screen and (min-width: 75em) {
  .about-contact {
    width: 1170px;
  }
}

@media only screen and (max-width: 64em) {
  .about-contact {
    width: 95%;
  }
}

@media only screen and (max-width: 53.125em) {
  .about-contact {
    width: 100%;
    height: 100%;
    overflow-y: auto;

    .half-contact {
      position: relative;
      top: auto;
      left: auto;
      float: left;
      width: 100%;
      height: auto;
      padding: 40px 0;
      &.is-about,
      &.is-contact {
        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
      }

      &.is-about {
        .mini-me-wrapper {
          svg {
            width: 500px;
            height: 500px;
          }
        }
      }

      .contact-info {
        position: absolute;
        -webkit-transform-style: preserve-3d;
        transform-style: preserve-3d;
        left: 50%;
        -webkit-transform: translateX(-50%);
        transform: translateX(-50%);
        position: relative;
        top: auto;
        left: auto;
        -webkit-transform: none;
        transform: none;
        -webkit-transform-style: initial;
        transform-style: flat;
      }
    }

    &.isopen {
      .half-contact {
        transition-delay: 0s !important;
        opacity: 1 !important;
        -webkit-transform: translateX(0) !important;
        transform: translateX(0) !important;

        &.is-contact {
          right: auto;
          padding-top: 80px;
        }
      }
    }
  }
}

@media only screen and (max-width: 28.75em) {
  .about-contact .half-contact .contact-info {
    width: 85%;
  }
}
</style>
