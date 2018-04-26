<template>
    <div class="container post-main">
        <article class="post-content">
            <div class="post-date">{{$page.frontmatter.date}}</div>
            <Content></Content>
            <ul class="post-tags">
                <li v-for="tag in $page.frontmatter.tags">{{tag}}</li>
            </ul>
        </article>
    </div>
</template>
<script>
export default {
    name: ''
}
</script>
<style lang="less">
@import './styles/config.less';

.post-main {
    padding: 0 0 50px;
}
.post-tags {
    li {
        display: inline-block;
        margin: 0 4px;
        padding: 4px 16px;
        background: #eee;
    }
}
.post-date {
    margin-bottom: 10px;
    color: @secondaryTextColor;
    font-size: 13px;
    font-weight: bold;
}
.post-content {
    margin-top: -20px;
    min-height: 100px;
    line-height: 1.8;
    padding: 35px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    > .highlight,
    > .image-bubble,
    > pre {
        margin-left: -35px;
        margin-right: -35px;
    }

    > .highlight,
    > pre {
        padding: 20px 35px;
    }

    .image-bubble {
        margin-top: 20px;
        margin-bottom: 20px;
        text-align: center;
    }
    .image-caption {
        display: inline-block;
        margin-top: 10px;
        color: @secondaryTextColor;
    }

    .headerlink {
        visibility: hidden;
        margin-left: -1em;
        padding-right: 5px;
        color: @lightPrimaryColor;

        &:before {
            content: '#';
        }
    }

    p {
        word-wrap: break-word;
    }

    p,
    li {
        a {
            color: @accentColor;
            border-bottom: 1px dotted lighten(@accentColor, 20%);
            word-break: break-all;

            &:hover,
            &:active {
                text-decoration: none;
                border-bottom-style: solid;
                opacity: 0.7;
            }
        }
    }

    strong {
        font-weight: 600;
        color: @primaryColor;
        a {
            border-color: @accentColor;
        }
    }

    em {
        color: @secondaryTextColor;
    }

    h1 {
        font-size: 24px;
    }

    h2 {
        font-size: 22px;
    }

    h3 {
        font-size: 20px;
    }

    h4 {
        font-size: 18px;
    }

    h5 {
        font-size: 16px;
    }

    h6 {
        font-size: 14px;
    }

    h1,
    h2,
    h3,
    h4,
    h5 {
        padding-top: @headerH;
        margin-top: @headerH * -1;
    }

    h1,
    h2,
    h3,
    h4,
    blockquote,
    ol,
    p,
    pre,
    table,
    ul,
    figure,
    .video-container {
        margin-bottom: 20px;
    }
    .video-container iframe {
        max-width: 100%;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: @primaryColor;
        &:hover {
            .headerlink {
                visibility: visible;
            }
        }
    }

    blockquote p:first-child,
    blockquote:first-child,
    ol:first-child,
    p:first-child,
    pre:first-child,
    table:first-child,
    ul:first-child,
    figure:first-child {
        margin-top: 0;
    }

    ol,
    ul {
        font-size: 14px;
        line-height: 30px;
    }

    video,
    audio {
        max-width: 100%;
    }

    blockquote {
        position: relative;
        padding: 16px 20px;
        border-left: 4px solid @primaryColor;
        color: lighten(@primaryTextColor, 30%);
        background: @codeBg;
        font-size: 14px;
        border-radius: 0 2px 2px 0;

        p {
            margin: 0;
        }

        footer {
            margin-top: 10px;
            text-align: right;
            font-size: 80%;
        }
    }

    table {
        width: 100%;
        border: 1px solid #dedede;
        margin: 15px 0;
        border-collapse: collapse;

        tr,
        td {
            height: 35px;
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

        td,
        th {
            border: 1px solid #dedede;
            padding: 0 10px;
        }
    }

    figure {
        table {
            border: none;
            width: auto;
            margin: 0;

            tbody {
                tr {
                    &:hover {
                        background: none;
                    }
                }

                td {
                    border: none;
                }
            }
        }
    }

    code,
    kbd,
    pre,
    samp {
        font-family: @font-code;
    }

    code,
    pre {
        background: @codeBg;
    }

    p code,
    li code {
        color: @accentColor;
        line-height: 1;
        margin: 0 4px;
        font-size: 80%;
        padding: 3px 5px;
        border: 1px solid #eee;
        border-radius: 2px;
        word-wrap: break-word;
    }

    pre {
        margin: 24px 0;
        code {
            border-radius: 0;
            font-size: inherit;
            margin: 0;
            padding: 0;
        }
    }
}
</style>
