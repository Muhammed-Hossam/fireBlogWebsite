<template>
  <div class="blog-wrapper no-user">
    <div class="blog-content">
      <div>
        <h2 v-if="post.welcomeScreen">{{ post.title }}</h2>
        <h2 v-else>{{ post.title }}</h2>
        <p v-if="post.welcomeScreen">{{ post.blogPost }}</p>
        <p v-else class="content-preview">{{ post.blogHTML }}</p>
        <router-link v-if="post.welcomeScreen" class="link link-light" to="#">
          Login/Register<SVGIcon
            name="arrow-right-light"
            class="arrow arrow-light"
          />
        </router-link>
        <router-link v-else class="link" to="#">
          View The Post<SVGIcon name="arrow-right-light" class="arrow" />
        </router-link>
      </div>
    </div>
    <div class="blog-photo">
      <img
        v-if="post.welcomeScreen"
        :src="require(`../assets/blogPhotos/${post.photo}.jpg`)"
        alt=""
      />
      <img
        v-else
        :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["post"],
};
</script>

<style lang="scss" scoped>
.blog-wrapper {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  @media (min-width: 43.75rem) {
    min-height: 40.625rem;
    max-height: 40.625rem;
    flex-direction: row;
  }
  .blog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 4;
    order: 2;
    @media (min-width: 43.75rem) {
      order: 1;
    }
    @media (min-width: 50rem) {
      flex: 3;
    }

    div {
      max-width: 23.438rem;
      padding: 4.5rem 1.5rem;
      @media (min-width: 43.75rem) {
        padding: 0 1.5rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: 300;
        text-transform: uppercase;
        margin-bottom: 1.5rem;
        @media (min-width: 43.75rem) {
          font-size: 2.5rem;
        }
      }
      p {
        font-size: 0.938rem;
        font-weight: 300;
        line-height: 1.7;
      }
      .content-preview {
        font-size: 0.813rem;
        max-height: 1.5rem;
        width: 15.625rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      .link {
        display: inline-flex; // search for it.
        align-items: center;
        margin-top: 2rem;
        padding-bottom: 0.25rem;
        border-bottom: 1px solid transparent;
        transition: all 0.5s ease-in;

        &:hover {
          border-bottom-color: #303030;
        }
      }
      .link-light {
        &:hover {
          border-bottom-color: #fff;
        }
      }
    }
  }

  .blog-photo {
    order: 1;
    flex: 3;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);

    @media (min-width: 43.75rem) {
      order: 2;
    }
    @media (min-width: 50rem) {
      flex: 4;
    }

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &:nth-child(even) {
    .blog-content {
      order: 2;
    }
    .blog-photo {
      order: 1;
    }
  }
}

.no-user:first-child {
  .blog-content {
    background-color: #303030;
    color: #fff;
  }
}
// Just finish Blog Post Component.
</style>
