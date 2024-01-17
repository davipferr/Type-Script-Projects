<script setup lang="ts">
import { watch } from 'vue';
import {ref} from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter()

const goToHome = () => {
  router.push({ path: "/" })
}

const goToFinishPurchase = () => {
  router.push({ path: "/finish-purchase" })
}

type CartItem = {
  name: string
  isSelected: boolean
}

type ItemUnity = {
  name: string
  baseValue: number 
  totalValue: number
  quantity: number
}

type StoreMouses = {
  name: string
  color: string
  dpi: number,
  buttons: number,
  weight: string,
  wireless: boolean
  price: number
  description: string
  src: string
}

const totalItems = ref()
const totalCost = ref()
const itemUnities: number[] = []

for (let i = 1; i <= 20; i++) {
  itemUnities.push(i)
}

const cartItems = ref<CartItem[]>([])
const databaseItems = ref<StoreMouses[]>([])
const selectedItemUnity = ref<ItemUnity[]>([])
const array = ref<StoreMouses[]>([
  {
    name: 'Glorious Model O',
    color: '161, 252, 250',
    dpi: 12000,
    buttons: 6,
    weight: '67g',
    wireless: false,
    price: 49.99,
    description: 'Glorious Model O',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/10.png',
  },
  {
    name: 'HP Omen Photon',
    color: '201, 1, 2',
    dpi: 16000,
    buttons: 11,
    weight: '128g',
    wireless: true,
    price: 99.99,
    description: 'HP Omen Photon',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/11.png',
  },
  {
    name: 'Asus ROG Chakram',
    color: '10, 181, 19',
    dpi: 16000,
    buttons: 9,
    weight: '121g',
    wireless: true,
    price: 159.99,
    description: 'Asus ROG Chakram',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png',
  },
  {
    name: 'Asus ROG',
    color: '10, 181, 19',
    dpi: 16000,
    buttons: 9,
    weight: '121g',
    wireless: true,
    price: 159.99,
    description: 'Asus ROG Chakram',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/12.png',
  },
])

watch(
  () => selectedItemUnity.value.map(obj => ({
    name: obj.name, 
    quantity: obj.quantity,
  })),
  (nv, ov) => {
    for (let i = 0; i < selectedItemUnity.value.length; i++) {
      if (nv[i]?.name === ov[i]?.name 
        && nv[i].quantity !== ov[i].quantity
        && ovIsUndefined(ov[i].quantity)
      ) {
        const bs = selectedItemUnity.value[i].baseValue
        const name = selectedItemUnity.value[i].name

        addTotalCost(bs, nv[i].quantity, name)
      }
    }
  },
  { 
    deep: true
  }
)

watch(
  () => selectedItemUnity.value.length,
  () => {
    totalItems.value = selectedItemUnity.value.length
  }
)

const getCartItemsInStorage = () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart-items') || '[]')
}

const setUnities = () => {
  databaseItems.value.forEach((obj: StoreMouses)  => {

    selectedItemUnity.value.push({
      name: obj.name,
      baseValue: obj.price,
      totalValue: obj.price,
      quantity: 1,
    }) 
  })
}

const setDatabaseItems = () => {
  getCartItemsInStorage()

  databaseItems.value = array.value.filter(obj => {
    return cartItems.value.some(cartItem => cartItem.name === obj.name)
  })
}

const getTotalItems = (array: StoreMouses[]) => totalItems.value = array.length

const getTotalCost = (array: StoreMouses[]) => {
  const cost = array.reduce((prev, curr: StoreMouses) => prev + curr.price, 0)

  totalCost.value = editedNumber(cost)
}

const deleteItenOnStorage = (itemName: string) => {  
  const filtered = cartItems.value.filter((item: CartItem ) => item.name !== itemName)

  updateTotalCost(itemName)

  selectedItemUnity.value = selectedItemUnity.value.filter(obj => obj.name !== itemName)

  localStorage.setItem('cart-items', JSON.stringify(filtered))

  setDatabaseItems()
}

