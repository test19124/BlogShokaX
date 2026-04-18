// cannot use path alias here because unocss can not resolve it
import { defineConfig } from "./toolkit/themeConfig";

export default defineConfig({
  siteName: "test19124's blog", // 网站名称
  locale: "zh-CN", // 网站语言
  brand: {
    title: "test19124's blog",
    subtitle: "Hello world!",
    logo: "",
  },
  copyright: {
    license: "CC-BY-NC-SA-4.0", // 许可证类型
    show: true, // 是否显示版权声明
  },
  footer: {
    since: 2019, // 博客起始年份
    count: true, // 显示统计信息
    powered: false, // 显示技术声明
    icp: {
      enable: false, // 启用 ICP 信息
      icpnumber: "津ICP备XXXXXXXX号", // 你的备案号
    },
  },
  widgets: {
    randomPosts: true, // 显示 10 篇随机文章
  },
  home: {
    pageSize: 5, // 每页显示 5 篇文章
    selectedCategories: [
      // 突出显示分类
      { 
        name: "编程",
        cover: "/images/tutorial-cover.jpg"
      },
    ],
  },
  nav: [
    {
      text: "首页",
      href: "/",
      icon: "i-ri-home-line",
    },
    {
      text: "关于我",
      href: "/about/",
      icon: "i-ri-user-smile-line",
    },
    {
      text: "文章",
      href: "/posts/",
      icon: "i-ri-quill-pen-fill",
      dropbox: {
        enable: true, // 启用下拉菜单
        items: [ // 子菜单内容
          {
            href: "/categories/",
            text: "分类",
            icon: "i-ri-book-shelf-fill",
          },
          {
            href: "/tags/",
            text: "标签",
            icon: "i-ri-price-tag-3-fill",
          },
          {
            href: "/archives/",
            text: "归档",
            icon: "i-ri-archive-line",
          },
        ],
      },
    },
  ],
  sidebar: {
    author: "test19124",
    description: "嘻嘻嘻西~",
    social: {
      github: {
        url: "https://github.com/test19124",
        icon: "i-ri-github-fill",
        color: "#24292f",
      },
      email: {
        url: "mailto:test19124@sina.com",
        icon: "i-ri-mail-line",
      },
    },
  },
});
