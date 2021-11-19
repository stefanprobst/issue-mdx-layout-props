export default function Layout(props) {
  return <main>{props.children}</main>;
}

Layout.getPageWrapper = function (page) {
  return page;
};
