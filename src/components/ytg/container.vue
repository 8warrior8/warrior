<template>
  <div class="container">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="main">
      <slot></slot>
    </div>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
}
.header {
  height: 30px;
}
.main {
  flex: 1;
}
.footer {
  height: 30px;
}
</style>