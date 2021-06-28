<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" style="background-image: url('/img/contact-bg.jpg')">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="page-heading">
                        <h1>Contact Me</h1>
                        <span class="subheading">Have questions? I have answers.</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <main class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <p>Want to get in touch? Fill out the form below to send me a message and I will get back to you as soon as possible!</p>
                    <div class="my-5">
                        <form>
                            <div class="form-floating">
                                <input class="form-control" v-model="formData.name" type="text" placeholder="Enter your name..." />
                                <label for="inputName">Name</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control" v-model="formData.email" type="email" placeholder="Enter your email..." />
                                <label for="inputEmail">Email address</label>
                            </div>
                            <div class="form-floating">
                                <input class="form-control"v-model="formData.phone" type="tel" placeholder="Enter your phone number..." />
                                <label for="inputPhone">Phone Number</label>
                            </div>
                            <div class="form-floating">
                                <textarea class="form-control" v-model="formData.message" placeholder="Enter your message here..." style="height: 12rem"></textarea>
                                <label for="inputMessage">Message</label>
                            </div>
                            <br />
                            <button class="btn btn-primary text-uppercase" @click.prevent="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  </Layout>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Contact',
  metaInfo: {
    title: 'Contact'
  },
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    async submit() {
      if (!this.formData.name) {
        window.alert('请输入姓名')
      } else if (!this.formData.email) {
        window.alert('请输入邮箱')
      } else if (!this.formData.phone) {
        window.alert('请输入手机号')
      } else if (!this.formData.message) {
        window.alert('请输入内容')
      } else{
        try {
          await axios({
            method: 'POST',
            url: '/contacts',
            data: this.formData
          })
          window.alert('发送成功')
          this.formData = {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        } catch(err) {
          window.alert('发送失败，稍后重试！')
        }
      }
    }
  }
}
</script>

<style></style>
