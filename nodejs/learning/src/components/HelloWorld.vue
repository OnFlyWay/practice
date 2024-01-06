<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,
      <br>check out the
    </p>
    <h3>Installed CLI Plugins</h3>
    <svg width="100%" height="100%" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="Gaussian_Blur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="3"></feGaussianBlur>
        </filter>
      </defs>
      <circle cx="100" cy="50" r="40" stroke="black" stroke-width="5" fill="red"></circle>
      <ellipse cx="280" cy="50" rx="70" ry="40"
style="fill:#ff0000;stroke:#000000;
stroke-width:2;filter:url(#Gaussian_Blur)"/>
    </svg>
    <svg width="100%" height="100%">
      <rect fill="green" height="79.2" width="89.2" x="50.8" y="61.7"></rect>
      <ellipse cx="260.5" cy="111" fill="yellow" rx="48.5" ry="39"></ellipse>
    </svg>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
