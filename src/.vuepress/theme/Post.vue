<template>
  <v-container grid-list-xl
               align-center
               class="blog-container">
    <v-layout row
              wrap>
      <v-flex xs12
              class="mb-3">
        <PostCard :post="$page"
                  :shadowZ="20"
                  layout="post">
          <Content></Content>
        </PostCard>
      </v-flex>
      <v-flex xs6
              class="text-xs-left">
        <v-btn flat
               color="primary"
               :to="$postNav.prev.path"
               v-if="$postNav.prev"
               class="post-nav">
          <div class="grey--text">
            <i class="fa mr-1 fa-chevron-left"></i>{{$tt('postNav_prev')}}</div>
          <div class="subheading hidden-xs-only">{{$postNav.prev.title}}</div>
        </v-btn>
      </v-flex>
      <v-flex xs6
              class="text-xs-right">
        <v-btn flat
               color="primary"
               :to="$postNav.next.path"
               v-if="$postNav.next"
               class="post-nav">
          <div class="grey--text">{{$tt('postNav_next')}}
            <i class="fa ml-1 fa-chevron-right"></i>
          </div>
          <div class="subheading hidden-xs-only">{{$postNav.next.title}}</div>
        </v-btn>
      </v-flex>
      <v-flex xs12
              class="mt-3">
        <Comment></Comment>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PostCard from './components/PostCard'
import Comment from './components/Comment'

export default {
  components: {
    PostCard,
    Comment
  },
}
</script>
<style lang="stylus">
@import './styles/config.styl';

.post-nav {
  &.btn {
    height: auto;
  }

  .btn__content {
    flex-direction: column;
    align-items: normal;
    padding: 8px 16px;
  }
}

.content.custom {
  display: block;
  font-size: 15px;
  line-height: 1.8;
  color: $content-color;

  p {
    word-wrap: break-word;
  }

  h1, h2, h3, h4, blockquote, ol, pre, table, ul, figure {
    margin-bottom: 20px;
  }

  h1, h2, h3, h4, h5, h6 {
    padding-top: 60px;
    margin-top: -56px;
    color: $primary-color;
    text-transform: capitalize;

    .header-anchor {
      margin-left: -1em;
      padding-right: 4px;
      color: $light-primary-color;
      opacity: 0;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    &:hover {
      .header-anchor {
        opacity: 1;
      }
    }
  }

  h1, h2, h3 {
    font-weight: 500;
  }

  a {
    text-decoration: none;

    &:hover {
      opacity: 0.8;
      text-decoration: underline;
    }
  }

  strong {
    font-weight: 600;
    margin: 0 0.2em;
  }

  code, kbd {
    display: inline;
    margin: 0 0.3em;
    padding: 2px 4px;
    box-shadow: none;
  }

  pre {
    margin-left: -28px;
    margin-right: -28px;
    padding: 20px 28px;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.6;
    background: #3e3e3e;

    code {
      margin: 0;
      padding: 0;
      background-color: transparent;
      font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
      font-size: 15px;
      font-weight: 500;
      color: rgba(255, 255, 255, 0.9);

      &:before, &:after {
        content: '';
        letter-spacing: 0;
      }
    }
  }

  pre[class^='language-'] {
    &:before {
      position: absolute;
      top: 0.8em;
      right: 1em;
      font-size: 12px;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  blockquote p:first-child, blockquote:first-child, ol:first-child, p:first-child, pre:first-child, table:first-child, ul:first-child, figure:first-child {
    margin-top: 0;
  }

  ol, ul {
    padding-left: 2em;
    font-size: 14px;
  }

  table {
    width: 100%;
    border: 1px solid #dedede;
    margin: 15px 0;
    border-collapse: collapse;
    border-spacing: 0;

    tr, td {
      // height: 35px;
    }

    thead {
      tr {
        background: #f8f8f8;
      }
    }

    tbody {
      tr {
        &:hover {
          background: #efefef;
        }
      }
    }

    td, th {
      border: 1px solid #dedede;
      padding: 6px 12px;
    }
  }

  video, audio {
    max-width: 100%;
  }

  .highlighted-line {
    display: block;
    margin: 0 -1.5rem;
    padding: 0 1.5rem;
    background-color: rgba(0, 0, 0, 66%);
  }
}

.custom-block {
  margin-bottom: 20px;
  padding: 16px 24px 0.2em;
  border-left-width: 5px;
  border-left-style: solid;
  border-radius: 4px;

  &-title {
    font-weight: 600;
  }

  &.tip {
    color: darken($content-tip-color, 20%);
    border-color: $content-tip-color;
    background: lighten($content-tip-color, 90%);
  }

  &.warning {
    color: darken($content-warning-color, 20%);
    border-color: $content-warning-color !important;
    background: lighten($content-warning-color, 90%) !important;
  }

  &.danger {
    color: darken($content-danger-color, 20%);
    border-color: $content-danger-color;
    background: lighten($content-danger-color, 90%);
  }
}
</style>
