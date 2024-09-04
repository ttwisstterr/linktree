async function loadLinks() {
  let dataLinks;
  await fetch('mylink.json').then(res => res.json()).then(json => dataLinks = json)
  const vm = new Vue({ el: '#links', data: { dataLinks } })
}
loadLinks()
