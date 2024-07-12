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

        <button
          class="callAction colorCode"
          :style="{ backgroundColor: selectedColor }"
        >
          Call To Action 2
        </button>
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
              <div
                class="someStyle colorCode"
                :style="{ backgroundColor: selectedColor }"
              >
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
      <div class="container">
        <div class="servicesDesign">
          <div
            class="servicesContainer"
            v-for="(data, index) in services"
            :key="index"
          >
            <div style="width: 90px">
              <div
                class="servicesIcon colorCode"
                :style="{ backgroundColor: selectedColor }"
              >
                <img
                  src="../assets/Group 3131.svg"
                  alt=""
                  width="25px"
                  height="25px"
                />
              </div>
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
    <div class="contactContainer">
      <div class="container contactDetails">
        <div class="contactText">
          <div class="contactHeadline">Contact</div>

          <div class="contact_Text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
            nisi id lorem blandit consequat. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia curae; Pellentesque
            consectetur.
          </div>
          <button
            class="callAction3 colorCode"
            :style="{ backgroundColor: selectedColor }"
          >
            Call To Action 3
          </button>
        </div>
        <div class="imageContainer">
          <img
            src="https://demo.braxwebdesign.com/wp-content/uploads/2024/04/portrait-of-a-mixed-race-cheerful-businessman-remo-2023-11-27-05-01-04-utc-1-scaled-1.jpg"
            alt=""
            class="img-contain"
          />
        </div>
      </div>
    </div>

    <div class="colorPopPage" v-if="showAdditionalContent">
      <div class="pageContainer row">
        <div
          class="colorSet col-4 colorChoose1"
          @click="addClassToBox2('colorChoose1')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose2"
          @click="addClassToBox2('colorChoose2')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose3"
          @click="addClassToBox2('colorChoose3')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose4"
          @click="addClassToBox2('colorChoose4')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose5"
          @click="addClassToBox2('colorChoose5')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose6"
          @click="addClassToBox2('colorChoose6')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose7"
          @click="addClassToBox2('colorChoose7')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose8"
          @click="addClassToBox2('colorChoose8')"
        >
          color Set
        </div>
        <div
          class="colorSet col-4 colorChoose9"
          @click="addClassToBox2('colorChoose9')"
        >
          color Set
        </div>
      </div>
    </div>
    <div class="functionBtn">
      <div>
        <div>
          <button
            class="selectBtn colorCode"
            style="margin-top: 10px"
            @click="toggleDiv"
            :style="{ backgroundColor: selectedColor }"
          >
            Select Color
          </button>
        </div>
        <div>
          <button
            class="selectBtn colorCode"
            style="margin-top: 10px"
            :style="{ backgroundColor: selectedColor }"
          >
            Create Logo
          </button>
        </div>
        <div>
          <button
            class="selectBtn colorCode"
            style="margin-top: 10px"
            :style="{ backgroundColor: selectedColor }"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "./NavBar.vue";
import functionBtn from "./functionBtn.vue";

