<template>
  <div class="ab-bg">
    <div class="wrapper">
    <div class="card">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>100%</span></div>
      </div>
      <div class="text">CoverDance</div>
    </div>
    <div class="card js">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>80%</span></div>
      </div>
      <div class="text">Basketball</div>
    </div>
    <div class="card react">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>90%</span></div>
      </div>
      <div class="text">Canva</div>
    </div>
     <div class="card js">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>70%</span></div>
      </div>
      <div class="text">Photoshop</div>
    </div>
    <div class="card react">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>70%</span></div>
      </div>
      <div class="text">Drawing</div>
    </div>
    <div class="card js">
      <div class="circle">
        <div class="bar"></div>
        <div class="box"><span>80%</span></div>
      </div>
      <div class="text">Cooking</div>
    </div>
    
  </div>
 
  <body>
<center><a href="/home" target="HomePage">
<button class="btn-1">Back to HomePage</button>
</a></center>
</body>
  </div>
</template>

<script >
  
</script>

<style scoped>
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
.ab-bg{
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background: url(https://i.pinimg.com/originals/49/67/5e/49675efa87f4c99aaa46fa9e76bd8f4d.gif);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
.wrapper{
  width: 800px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}
.wrapper .card{
  background: #fff;
  width: calc(33% - 20px);
  height: 300px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  box-shadow: 0px 10px 15px rgba(0,0,0,0.1);
}
.wrapper .card .circle{
  position: relative;
  height: 150px;
  width: 150px;
  border-radius: 50%;
  cursor: default;
}
.card .circle .box,
.card .circle .box span{
  position: absolute;
  top: 50%;
  left: 50%;
}
.card .circle .box{
  height: 100%;
  width: 100%;
  background: #fff;
  border-radius: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  transition: all 0.2s;
}
.card .circle:hover .box{
  transform: translate(-50%, -50%) scale(0.91);
}
.card .circle .box span,
.wrapper .card .text{
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.circle .box span{
  font-size: 38px;
  font-family: sans-serif;
  font-weight: 600;
  transform: translate(-45%, -45%);
  transition: all 0.1s;
}
.card .circle:hover .box span{
  transform: translate(-45%, -45%) scale(1.09);
}
.card .text{
  font-size: 20px;
  font-weight: 600;
}
@media(max-width: 753px){
  .wrapper{
    max-width: 700px;
  }
  .wrapper .card{
    width: calc(50% - 20px);
    margin-bottom: 20px;
  }
}
@media(max-width: 505px){
  .wrapper{
    max-width: 500px;
  }
  .wrapper .card{
    width: 100%;
  }
}
  button{
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border: 0px;
  background: transparent;
  position: relative;
  margin: 20px;
  transition: all 0.25s ease;
}
.btn-1{
  color:#fff;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0px -0px 0px 0px rgba(143, 64, 248, 0.5),
  0px -0px 0px 0px rgba(39, 200, 255, 0.5);
              }
  .btn-1:hover {
      transform: translate(0,-6px);
      box-shadow: 10px -10px 25px 0px rgba(143, 64, 248, 0.5),
      -10px 10px 25px 0px rgba(39, 200, 255, 0.5);

  } 
  .btn-1:hover::after{
     transform: rotate(150deg);
  }  

  .btn-1::after {
      content: "";
      width: 400px;
      height: 400px;
      position: absolute;
      top: -50px;
      left: -100px;
      background-color: #ff3cac;
      background-image: linear-gradient(225deg,#27d85c 0%,#26caf8 50%,#c625d0 100%);
      z-index: -1;
      transition: all 0.25s ease;
  }  
</style>>
