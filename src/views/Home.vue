<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';

export default {
  name: "Home",
  components: {
    BlogPost
  },
  data() {
    return {
      welcomeScreen: {
        title: "Welcome!",
        blogPost:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit beatae molestias facere quasi, incidunt voluptas magni. Magni blanditiis excepturi similique doloribus. Itaque nam molestiae numquam.",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [
        {
          title: "This is a filter Title!",
          blogHTML: "This is a filter blog post title",
          blogCoverPhoto: "beautiful-stories",
        },
        {
          title: "This is a filter Title2!",
          blogHTML: "This is a filter blog post title",
          blogCoverPhoto: "designed-for-everyone",
        },
      ],
    };
  },
};
</script>
