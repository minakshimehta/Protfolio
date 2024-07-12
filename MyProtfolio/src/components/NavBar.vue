<template>
  <div>
    <header>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-3 col-6">
            <!-- Logo and Name -->
            <div class="logoContainer">
              <img src="../assets/minakshiLogo.png" alt="Logo" class="LogoImage" />
              <div class="LogoName">inakshi</div>
            </div>
          </div>
          <div class="col-lg-9 col-6">
            <!-- Responsive Menu -->
            <div class="headerMenu d-flex justify-content-end align-items-center">
              <nav class="navbar navbar-expand-lg">
                <!-- Navbar Toggler -->
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>

                <!-- Navbar Items -->
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                  <ul class="navbar-nav ml-auto text-center">
                    <li class="nav-item active">
                      <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Services</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="#">Contact Us</a>
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
</template>

  
  <script>
  export default {
    name: "NavBar",
    mounted() {
      // Ensure jQuery and Bootstrap are properly initialized
      if (typeof $ !== 'undefined' && typeof $.fn.collapse === 'function') {
        $('#navbarTogglerDemo02').collapse();
      }
    }
  };
  </script>
  
  <style scoped>
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
  padding: 10px 15px; /* Adjust padding for better touch responsiveness */
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

@media (max-width: 991.98px) {
  /* Adjustments for mobile screens */
  .LogoName {
    font-size: 16px;
    margin-left: -6px;
    margin-top: 8px;
  }

  a.nav-link {
    padding: 10px 10px; /* Adjusted padding for smaller screens */
    margin-left: 5px;
    margin-right: 5px;
  }
}
</style>
