<template>
  <div>
    <div>
      <header>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-3 col-lg-6">
              <div class="logoContainer">
                <img
                  src="../assets/minakshiLogo.png"
                  alt=""
                  class="LogoImage"
                />
                <div class="LogoName">
                  <div>inakshi</div>
                </div>
              </div>
            </div>
            <div class="col-9 col-lg-6">
              <div
                class="headerMenu d-flex justify-content-end align-items-center"
              >
                <nav class="navbar navbar-expand-lg d-flex">
                  <div
                    class="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </div>

                  <div
                    class="collapse navbar-collapse"
                    id="navbarTogglerDemo02"
                  >
                    <ul class="navbar-nav ml-auto text-center">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Services </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Contact US </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  </div>
</template>



<script>
export default {
  name: "NavBar",
};
</script>

<style  scoped>
.logoContainer {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
}

.LogoImage {
  height: 100%;
  width: 100%;
  object-fit: contain;
}
.LogoName {
  font-size: 20px;
  margin-left: -9px;
  margin-top: 10px;
}
a.nav-link {
  position: relative;
  color: var(--textColor);
  font-size: 18px;
  font-weight: 500;
  transition: 0.5s;
  padding: 10px 0px;
  margin-left: 10px;
}
a.nav-link:before {
  content: "";
  width: 0px;
  height: 3px;
  background-color: black;
  position: absolute;
  top: 100%;
  left: 10px;
  transition: 0.5s;
}
a:hover.nav-link::before {
  width: 50%;
  transform: translateX(0);
}
</style>