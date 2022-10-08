<template>
  <div class="pr-bg">
     <h1 style="text-align: center; font-family: cursive; color: #ff6; font-size: 70px; text-shadow:0 0 0.1em rgb(250, 249, 252), 0 0 0.1em rgb(247, 246, 249),0 0 0.1em rgb(250, 250, 251);">Projects</h1> 
    <h4 style="text-align: center; font-family: Prompt; font-weight:normal"><i><font color="#fffff">
        <br>
        <br>
        "ร่วมกันคิดและสร้างสรรค์รายการโทรทัศน์ภายใต้โครงการ {{project_name}} "</font></i></h4>
        <br>
        <br>
        <h5 style="text-align: center; font-family: Aclonica; font-weight:normal;  color: #ff6;">
            --- Group : ซูลูปาก้า ตาปาเฮ้  | BU x Workpoint 2022 ---</h5>   
            <br>
            <br>
            <center><font color="#CCFF99">{{project_detail}}</font></center>
            <br>
            <br>
            <h3><p style="text-align: center; font-family: cursive; color: #9d72ff;">
                <b>Teaser รายการ BeatBox Knockout</b></p></h3>
            <center>
                <video style="width: 50%;" controls="controls">
                    <source src="VDO/Teaser beatbox knockout.mp4" type="video/mp4"><source src="VDO/Teaser beatbox knockout.mp4" type="video/ogg">Your browser does not support the video tag.
                  </video>
            </center>  
        <br/>
        <br/>
        <p style="text-align: center; font-family: cursive; color: #c24cf6;">
        <b>ทีมงาน นักแสดง และ Staff ผู้ร่วมทำรายการ BeatBox Knockout</b></p>
        <th style="width: 33.33%; vertical-align: top;">
            <p><center><img src="images/001.png" alt="Beatbox Knockout" style="width: 40%;"></center></p>
            </th>   
         <br>
         <br>
         <br>
         <body>
        <center><a href="/home" target="HomePage">
        <button class="btn-1">Back to HomePage</button>
        </a></center>
      </body>
  </div>
</template>

<script>
export default {
    data() {
    return{
      project_name:'Bu Creative Sandbox x Workpoint',
      project_detail:'รายการเเรกและครั้งแรกในประเทศไทย กับการแข่งขัน Beatbox ',
    }
  }
}
</script>

<style scoped>
 .pr-bg{
                      background-image: url('https://i.pinimg.com/originals/1e/68/4d/1e684d15ad21997f1a92adfae922cfe5.gif');
                    background-repeat: no-repeat;
                    background-attachment: fixed;
                    background-size: cover;
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
