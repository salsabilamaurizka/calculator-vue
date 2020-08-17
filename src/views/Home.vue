<template>
  <div class="home">
    <div class="first-section d-flex">
      <div class="container">
          <h1 class="text-header">
            Welcome to <span class="header-highlight">Calculator</span>
          </h1>
          <p class="welcome-text">
            Calculator provides simple and advanced mathematical
            functions in a beautifully designed web.
          </p>
          <button type="button" class="btn btn-primary">Start Now</button>
      </div>
      <img src="../../public/welcome.png" class="welcome-image" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home' //this is the name of the component
}
</script>
<style>
.first-section {
    height: 90vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.text-header {
    font-size: 4rem;
    font-weight: bold;
}

.header-highlight {
    background-color: #e2faca;
    padding-left: 1rem;
    padding-right: 1rem;
}

.header-highlight:hover {
    background-color: #fcd9c5;
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        2px 2px 0 #000;
}

.text-subheader {
    color: white;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        2px 2px 0 #000;
}

.text-subheader:hover {
    background-color: #fcd9c5;
}

.design-link {
    color: unset;
}

.design-link:hover {
    color: unset;
    text-decoration: none;
}

.btn.btn-primary{
  background-color: #3CA59D;
  border-radius: 12px;
  padding: 10px;
  width: 164px;
  color: white;
  font-size: 16px;
}

.welcome-text{
  margin-bottom: 40px;
  font-size: 18px;
}

.welcome-image{
  width: auto;
  height: 364px;
}
</style>