<template>
  <div class="contract-component">
    <div class="content">
      <h2>Contracts</h2>
      <div class="contract-contents">
        <div class="NoContract" v-if="dataProfile?.contracts?.length === 0">
          <h1>No Contract Found</h1>
          <img src="../../assets/images/AH/abt.png" alt="">
        </div>
        <div v-else class="mining_item_card myGrid" v-for="(data,index) in dataProfile.contracts" :key="data">
          <div class="item_card_left" style="display: flex; flex-direction: column-reverse;">
            <img draggable="false" :src="data.image" :alt="data.name" class="item_card_image" />
            <div class="item_card_name">
              <h2>{{ data.name }}</h2>
            </div>
          </div>
          <div class="item_card_right">
            <div class="item_right_heading">
              <div class="item_term">
                <div class="term_title">Contract Term</div>
                <div class="term_content">
                  {{ data.contract_term }}
                </div>
              </div>
              <div class="item_term">
                <div class="term_title">Contract Price</div>
                <div class="term_content">${{ data.contract_price }}</div>
              </div>
            </div>
            <div class="item_right_body">
              <div class="item_term">
                <div class="term_title">Daily Rewards</div>
                <div class="term_content">
                  ${{ data.daily_rewards }}
                </div>
              </div>
              <div class="item_term mt-2">
                <div class="term_title">3 Days Fixed Rewards:</div>
                <div class="term_content">
                  {{ data.fixed_rewards }}
                </div>
              </div>
            </div>
            <div class="item_card_volume">
              <div class="liquid-bar" :style="{ width: 100 + '%' }">
              </div>
              End time : <span class="volume_value">
             <countDown2 :index="index" />
              <!--              <countDown :deadline-time="86400" />-->
              <!--              </div> Volume <span class="volume_value">{{ data.volume }}%-->
            </span>


            </div>
            <div class="btnComponent">
              <button @click="deleteContract(data._id)">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {  mapState } from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import countDown2 from '@/components/countDown2V.vue'

export default {
  name: 'ContractComponent',
  components: {
    countDown2
  },
  data() {
    return {
      base_url: import.meta.env.VITE_BASE_URL
    }
  },
  computed: {
    ...mapState('Api', ['dataProfile'])
  },
  methods: {
    fetchData() {
      this.$store.dispatch('Api/fetchData')
    },
    async deleteContract(id) {
      sessionStorage.removeItem('endTime')
      sessionStorage.removeItem('expire')
      Swal.fire({
        text: `Dou you want to cancel contract ?`,
        showCancelButton: true,
        confirmButtonText: 'Yes',
        confirmButtonColor: '#4466f2',
        cancelButtonText: 'No',
        cancelButtonColor: '#f31616',
        reverseButtons: false
      }).then(async (result) => {
        if (result.isConfirmed) {
          const token = localStorage.getItem('jwt_token').replace(/^"(.*)"$/, '$1')
          const deleteObj = {
            contractId: id
          }
          try {
            const response = await axios.delete(
              `${this.base_url}api/deleteContract/${this.dataProfile._id}`,
              {
                headers: { Authorization: `Bearer ${token}` },
                data: deleteObj
              }
            )
            if (response.data.message === 'Contract deleted successfully') {
              window.location.reload()
            }
            console.log(response.data)
          } catch (e) {
            console.error('Error to delete Contract', e)
          }
        }
      })
    }
  },
  mounted() {
    this.fetchData()
  }
}
</script>

<style scoped>
.contract-component {
  margin: 10px 0 0 30px;
  width: 90%;
  height: auto;
}

.content {
  width: 1144px;
  height: auto;
}

.content h2 {
  font-family: Montserrat-Extra-Bold, sans-serif;
  font-size: 32px;
  color: var(--white);
  margin-bottom: 24px;
}

.contract-contents {
  position: relative;
  margin: 30px 0;
  width: 100%;
  height: auto;
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(60px);
  backdrop-filter: blur(60px);
  background: linear-gradient(90deg, hsla(0, 0%, 100%, 0.1) -1.52%, hsla(0, 0%, 100%, 0.024) 104.35%);
  border-radius: 16px;
  padding: 21px;
}

.myGrid {
  grid-template-columns: 1fr 3fr !important;
  margin-bottom: 20px;
}


.btnComponent {
  display: flex;
  justify-content: end;
  align-items: center;
}

.btnComponent button {
  border: none;
  background-color: red;
  padding: 10px;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

.NoContract {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: stretch;
  flex-direction: column;
  align-items: center;
  gap: 50px;
  color: #fff;
}

.NoContract img {
  width: 50%;
  height: 70%;
  margin-left: 15%;
}


@media screen and (max-width: 1439px) {
  .content {
    width: 100%;
  }
}


@media screen and (max-width: 1200px) {
  .myGrid {
    grid-template-columns: 1fr 2fr !important;
  }

  .btnComponent button {
    font-size: 14px;
  }
}

@media screen and (max-width: 768px) {
  .myGrid {
    display: flex;
    flex-direction: column;
  }

  .contract-contents {
    height: auto;
  }

  .btnComponent {
    margin-top: 10px;
  }
}
</style>