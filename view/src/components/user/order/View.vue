<template>
  <div class="truck-detail grid grid-cols-2 gap-x-10 gap-y-3">
    <vs-input class="w-full" disabled v-model="order.customerName" label-placeholder="Tên người đặt" />
    <vs-input class="w-full" disabled v-model="order.customerPhone" label-placeholder="SĐT người đặt" />
    <vs-input class="w-full" disabled v-model="order.toCity" label-placeholder="Nơi lấy hàng" />
    <vs-input class="w-full" disabled v-model="order.fromCity" label-placeholder="Nơi trả hàng" />
    <vs-input class="w-full" disabled v-model="order.itemType" label-placeholder="Loại hàng" />
    <vs-input class="w-full" disabled v-model="order.price" label-placeholder="Giá (VNĐ/tấn/km)" />
    <vs-input class="w-full" disabled v-model="order.count" label-placeholder="Số lượng gói hàng" />
    <vs-input class="w-full" disabled v-model="order.weight" label-placeholder="Trọng lượng (tấn)" />
    <vs-input class="w-full" disabled v-model="order.length" label-placeholder="Chiều dài gói hàng (m)" />
    <vs-input class="w-full" disabled v-model="order.height" label-placeholder="Chiều cao gói hàng (m)" />
    <vs-input class="w-full" disabled v-model="order.width" label-placeholder="Chiều rộng gói hàng (m)" />
    <div class="mt-4 flex justify-end">
      <vs-button icon="close" color="lightgray" @click="$emit('clearEvent')">Thoát</vs-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    order: Object
  }
}
</script>