const addTotalCost = (bs: number, qt: number, name: string) => {
  let tv = selectedItemUnity.value
    .find(obj => obj.name === name)

  const x = ref(0)

  if (tv?.totalValue) {
    x.value = (totalCost.value - tv.totalValue) + (bs * qt)
  } else console.log('Não foi possível encontrar o Produto')

  if (tv?.totalValue) {
    tv.totalValue = editedNumber(bs * qt)
  }
  
  totalCost.value =  editedNumber(x.value)
}

const updateTotalCost = (name: string) => {
  let tv = selectedItemUnity.value
    .find(obj => obj.name === name)

  if (tv?.totalValue) {
      const x  = totalCost.value - tv.totalValue
      totalCost.value = editedNumber(x)
    }
}

const ovIsUndefined = (ov: number | undefined) => {
  return typeof ov !== "undefined"
}

const editedNumber = (n: number) => {
  return parseFloat(n.toFixed(2))
}


getCartItemsInStorage()
setDatabaseItems()
setUnities()
getTotalItems(databaseItems.value)
getTotalCost(databaseItems.value)

</script>

<template>
  <div
    class="
      my-10
      d-flex
      justify-center
      fill-all-height
      gap-1
    "
  >
    <div class="ml-100">
      <div>
        <div>
            <h1 class="mb-5">
              Carrinho:
            </h1>
          </div>
        <v-sheet
          class="
            d-flex
            flex-column
            pb-10
            pt-5
            gap-1
            card
          "
          width="700"
          rounded="lg"
          elevation="6"
        >
          <div
            v-if="!databaseItems.length"
            class="d-flex flex-column align-center"
          >
            <h1>
              Seu carrinho está vázio!
            </h1>
            <h1
              class="text-link mt-5"
              @click="goToHome()"
            >
              Procurar um produto
            </h1>
          </div>
          <div
            v-else
            v-for="(item, i) in databaseItems"
            :index="i"
          >
            <div class="d-flex align-center justify-space-around w-100 px-3">
              <div class="d-flex flex-column gap-1">
                <span>Name: {{ item.name }}</span>
                <span>Price: {{ item.price }}</span>
              </div>
              <div class="d-flex align-center">
                <v-select
                  v-model="selectedItemUnity[i].quantity"
                  :items="itemUnities"
                  variant="solo"
                >
              </v-select>
              </div>
              <div
                class="d-flex justify-end align-center"
              >
                <v-sheet
                  width="190"
                  height="90"
                  rounded="lg"
                >
                  <v-img
                    height="100%"
                    cover
                    class="rounded-lg"
                    :src="item.src"
                  >
                  </v-img> 
                </v-sheet>
             
                <v-btn
                  density="comfortable"
                  class="ml-5"
                  icon
                  variant="outlined"
                  color="red"
                  @click="deleteItenOnStorage(item.name)"
                  :ripple="false"
                >
                  <font-awesome-icon
                    :icon="['fas', 'trash']"
                  >
                  </font-awesome-icon>
                </v-btn>
              
              </div>
            </div>
            <hr class="mt-3">
          </div>
        </v-sheet>
      </div>
    </div>

    <div class="ml-10">
      <v-sheet
        class="position-sticky top"
        width="400"
        height="180"
        rounded="lg"
        elevation="6"
      >
      <div class="d-flex justify-center align-center gap-1 pa-5">
        <v-sheet
            class="
              d-flex
              justify-center
              align-center
            "
            width="250"
            height="50"
            rounded="lg"
            elevation="6"
          >
            <span>
              Total Items: {{ totalItems }}
            </span>
          </v-sheet>
          <v-sheet
            class="
              d-flex
              justify-center
              align-center
            "
            width="250"
            height="50"
            rounded="lg"
            elevation="6"
          >
            <span>
              Total Price: ${{ totalCost }}
            </span>
          </v-sheet>
      </div>
      <div class="d-flex justify-center align-center h-50">
        <v-btn
          class="finish-purchase-button"
          @click="goToFinishPurchase()"
        >
          Finalizar compra
        </v-btn>
      </div>
      </v-sheet>
    </div>
  </div>
</template>

<style scoped>
.top {
  top: 20px;
}

.finish-purchase-button {
  box-shadow: 0 0 5px green, 0 0 25px green;
}

.finish-purchase-button:hover {
  box-shadow: 0 0 5px green,
  0 0 25px green, 0 0 50px green;
}
</style>