<template>
  <div>
    <v-row
      no-gutters
      style="background-image: linear-gradient(#6495ed, #b7d7e8)"
    >
      <v-col style="text-align: center">
        <img
          alt="Ecosoft logo"
          src="~assets/pics/balloon.png"
          style="height: 200px"
          class="pt-3"
        />
      </v-col>
      <v-col style="text-align: center">
        <div class="pt-9 text-h3 text-white font-weight-bold">
          Digital Transformation Solutions
        </div>
        <div class="pt-3 text-h3 text-white">100% Open Source</div>
        <div class="py-8 text-h5">
          <span class="pa-2 bg-secondary"
            >&nbsp;No license cost, only quality services&nbsp;
          </span>
        </div>
      </v-col>
    </v-row>

    <!-- Second Banner -->
    <v-row style="text-align: center">
      <v-banner class="bg-grey-darken-2">
        <div class="text-h5 text-white">
          Odoo – ERP โอเพ่นซอร์สอันดับหนึ่งที่มีผู้ใช้งานมากที่สุดในโลก
          <br />ERPNext – ERP แนว Low Code Platform ที่ดีที่สุดในเวลานี้
        </div></v-banner
      >
    </v-row>

    <!-- Overview -->
    <v-container>
      <v-row class="mt-2">
        <v-col class="pa-2">
          <FrontCard title="Digital Transformation + Open Source">
            หากคุณต้องการเพิ่มความสามารถในการแข่งขันด้วยระบบ ERP
            แต่กังวลกับลิขสิทธ์ซอฟต์แวร์ราคาแพง – Open Source ERP คือคำตอบ
            เพื่อการปรับตัวสู่อนาคต ไม่มีข้อจำกัดด้านจำนวนผู้ใช้งาน
            และด้วยมีชุมชนนักพัฒนาขนาดใหญ่
            จึงขยายความสามารถได้ด้วยนวัตกรรมที่เกิดขึ้นตลอดเวลา
          </FrontCard>
        </v-col>
        <v-col class="pa-2">
          <FrontCard title="Business + Technology Partner">
            ปัญหาของการวางระบบ ERP คือความไม่เข้าใจในภาษาธุรกิจ ทั้งที่หัวใจของ
            ERP คือ กระบวนการทางธุรกิจ บัญชีและการเงิน ที่ Ecosoft
            เรามีประสบการณ์กว่า 10 ปีในการวางระบบ ERP
            ให้กับธุรกิจไทยที่มีพนักงานตั้งแต่ 10 คนถึง 1,000 คน
            เราจึงเข้าใจถึงความท้าทายของการวางระบบในหลายมิติ
          </FrontCard>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="ma-4 text-h4 font-weight-bold text-primary text-center">
            Our Services
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
          <v-card class="text-white text-right">
            <v-img
              :src="card.src"
              class="align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            >
              <v-card-title
                ><span>{{ card.title }}</span></v-card-title
              >
            </v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Accounting",
        src: "assets/pics/accounting.jpg",
        flex: 3,
      },
      {
        title: "Operations",
        src: "assets/pics/operations.jpg",
        flex: 3,
      },
      {
        title: "Inventory",
        src: "assets/pics/inventory.jpg",
        flex: 3,
      },
      {
        title: "Production",
        src: "assets/pics/mrp.jpg",
        flex: 3,
      },
    ],
  }),
};
</script>
