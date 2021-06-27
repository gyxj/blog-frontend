<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style='{ backgroundImage: `url(/$page.post.cover.url)` }'>
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="post-heading">
                        <h1>{{$page.post.title}}</h1>
                        <span class="meta">
                            Posted by 
                            <a href="#!">{{$page.post.created_man.firstname}}{{$page.post.created_man.lastname}}</a>
                            on {{$page.post.created_at}}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Post Content-->
    <article class="mb-4">
        <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7" v-html="htmlContent"></div>
            </div>
        </div>
    </article>
  </Layout>
</template>

<page-query>
query($id: ID!) {
  post: strapiPost(id: $id) {
    id
    title
    content
    created_man {
      id
      firstname
      lastname
    }
    created_at
    cover {
      url
    }
    tags {
      id
      title
    }
  }
}
</page-query>

<script>
import markdownIt from 'markdown-it'
const md = new markdownIt()
export default {
  name: 'Post',
  metaInfo: {
    title: 'Post'
  },
  computed: {
    htmlContent() {
      return md.render(this.$page.post.content)
    }
  }
}
</script>

<style>

</style>
