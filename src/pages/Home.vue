<template>
<div>
    <div class="container bg">
      <div class="content">
      <div class="ProFile" style="width:50%;">
      <div class="tnx">
        <h2><font color="#fff"><i class="fas fa-map-marker-alt"> About Me</i></font></h2>
      </div>
      <div class="txt">
        <h1><font color="#fff">PRO</font></h1>
        <h1><font color="#99FFFF">FILE</font></h1>
      </div>
      <br>
      <br>
      <p><font color="#fff">{{name}} {{age}} ชื่อเล่น ฟ้า ( ColorSky ) ตอนนี้กำลังศึกษาอยู่คณะวิศวกรรมศาสตร์ สาขาวิศวกรรมมัลติมีเดียและเอ็นเตอร์เทนเมนต์ ชั้นปีที่ 2 ชอบฟังเพลง K-pop 
        ชอบอ่านนิยาย ชอบดูหนัง Disney หรือ ประเภทแฟนตาซี ชอบเล่นบาสแล้วก็ชอบเต้น CoverDance </font> </p>
        <br>
        <br>
        <h3><font color="#fff"><i class="fas fa-map-marker-alt"> &nbsp;contact</i></font></h3>
        <br>
        <br>
        <font color="#CCFF99">Tel : {{number}}</font>
        <br>
        <br>
        <font color="#CCFF99">Email : {{email}}</font>
        <br>
        <br>
        <font color="#CCFF99">Address : {{address}}</font>
        <br>
        <br>
        <center>
          <link rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

                <a href="https://www.instagram.com/thepcyp.f_a_h/" class="fa fa-instagram" target="_blank" style="font-size: 40px; color:#ffffff ;"></a>
            <p><font color="#ffffff">- Follow me -</font></p>
        </center>
    </div>
    <div class="card" style="width:50%;">
      <a href="/Experiences" target="experiences">
        <div class="box1">
          <h2>Experiences</h2>
        </div>
      </a>
      <a href="/Abilities" target="Abilities">
        <div class="box2">
          <h2>Abilities</h2>
        </div>
      </a>
      <a href="/Projects" target="Projects">
        <div class="box3">
          <h2>Projects</h2>
        </div>
      </a>
      <a href="/Contact" target="contact">
        <div class="box4">
          <h2>Contact</h2>
        </div>
      </a>
      </div>
      </div>
      </div>
</div>
</template>

<script>
export default { 
  data() {
    return{
      name: 'Phitchayaphorn yodya',
      age: '19' ,
      number:'0986459053',
      email: 'Phitchayaphorn.yody@bumail.net',
      address: 'Samut Prakan,Thailand',
    }
  }
  
}
</script>

<style>
 
</style>
