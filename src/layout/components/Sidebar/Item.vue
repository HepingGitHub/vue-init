<script>
export default {
  name: "MenuItem",
  functional: true,
  props: {
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },

  render(h, context) {
    let { title, icon } = context.props;
    let vnode = [];
    if (icon) {
      vnode.push(<i class={icon} />);
    }
    if (title) {
      vnode.push(<span slot="title"> {title} </span>);
    }

    return vnode;
  }
};
</script>