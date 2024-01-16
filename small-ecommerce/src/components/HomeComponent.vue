<script setup lang="ts">
import {ref} from 'vue';

type CartItem = {
  name: string
  isSelected: boolean
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
    name: 'Razer Naga X',
    color: '100, 101, 102',
    dpi: 16000,
    buttons: 16,
    weight: '85g',
    wireless: false,
    price: 79.99,
    description: 'Razer Naga X',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png',
  },
  {
    name: 'Razer Naga X',
    color: '100, 101, 102',
    dpi: 16000,
    buttons: 16,
    weight: '85g',
    wireless: false,
    price: 79.99,
    description: 'Razer Naga X',
    src: 'https://cdn.vuetifyjs.com/docs/images/graphics/mice/13.png',
  },
])

const getAddedItemsInCart = () => {
  const items = JSON.parse(localStorage.getItem('cart-items') || '[]')

  return items
}

const cartItems = ref<CartItem[]>([])

const setCartItems = () => {
  cartItems.value  = getAddedItemsInCart()

  console.log('cartItems', cartItems.value)
}

setCartItems()

const addToCart = (itemName: string) => {

  const items = getAddedItemsInCart()

  const newCartItem = {
    name: itemName,
    isSelected: true,
  }

  items.push(newCartItem)

  localStorage.setItem('cart-items', JSON.stringify(items))

  setCartItems()
}

const deletOnCart = (itemName: string) => {
  const items = getAddedItemsInCart()

  const filteredItems = items.filter((item: CartItem) => item.name !== itemName)

  localStorage.setItem('cart-items', JSON.stringify(filteredItems))

  setCartItems()
}

const isSelected = (itemName: string) => {
  return cartItems.value.find(obj => obj.name === itemName)?.isSelected
}

</script>

<template>
  <div>
    <div
      class="mt-5 d-flex justify-center"
    >
      <v-sheet
        max-width="1190"
      >
        <v-slide-group
          class="pa-4"
          show-arrows
          multiple
        >
          <v-slide-group-item
            v-for="(item, i) in array"
            :key="i"
          >
            <div class="ma-3">
              <div class="d-flex justify-center align-center justify-space-around mb-2">
                {{ item.name }}
              </div>
              <div>
                <v-sheet
                  width="240"
                  height="240"
                  rounded
                  elevation="12"
                >
                  <v-img
                    class="rounded-lg class2"
                    height="100%"
                    cover
                    :src="item.src"
                  ></v-img>
                </v-sheet>
                <div class="my-2">
                  price: {{ item.price }}
                </div>
                <div>
                  <v-btn
                    :class="{ 'bg-green': isSelected(item.name) }"
                    rounded
                    @click="
                      isSelected(item.name)
                      ? deletOnCart(item.name)
                      : addToCart(item.name)
                    "
                  >
                    {{ isSelected(item.name) ? 'In cart' : 'Buy'}}
                  </v-btn>
                </div>
              </div>
            </div>
          </v-slide-group-item>
        </v-slide-group>
    </v-sheet>
    </div>
  </div>
</template>

<style scoped>
.class {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}
</style>