<template>
  <div>
    <div class="header_Container">
      <div class="header">
        <NavBar />
      </div>
    </div>
    <div class="bodyPage container">
      <div class="bodyText">
        <div class="headingText">Select A Color That Matches Your Brand.</div>
        <div class="subText">
          Our team created this tool to help users test color designs for their
          new website. Simply click the color picker button on the right to try
          it out.
        </div>

        <button class="callAction colorCode">Call To Action 2</button>
      </div>

      <div class="aboutContainer">
        <div class="imageContainer">
          <img
            src="https://demo.braxwebdesign.com/wp-content/uploads/2024/04/happy-brunette-female-employee-or-teacher-in-forma-2023-11-27-05-09-57-utc-scaled-e1708370008370.jpg"
            alt=""
            class="img-contain"
          />
        </div>
        <div class="aboutDetails">
          <div class="about_Text">About</div>
          <div class="textContainer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            nisi id lorem blandit consequat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae nte ipsum.
          </div>
          <div>
            <div
              class="someBtnText d-flex align-items-center"
              v-for="(data, index) in someText"
              :key="index"
            >
              <div class="someStyle colorCode">
                <img
                  src="../assets/check.png"
                  alt=""
                  width="12px"
                  height="12px"
                />
              </div>
              <div
                style="
                  margin-left: 10px;
                  color: #000;
                  font-size: 1rem;
                  font-weight: 500;
                "
              >
                {{ data.text }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="display: flex; margin-top: 8rem; padding-right: 6rem">
        <div
          class="servicesContainer"
          v-for="(data, index) in services"
          :key="index"
          style=""
        >
          <div class="servicesIcon colorCode">
            <img src="../assets/chart.png" alt="" width="30px" height="30px" />
          </div>
          <div class="servicesDetails">
            <div class="servicesHeader">{{ data.heading }}</div>
            <div class="servicesText">{{ data.serviceText }}</div>
            <button class="readBtn">Read more</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";

export default {
  name: "homePage",
  components: { NavBar },

  data() {
    return {
      someText: [
        { text: "Some Text Here" },
        { text: "Some Text Here" },
        { text: "Some Text Here" },
        { text: "Some Text Here" },
      ],
      services: [
        {
          heading: "Services",
          serviceText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          heading: "Services",
          serviceText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          heading: "Services",
          serviceText:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<style  scoped>
.header {
  top: 0;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  background-color: #ffff;
  z-index: 160;

  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
}
.header_Container {
  min-height: 100px;
}
.bodyPage {
  padding: 30px;
  margin-top: 5rem;
}
.headingText {
  font-size: 4.5rem;
  font-weight: 800;
  line-height: 5rem;
  color: #000;
}
.subText {
  font-size: 1rem;
  margin-top: 1.5rem;
}
.bodyText {
  width: 550px;
}

.callAction {
  font-size: 1rem;
  border: none;
  color: #ffff;
  padding: 16px 25px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 4rem;
}
.callAction:hover {
  transform: rotateX("angle");
}

.colorCode {
  background-color: black;
}
.img-contain {
  height: 600px;
  width: 600px;
  object-fit: contain;
  border-radius: 20px;
  filter: grayscale(1);
}
/* .imageContainer {
  min-width: 440px;
  min-height: 440px;
} */
.aboutDetails {
  margin-left: 5.6rem;
}
.textContainer {
  font-size: 1rem;
  color: #000;
  line-height: 25px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 27vw;
}
.about_Text {
  font-size: 2.5rem;
  font-weight: 800;
}
.aboutContainer {
  margin-top: 15rem;
  display: flex;
  align-items: center;

  /* justify-content: space-between; */
}
.someBtnText {
  box-shadow: 0 5px 30px 0 rgba(210, 210, 210, 0.5);
  border-radius: 10px 10px 10px 10px;
  padding: 15px 20px 15px 20px;
  margin: 10px 0;
  display: flex;
  align-items: center;
  width: 350px;
}
.someStyle {
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.servicesIcon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-right: 20px;
}

.servicesHeader {
  font-size: 1.8rem;
  color: #000;
  font-weight: 700;
}

.readBtn {
  font-size: 14px;
  background: #f6f6f6;
  color: #363445;
  padding: 10px 20px;
  font-weight: 500;
  border: none;
  border-radius: 50px;
  margin-top: 2rem;
}
.servicesText {
  font-size: 15px;
  color: #000;
  line-height: 25px;
  margin-top: 1rem;
}
.servicesContainer {
  display: flex;
  margin-right: 4rem;
}
@media screen and (max-width: 992px) {
  .headingText {
    font-size: 3.2rem;
    line-height: 3rem;
  }
  .aboutContainer {
    margin-top: 15rem;
    display: flex;
  }
}
</style>