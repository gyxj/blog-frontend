<template>
  <Layout>
    <!-- Page Header-->
    <header class="masthead" :style='{ backgroundImage: `url(/general.node.bgi.url)` }'>
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>{{general.node.title}}</h1>
                        <span class="subheading">{{general.node.subtitle}}</span>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Main Content-->
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <!-- Post preview-->
                <div class="post-preview" v-for="post in $page.posts.edges" :key="post.index">
                    <g-link :to="'/post/' + post.node.id">
                        <h2 class="post-title">{{post.node.title}}</h2>
                    </g-link>
                    <p class="post-meta">
                        Posted by
                        <a href="#!">{{post.node.created_man.firstname}}{{post.node.created_man.lastname}}</a>
                        on {{post.node.created_at}}
                    </p>
                    <p>
                      <span v-for="tag in post.node.tags" :key="tag.id">
                        <g-link :to="'/tag/' + tag.id">{{tag.title}}</g-link>
                        &nbsp;&nbsp;
                      </span>
                      
                    </p>
                    <!-- Divider-->
                    <hr class="my-4" />
                </div>
                <Pager style="margin-bottom: 20px;" :info="$page.posts.pageInfo"/>
            </div>
        </div>
    </div>
  </Layout>
</template>

<page-query>
query ($page: Int) {
  posts: allStrapiPost(perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        created_at
        created_man {
          id
          firstname
          lastname
        }
        tags {
          id
          title
        }
      }
    }
  }
  allStrapiGeneral {
    edges {
      node {
        id
        title
        subtitle
        bgi {
          url
        }
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'
export default {
  name: 'Home',
  metaInfo: {
    title: 'Home'
  },
  components: {
    Pager
  },
  computed: {
    general() {
      return this.$page.allStrapiGeneral.edges[0]
    }
  }
}
</script>

<style>
  nav a {
    margin-right: 20px;
  }
</style>
