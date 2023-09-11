import MarkdownIt from "markdown-it";
import highlightjs from "markdown-it-highlightjs";
import markdownCopy from "markdown-it-code-copy";
import markdownAnchor from "markdown-it-anchor";
import markdownIframe from "markdown-it-iframe";
import slugify from "slugify";

export const md = new MarkdownIt({
  breaks: true,
})
  .use(highlightjs, {
    auto: true,
  })
  // .use(require("markdown-it-highlightjs"), {
  //   auto: true,
  //   inline: true,
  //   code: true,
  //   hljs,
  // })
  .use(markdownCopy, {
    iconClass: "",
    buttonClass: "copyBtn",
  })
  .use(markdownAnchor, { slugify })
  .use(markdownIframe, {
    allowfullscreen: true,
  });
