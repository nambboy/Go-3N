<template>
  <div id="post-page">
    <div class="post-outstanding">
      <div class="header text-center">
        <vs-button color="danger" icon="add" class="absolute font-bold" @click="onScrollToPostAdd">
          Tạo bài đăng của bạn
        </vs-button>
        <p class="titile font-oswald font-bold text-4xl mt-20 mb-4">
          <span class="text-red-600">-</span>
          Bài đăng nổi bật
          <span class="text-red-600">-</span>
        </p>
        <p class="text-sm text-gray-600">Đây là những bài đăng nổi bật, được tương tác nhiều</p>
        <p class="text-sm text-gray-600 mb-10">Dựa trên tính toán của chúng tôi, nó có thể phù hợp với bạn</p>
      </div>
      <div class="content bg-gray-50">
        <div class="post-containe flex flex-wrap gap-8 justify-center">
          <vs-col v-for="(post, index) in posts" :key="index" vs-w="3">
            <PostItem :post="post" @onShow="onShow" />
          </vs-col>
        </div>
      </div>
    </div>
    <div class="post-add">
      <p class="titile font-oswald font-bold text-center text-4xl mt-20 mb-4">
        <span class="text-red-600">-</span>
        Tạo bài đăng của bạn
        <span class="text-red-600">-</span>
      </p>
      <p class="text-sm text-gray-600 text-center mb-10" ref="postAdd">
        Tạo bài viết để chúng tôi đưa bạn gần hơn với khách hàng
      </p>
      <div class="form-post" v-if="isDriver">
        <vs-col vs-w="5" class="text-center">
          <img class="bg-cover bg-fixed" src="@/assets/img/user/slide-1.png" />
        </vs-col>
        <vs-col vs-w="7">
          <PostForm :post="post" />
          <vs-button class="mb-10 w-full" @click="onCreatePost" color="danger">Tạo bài viết</vs-button>
        </vs-col>
      </div>
      <div v-else class="flex justify-center items-center">
        <div class="text-center">
          <span class="material-icons text-8xl text-red-600">lock</span>
          <p class="text-center font-bold text-2xl mx-32">
            Vui lòng đăng kí thành đối tác của chúng tôi để mở khoá tính năng đăng bài
          </p>
          <vs-button color="danger" class="px-10 my-10 font-bold">Đăng kí trở thành tài xế</vs-button>
        </div>
        <img class="w-96" src="@/assets/img/user/post-image.png" alt="driver" />
      </div>
    </div>
    <vs-popup class="" title="Chi tiết bài đăng" :active.sync="isShowDetailPost">
      <!-- <PostForm :post="postSelected" /> -->
    </vs-popup>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { convertToSnackCase } from '@/helpers/convert-keys'
import { createFormData } from '@/helpers/form-data'
import PostItem from '@/components/user/post/Item.vue'
import PostForm from '@/components/user/post/Form.vue'
export default {
  components: {
    PostItem,
    PostForm
  },
  computed: {
    ...mapGetters({}),
    profile() {
      return JSON.parse(localStorage.getItem('profileClient')) || this.$store.state.clientAuth.profile
    },
    isLoggedIn() {
      return this.$store.state.clientAuth.token || localStorage.getItem('tokenClient')
    },
    isDriver() {
      return this.isLoggedIn && this.profile.customer_type == 0
    }
  },
  data() {
    return {
      isShowDetailPost: false,
      posts: [
        {
          post_id: '1',
          tittle: 'Xe chạy từ Hà Nội đến Đà Nẵng',
          content: 'Nhận chở hàng liên hệ số điện thoại bên dưới...',
          image: 'image1.jpg',
          isFavorite: true
        },
        {
          post_id: '2',
          tittle: 'Công ty vận chuyển hàng hoá Miền Bắc',
          content: 'Nhận giao hàng toàn quốc',
          image: 'image2.jpeg',
          isFavorite: false
        },
        {
          post_id: '3',
          tittle: 'Chúng tôi nhận giao hàng toàn quốc',
          content: 'Uy tín chất lượng làm nên thương hiệu...',
          image: 'image3.jpeg',
          isFavorite: false
        }
      ],
      postSelected: {
        truckId: null,
        titile: '',
        content: '',
        fromCityId: '',
        toCityId: '',
        fromDistrictId: '',
        toDistrictId: '',
        postType: null,
        weightProduct: null,
        lowestPrice: null,
        hightestPrice: null,
        timeDisplay: null
      },
      post: {
        image: [],
        itemTypeId: []
      }
    }
  },
  methods: {
    ...mapActions({
      createPost: 'driver/createPostByDriver',
      getFavoritePost: 'driver/getFavoritePost'
    }),
    onShow(id) {
      this.postSelected = this.posts.find(post => post.id == id)
      this.isShowDetailPost = true
    },
    onScrollToPostAdd() {
      const offset = this.$refs.postAdd.offsetTop - 250
      window.scrollTo({ top: offset, behavior: 'smooth' })
    },
    async onCreatePost() {
      const formData = createFormData(convertToSnackCase(this.post))
      formData.delete('image')
      for (let i = 0; i < this.post.image.length; i++) {
        formData.append('image[]', this.post.image[i])
      }
      await this.createPost(formData)
      this.clearEvent()
      this.$router.push('/driver-management')
    },
    clearEvent() {
      this.post = { image: [], itemTypeId: [] }
      this.isShowDetailPost = false
    }
  },
  async created() {
    // await this.getFavoritePost()
  }
}
</script>