export default {
  name: "homePage",
  components: { NavBar, functionBtn },

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
      showAdditionalContent: false,
      colorChoose1: false,
      selectedColor: "",
    };
  },

  methods: {
    toggleDiv() {
      this.showAdditionalContent = !this.showAdditionalContent;
    },
    addClassToBox2(colorClass) {
      // Reset all colorChoose properties
      this.resetColorClasses();

      // Set the chosen color class
      this[colorClass] = true;

      // Update selectedColor based on the chosen color class
      switch (colorClass) {
        case "colorChoose1":
          this.selectedColor = "#008000";
          break;
        case "colorChoose2":
          this.selectedColor = "#800080";
          break;
        case "colorChoose3":
          this.selectedColor = "#ff0000";
          break;
        case "colorChoose4":
          this.selectedColor = "#00ff00";
          break;
        case "colorChoose5":
          this.selectedColor = "#800000";
          break;
        case "colorChoose6":
          this.selectedColor = "#ff00ff";
          break;
        case "colorChoose7":
          this.selectedColor = "#00ffff";
          break;
        case "colorChoose8":
          this.selectedColor = "#ffff00";
          break;
        case "colorChoose9":
          this.selectedColor = "#0000ff";
          break;
        default:
          this.selectedColor = "";
      }
      console.log("Selected Color:", this.selectedColor);
    },
    resetColorClasses() {
      // Reset all colorChoose properties to false
      this.colorChoose1 = false;
      this.colorChoose2 = false;
      this.colorChoose3 = false;
      this.colorChoose4 = false;
      this.colorChoose5 = false;
      this.colorChoose6 = false;
      this.colorChoose7 = false;
      this.colorChoose8 = false;
      this.colorChoose9 = false;
    },
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

.callAction,
.callAction3 {
  font-size: 1rem;
  border: none;
  color: #ffff;
  padding: 16px 25px;
  border-radius: 50px;
  cursor: pointer;
  margin-top: 4rem;
}
.callAction3 {
  margin-top: 0.5rem;
}
.callAction:hover {
  transform: rotateX("angle");
}

.colorCode {
  background-color: black;
}
.img-contain {
  height: 100%;
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
  filter: grayscale(1);
}
.imageContainer {
  min-height: 20vh;
  min-width: 20vw;
}

.aboutDetails {
  margin-left: 5.6rem;
}
.textContainer,
.contact_Text {
  font-size: 1rem;
  color: #000;
  line-height: 25px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  width: 27vw;
}
.about_Text,
.contactHeadline {
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
  border-radius: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  margin-right: 20px;
}

.servicesHeader {
  font-size: 1.3rem;
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
  justify-content: center;
  align-content: center;
  flex-direction: row;

  margin-right: 4rem;
}
.servicesDesign {
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: row;
  margin-top: 12rem;
}

.servicesDetails {
  margin-top: 1rem;
}
.contactContainer {
  background-color: #f8f8f8;
  min-height: 700px;
  margin-top: 5rem;
  display: flex;
  align-content: space-around;
  /* justify-content: center; */
  align-items: center;
}
.contactDetails {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}

@media screen and (max-width: 992px) {
  .headingText {
    font-size: 3.2rem;
    line-height: 3rem;
  }
  .aboutContainer {
    margin-top: 15rem;
    flex-direction: column;
  }
  .aboutDetails {
    margin-left: 0rem;
    padding-left: 0;
    padding-top: 50px;
  }
  .textContainer,
  .contact_Text {
    width: 100%;
  }
  .servicesDesign {
    flex-direction: column;
    margin-top: 5rem;
  }
  .contactDetails {
    flex-direction: column;
  }
  .contactText {
    margin-bottom: 2rem;
  }
  .servicesContainer {
    margin-right: 0px;
    justify-content: flex-start;
    margin-bottom: 1.2rem;
  }
  .contactContainer {
    padding-top: 100px;
    padding-bottom: 200px;
  }
}
.callAction:hover {
  transform: perspective(200px) rotateY(15deg);
}
</style>

<style scoped>
.selectBtn {
  border: none;
  padding: 9px;
  font-size: 17px;
  color: #fff;
}
.functionBtn {
  position: fixed;
  top: 300px;
  right: 0;
}
.pageContainer {
  height: 400px;
  width: 500px;
  background-color: #fff; /* Set background color to white */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* White box shadow */
}
.colorPopPage {
  position: fixed;
  top: 465px;
  right: 0;
}
.colorSet {
  border: 1px solid;
  cursor: pointer;
}
.colorChoose1 {
  background-color: #008000;
}
.colorChoose2 {
  background-color: #800080;
}
.colorChoose3 {
  background-color: #ff0000;
}
.colorChoose4 {
  background-color: #00ff00;
}
.colorChoose5 {
  background-color: #800000;
}
.colorChoose6 {
  background-color: #ff00ff;
}
.colorChoose7 {
  background-color: #00ffff;
}
.colorChoose8 {
  background-color: #ffff00;
}
.colorChoose9 {
  background-color: #0000ff;
}
</style>