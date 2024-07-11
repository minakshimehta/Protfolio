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
        <div class="seedling">
         hello
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
};
</script>

<style  scoped>
.header {
  top: 0;
  padding: 10px 0;
  position: fixed;
  width: 100%;
  /* background: var(--white); */
  /* background-color: red; */
  z-index: 99;
  box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.1);
}
.header_Container {
  min-height: 100px;
}
.bodyPage {
  padding: 30px;
  margin-top: 5%;
}
.headingText {
  font-size: 4.5rem;
  font-weight: 600;
}
.subText {
  font-size: 15px;
}
.bodyText {
  width: 550px;
}

.callAction {
  font-size: 15px;
  border: none;
  color: #ffff;
  padding: 16px 25px;
  border-radius: 50px;
  cursor: pointer;

  margin-top: 60px;
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
  width: 500px;
  height: 500px;
}
.seedling {
  position: absolute;
  background: var(--white);
  /* top: 100px; */
  /* right: -30px; */
  border-radius: 15px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.07);
}
</style>